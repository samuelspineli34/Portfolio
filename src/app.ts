import { translations, projectData, Project } from './translations';

declare global {
    interface Window {
        toggleTheme: () => void;
        setLanguage: (lang: 'pt' | 'en') => void;
    }
}

const BASE_URL = import.meta.env.BASE_URL;

const initPlexusCanvas = (canvasId: string): void => {
    const canvas = document.getElementById(canvasId) as HTMLCanvasElement | null;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const resize = () => {
        if (!canvas.parentElement) return;
        width = canvas.width = canvas.parentElement.clientWidth;
        height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', resize);

    const mouse = { x: -1000, y: -1000, radius: 150 };

    window.addEventListener('mousemove', (e) => {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
    });

    window.addEventListener('mouseleave', () => {
        mouse.x = -1000;
        mouse.y = -1000;
    });

    const numParticles = Math.floor((width * height) / 18000); 
    const maxDistance = 125;
    const speed = 0.15;

    interface Particle {
        x: number;
        y: number;
        vx: number;
        vy: number;
        radius: number;
    }

    const particles: Particle[] = [];
    for (let i = 0; i < numParticles; i++) {
        particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * speed,
            vy: (Math.random() - 0.5) * speed,
            radius: Math.random() * 1.2 + 0.9,
        });
    }

    const draw = () => {
        ctx.clearRect(0, 0, width, height);

        const isDark = document.documentElement.classList.contains('dark');
        const color = isDark ? '255, 255, 255' : '15, 23, 42';

        for (let i = 0; i < particles.length; i++) {
            const p = particles[i];
            
            const dxMouse = mouse.x - p.x;
            const dyMouse = mouse.y - p.y;
            const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

            if (distMouse < mouse.radius) {
                const force = (mouse.radius - distMouse) / mouse.radius;
                p.x -= (dxMouse / distMouse) * force * 1.2;
                p.y -= (dyMouse / distMouse) * force * 1.2;

                const mouseAlpha = (1 - distMouse / mouse.radius) * 0.5;
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(mouse.x, mouse.y);
                ctx.strokeStyle = `rgba(6, 182, 212, ${mouseAlpha})`;
                ctx.lineWidth = 0.9;
                ctx.stroke();
            }

            p.x += p.vx;
            p.y += p.vy;

            if (p.x < 0 || p.x > width) p.vx *= -1;
            if (p.y < 0 || p.y > height) p.vy *= -1;

            // Opacidade dos pontos ajustada para 0.55
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${color}, 0.55)`;
            ctx.fill();
        }

        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const p1 = particles[i];
                const p2 = particles[j];
                const dx = p1.x - p2.x;
                const dy = p1.y - p2.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < maxDistance) {
                    // 2. Opacidade das linhas reajustada (0.25)
                    const alpha = (1 - dist / maxDistance) * (isDark ? 0.25 : 0.20);

                    ctx.beginPath();
                    ctx.moveTo(p1.x, p1.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.strokeStyle = `rgba(${color}, ${alpha})`;
                    ctx.lineWidth = 0.8;
                    ctx.stroke();

                    // 3. Opacidade dos triângulos reajustada para 0.045
                    for (let k = j + 1; k < particles.length; k++) {
                        const p3 = particles[k];
                        const dx2 = p1.x - p3.x;
                        const dy2 = p1.y - p3.y;
                        const dist2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);

                        const dx3 = p2.x - p3.x;
                        const dy3 = p2.y - p3.y;
                        const dist3 = Math.sqrt(dx3 * dx3 + dy3 * dy3);

                        if (dist2 < maxDistance && dist3 < maxDistance) {
                            const triAlpha = (1 - (dist + dist2 + dist3) / (maxDistance * 3)) * (isDark ? 0.050 : 0.02);
                            ctx.beginPath();
                            ctx.moveTo(p1.x, p1.y);
                            ctx.lineTo(p2.x, p2.y);
                            ctx.lineTo(p3.x, p3.y);
                            ctx.closePath();
                            ctx.fillStyle = `rgba(${color}, ${triAlpha})`;
                            ctx.fill();
                        }
                    }
                }
            }
        }

        requestAnimationFrame(draw);
    };

    draw();
};

// Função para renderizar/recarregar o Selo do LinkedIn
const renderLinkedInBadge = (): void => {
    const container = document.getElementById('linkedin-badge-container');
    if (!container) return;

    const isDark = document.documentElement.classList.contains('dark');
    const theme = isDark ? 'dark' : 'light';

    container.innerHTML = `
        <div class="flex flex-col items-center justify-center">
            
            <!-- FALLBACK REDONDO (Se o script do LinkedIn não rodar) -->
            <div id="linkedin-fallback" class="w-fit bg-transparent flex flex-col items-center text-center font-sans">
                <div class="relative group">
                    <div class="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur opacity-50 group-hover:opacity-100 transition duration-300"></div>
                    <img src="imagens/eu.png" alt="Samuel Spineli" class="relative w-48 h-48 object-cover rounded-full border-2 border-cyan-500/80 shadow-2xl">
                </div>
            </div>

            <!-- SELO OFICIAL DO LINKEDIN -->
            <div class="badge-base LI-profile-badge" 
                 data-locale="pt_BR" 
                 data-size="large" 
                 data-theme="${theme}" 
                 data-type="VERTICAL" 
                 data-vanity="samuel-spineli" 
                 data-version="v1">
            </div>

        </div>
    `;

    const oldScript = document.getElementById('linkedin-script');
    if (oldScript) oldScript.remove();

    const script = document.createElement('script');
    script.id = 'linkedin-script';
    script.src = 'https://platform.linkedin.com/badges/js/profile.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
};

const toggleTheme = (): void => {
    document.documentElement.classList.toggle('dark');
    const isDark = document.documentElement.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateThemeIcon();
    renderLinkedInBadge();
};

const updateThemeIcon = (): void => {
    const iconElement = document.getElementById('theme-icon');
    if (!iconElement) return;
    const isDark = document.documentElement.classList.contains('dark');
    iconElement.innerHTML = isDark ?
        `<svg class="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"></path></svg>` :
        `<svg class="w-4 h-4 text-zinc-600" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>`;
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
    const stack = ["TypeScript", "Python", "PostgreSQL", "Software Architecture", "API Integration", "Flutter", "Machine Learning", "Linux"];
    const container = document.getElementById('tech-stack');
    if (container) container.innerHTML = stack.map(t => `<span class="tech-badge">${t}</span>`).join('');
};

// Adicione esta função no seu src/app.ts:
const initScrollReveal = (): void => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('section, footer').forEach(el => {
        el.classList.add('reveal-section');
        observer.observe(el);
    });
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
        <div class="pl-8 relative timeline-item">
            <div class="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                <h3 class="text-lg font-bold text-zinc-900 dark:text-zinc-100">${i.corp}</h3>
                <span class="text-xs font-mono text-zinc-500">${i.date}</span>
            </div>
            <p class="text-cyan-600 dark:text-cyan-400 font-mono text-xs font-semibold tracking-wider uppercase mt-1">
                ${translations[lang][i.role]}
            </p>
            <p class="text-sm text-zinc-600 dark:text-zinc-400 mt-3 leading-relaxed">
                ${translations[lang][i.desc]}
            </p>
        </div>
    `).join('');
};

