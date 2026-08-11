import { translations } from './translations';

let cachedCount: number | null = null;
let cachedLatency: number | null = null;

export const initVisitorCounter = async (
    lang: 'pt' | 'en' = 'pt', 
    containerId: string = 'visitor-counter'
): Promise<void> => {
    const container = document.getElementById(containerId);
    if (!container) return;

    const dict = translations[lang];

    // Se já tivermos os dados cacheados, re-renderiza com os valores existentes
    if (cachedCount !== null && cachedLatency !== null) {
        renderCounterHtml(container, cachedCount, cachedLatency, dict);
        return;
    }

    // Estado inicial de carregamento
    container.innerHTML = `
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/50 dark:bg-[#0a0a0a]/80 backdrop-blur-sm border border-zinc-200 dark:border-zinc-800/80 shadow-sm font-mono text-xs text-zinc-500">
            <span class="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span>${dict["counter_visits"]}: <span class="text-zinc-400 animate-pulse">...</span></span>
        </div>
    `;

    try {
        const hostname = window.location.hostname && window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1'
            ? window.location.hostname 
            : 'samuelspineli.dev';

        const namespace = hostname.replace(/[^a-zA-Z0-9_.-]/g, '');
        const key = 'visits';

        // Medição da latência (Ping)
        const startTime = performance.now();
        const response = await fetch(`https://abacus.jasoncameron.dev/hit/${namespace}/${key}`);
        const endTime = performance.now();

        if (!response.ok) throw new Error('Falha na API');

        const data = await response.json();
        
        // Uso de constantes locais para garantir tipo 'number' estrito
        const count = typeof data.value === 'number' ? data.value : 0;
        const latency = Math.round(endTime - startTime);

        cachedCount = count;
        cachedLatency = latency;

        renderCounterHtml(container, count, latency, dict);
    } catch (error) {
        console.error('Erro no contador:', error);
        container.innerHTML = `
            <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/50 dark:bg-[#0a0a0a]/80 backdrop-blur-sm border border-zinc-200 dark:border-zinc-800/80 font-mono text-xs text-zinc-500">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                <span>${dict["counter_status"]}</span>
            </div>
        `;
    }
};

const renderCounterHtml = (
    container: HTMLElement, 
    count: number, 
    latency: number, 
    dict: Record<string, string>
) => {
    const formattedCount = count.toLocaleString();

    container.innerHTML = `
        <div class="inline-flex flex-wrap items-center justify-center gap-3 px-4 py-1.5 rounded-xl bg-white/60 dark:bg-[#0a0a0a]/90 backdrop-blur-md border border-zinc-200 dark:border-zinc-800/80 shadow-sm font-mono text-xs group hover:border-cyan-500/40 transition-all duration-300">
            
            <!-- Status Pulsando -->
            <div class="flex items-center gap-2">
                <span class="relative flex h-2 w-2">
                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                </span>
                <span class="text-zinc-500 dark:text-zinc-400 tracking-wider text-[11px]">${dict["counter_visits"]}:</span>
                <span class="font-bold text-cyan-600 dark:text-cyan-400 text-sm tracking-tight">${formattedCount}</span>
            </div>

            <!-- Divisora estilizada estilo CLI -->
            <span class="text-zinc-300 dark:text-zinc-800 font-light">|</span>

            <!-- Métrica extra: Latência de Rede (Ping) -->
            <div class="flex items-center gap-1.5 text-[11px] text-zinc-400 dark:text-zinc-500">
                <span>${dict["counter_latency"]}:</span>
                <span class="text-emerald-600 dark:text-emerald-400 font-semibold">${latency}ms</span>
            </div>

        </div>
    `;
};