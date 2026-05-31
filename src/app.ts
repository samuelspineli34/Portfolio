import { translations, projectData, Project } from './translations';

declare global {
    interface Window {
        toggleTheme: () => void;
        setLanguage: (lang: 'pt' | 'en') => void;
    }
}

const BASE_URL = import.meta.env.BASE_URL;

const toggleTheme = (): void => {
    document.documentElement.classList.toggle('dark');
    const isDark = document.documentElement.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateThemeIcon();
};

const updateThemeIcon = (): void => {
    const iconElement = document.getElementById('theme-icon');
    if (!iconElement) return;
    const isDark = document.documentElement.classList.contains('dark');
    iconElement.innerHTML = isDark ?
        `<svg class="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"></path></svg>` :
        `<svg class="w-5 h-5 text-slate-600" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>`;
};

const setLanguage = (lang: 'pt' | 'en'): void => {
    const dict = translations[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (key && dict[key]) (el as HTMLElement).innerHTML = dict[key];
    });
    document.getElementById('btn-pt')?.classList.toggle('active', lang === 'pt');
    document.getElementById('btn-en')?.classList.toggle('active', lang === 'en');

    renderExperience(lang);
    renderProjects(lang);
    renderTechStack();
};

const renderTechStack = (): void => {
    const stack = ["TypeScript", "Python", "PostgreSQL", "Software Architecture", "API Integration", "Flutter", "Machine Learning"];
    const container = document.getElementById('tech-stack');
    if (container) container.innerHTML = stack.map(t => `<span class="tech-badge">${t}</span>`).join('');
};

const renderExperience = (lang: 'pt' | 'en'): void => {
    const list = document.getElementById('experience-list');
    if (!list) return;
    const items = [
        { corp: "Draft Solutions", role: "exp_draft_role", date: "Jul. 2025 - Pres", desc: "exp_draft_desc" },
        { corp: "Telefonica (Vivo)", role: "exp_tele_role", date: "Jun. 2022 - Jan. 2023", desc: "exp_tele_desc" },
        { corp: "Sermicro", role: "exp_ser_role", date: "Jan. 2022 - Jun. 2022", desc: "exp_ser_desc" }
    ];
    list.innerHTML = items.map(i => `
        <div class="pl-10 relative timeline-item mb-12">
            <div class="flex justify-between items-baseline">
                <h4 class="text-xl font-bold dark:text-white">${i.corp}</h4>
                <span class="text-xs font-bold text-slate-400">${i.date}</span>
            </div>
            <p class="text-blue-600 text-xs font-bold uppercase tracking-wider mt-1">${translations[lang][i.role]}</p>
            <p class="text-sm text-slate-500 dark:text-slate-400 mt-3 leading-relaxed">${translations[lang][i.desc]}</p>
        </div>
    `).join('');
};

const renderProjects = (lang: 'pt' | 'en'): void => {
    const grid = document.getElementById('projects-grid');
    if (!grid) return;

    const featured = projectData.filter(p => p.featured);
    const others = projectData.filter(p => !p.featured);

        const cardHtml = (p: Project, isLarge: boolean) => `
        <div class="project-card bg-white dark:bg-slate-800 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col h-full group">
            <div class="relative overflow-hidden ${isLarge ? 'h-64' : 'h-48'}">
                <!-- 2. Use o BASE_URL para o caminho das imagens -->
                <img src="${BASE_URL}imagens/${p.img}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt="${p.title}">
                ${p.hasCiCd ? `<div class="absolute top-4 left-4 bg-blue-600 text-white text-[8px] font-black px-2 py-1 rounded shadow-lg">CI/CD PIPELINE ACTIVE</div>` : ''}
            </div>
            <div class="p-8 flex flex-col flex-grow">
                <div class="flex flex-wrap gap-2 mb-4">
                    ${p.tech.map(t => `<span class="tech-badge">${t}</span>`).join('')}
                </div>
                <h4 class="${isLarge ? 'text-2xl' : 'text-lg'} font-black dark:text-white mb-3">${p.title}</h4>
                <p class="text-sm text-slate-500 dark:text-slate-400 mb-6 leading-relaxed flex-grow">
                    ${translations[lang][p.descKey]}
                </p>
                <div class="flex flex-wrap gap-y-2 gap-x-6 mt-auto pt-4 border-t border-slate-100 dark:border-slate-700">
                    <a href="${p.link}" target="_blank" class="text-blue-600 dark:text-blue-400 text-xs font-black uppercase tracking-widest hover:underline">GitHub</a>
                    ${p.liveLink ? `<a href="${p.liveLink}" target="_blank" class="text-emerald-600 dark:text-emerald-400 text-xs font-black uppercase tracking-widest hover:underline">Live Demo</a>` : ''}
                    ${p.articleLink ? `<a href="${p.articleLink}" target="_blank" class="text-amber-600 dark:text-amber-400 text-xs font-black uppercase tracking-widest hover:underline">${translations[lang]["read_article"]}</a>` : ''}
                </div>
            </div>
        </div>
    `;

    grid.innerHTML = `
        <div class="col-span-full mb-12">
            <h3 class="text-2xl font-black uppercase tracking-tighter mb-8 border-l-4 border-blue-600 pl-4 dark:text-white">
                ${translations[lang]["section-projects"]}
            </h3>
            <!-- Alterado para lg:grid-cols-3 -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                ${featured.map(p => cardHtml(p, true)).join('')}
            </div>
        </div>
        <div class="col-span-full mt-12">
            <h3 class="text-xl font-black uppercase tracking-tighter mb-8 border-l-4 border-slate-400 pl-4 text-slate-500">
                ${translations[lang]["section-other-projects"]}
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                ${others.map(p => cardHtml(p, false)).join('')}
            </div>
        </div>
    `;
};

const init = (): void => {
    updateThemeIcon();
    setLanguage('pt');
};

window.toggleTheme = toggleTheme;
window.setLanguage = setLanguage;
window.onload = init;