const renderProjects = (lang: 'pt' | 'en'): void => {
    const grid = document.getElementById('projects-grid');
    if (!grid) return;

    const featured = projectData.filter(p => p.featured);
    const others = projectData.filter(p => !p.featured);

    const cardHtml = (p: Project, isFeatured: boolean) => {
        const articleLabel = translations[lang]["read_article"];
        return `
            <div class="project-card bg-white dark:bg-[#0a0a0a] rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800/80 flex flex-col h-full group">
                <div class="relative overflow-hidden ${isFeatured ? 'h-52' : 'h-40'} bg-black">
                    <img src="${BASE_URL}imagens/${p.img}" class="w-full h-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105 group-hover:opacity-100" alt="${p.title}">
                    ${p.hasCiCd ? `<div class="absolute top-3 left-3 bg-black/90 border border-cyan-500/40 text-cyan-400 font-mono text-[9px] font-bold px-2 py-0.5 rounded shadow-lg backdrop-blur-md">CI/CD ACTIVE</div>` : ''}
                </div>
                <div class="p-6 flex flex-col flex-grow">
                    <div class="flex flex-wrap gap-1.5 mb-3">
                        ${p.tech.map(t => `<span class="tech-badge">${t}</span>`).join('')}
                    </div>
                    <h3 class="${isFeatured ? 'text-xl' : 'text-base'} font-bold text-zinc-900 dark:text-zinc-100 mb-2 font-mono tracking-tight">${p.title}</h3>
                    <p class="text-xs text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed flex-grow">
                        ${translations[lang][p.descKey]}
                    </p>
                    <div class="flex flex-wrap items-center gap-y-2 gap-x-5 mt-auto pt-4 border-t border-zinc-100 dark:border-zinc-800/80 font-mono text-xs">
                        <a href="${p.link}" target="_blank" class="text-cyan-600 dark:text-cyan-400 hover:underline font-semibold flex items-center gap-1">GitHub &rarr;</a>
                        ${p.liveLink ? `<a href="${p.liveLink}" target="_blank" class="text-emerald-500 hover:underline font-semibold flex items-center gap-1">Live &rarr;</a>` : ''}
                        ${p.articleLink ? `<a href="${p.articleLink}" target="_blank" class="text-amber-500 hover:underline font-semibold flex items-center gap-1">${articleLabel} &rarr;</a>` : ''}
                    </div>
                </div>
            </div>
        `;
    };

    grid.innerHTML = `
        <div class="col-span-full mb-8">
            <h3 class="text-xs font-mono font-bold uppercase tracking-widest text-cyan-500 mb-6">${translations[lang]["section-eng-projects"]}</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">${featured.map(p => cardHtml(p, true)).join('')}</div>
        </div>
        <div class="col-span-full mt-8">
            <h3 class="text-xs font-mono font-bold uppercase tracking-widest text-cyan-500 mb-6">${translations[lang]["section-other-projects"]}</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">${others.map(p => cardHtml(p, false)).join('')}</div>
        </div>
    `;

    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = (card as HTMLElement).getBoundingClientRect();
            const x = (e as MouseEvent).clientX - rect.left;
            const y = (e as MouseEvent).clientY - rect.top;
            (card as HTMLElement).style.setProperty('--mouse-x', `${x}px`);
            (card as HTMLElement).style.setProperty('--mouse-y', `${y}px`);
        });
    });
};

const init = (): void => {
    updateThemeIcon();
    setLanguage('pt');
    renderLinkedInBadge();
    initPlexusCanvas('plexus-canvas');
    initPlexusCanvas('plexus-canvas-projects');
    initScrollReveal();
};

window.toggleTheme = toggleTheme;
window.setLanguage = setLanguage;
window.onload = init;