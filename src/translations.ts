export interface Project {
    title: string;
    img: string;
    tech: string[];
    link: string;
    liveLink?: string;
    featured: boolean;
    descKey: string;
    hasCiCd?: boolean;
    articleLink?: string;
}

export const translations: Record<string, Record<string, string>> = {
    pt: {
        "nav-role": "ENGENHEIRO DE SOFTWARE",
        "nav-about": "Sobre", "nav-exp": "Experiência", "nav-projects": "Projetos", "nav-contact": "Contato",
        "hero-summary": "Bacharel em Ciência da Computação com experiência prática no desenvolvimento de software corporativo. Atualmente, foco na construção e evolução de plataformas internas, atuando no frontend com TypeScript e na integração com backends em Python. Participo ativamente do levantamento de requisitos e de decisões arquiteturais, buscando aprimorar constantemente minhas competências para entregar soluções robustas, seguras e bem estruturadas.",
        "section-exp": "Trajetória Profissional",
        "section-edu": "Formação Acadêmica",
        "edu-degree": "Bacharelado em Ciência da Computação",
        "section-projects": "Projetos",
        "section-eng-projects": "Engenharia de Software & TCC",
        "section-other-projects": "Ferramentas & Pesquisa Científica",
        "footer-contact": "Estabelecer Conexão",
        "read_article": "Ler Artigo Científico",

        "exp_draft_role": "Desenvolvedor de Software",
        "exp_draft_desc": "Engenharia e manutenção de plataforma interna com stack TypeScript (Vite + Bun). Atuação estratégica no levantamento de requisitos com usuários e definição da arquitetura técnica. Responsável pela integração Full Stack (Python Flask), modelagem de dados relacionais em PostgreSQL e implementação de processos de build para deploy on-premise.",

        "exp_tele_role": "Service Desk (Vivo)",
        "exp_tele_desc": "Diagnóstico de incidentes críticos (N1) em infraestrutura de rede e estações de trabalho corporativas. Gestão de identidades via Active Directory e documentação técnica de procedimentos operacionais sob rigorosos níveis de SLA.",

        "exp_ser_role": "Analista de Suporte N1",
        "exp_ser_desc": "Atendimento inicial, categorização de incidentes e suporte remoto em ambiente de larga escala, garantindo a continuidade operacional de sistemas internos.",

        "desc-genre": "Trabalho de Conclusão de Curso (TCC). Pesquisa comparativa entre Random Forest e Redes Neurais para identificação de gêneros musicais. O sistema processa áudio via Mel-Espectrogramas (Escala Mel de Stevens) para extrair características tonais e harmônicas, automatizando a geração de acompanhamentos MIDI com coerência rítmica baseada no BPM detectado.",
        "desc-kaiji": "Extensão de produtividade gamificada para o VS Code baseada na obra de Nobuyuki Fukumoto. Transforma o ato de salvar arquivos válidos em um ciclo de risco e recompensa com moedas virtuais, caça-níquel em tempo real, conquistas e decoração isométrica.",
        "desc-osaka": "Sistema corporativo de Ticket Management. Arquitetura modular (DAO/DTO), controle de acesso RBAC granular, autenticação JWT e segurança de credenciais com hashing scrypt via PostgreSQL.",
        "desc-hemo": "Logística crítica para doação de sangue. Integração com Google Maps API para geolocalização e sincronização assíncrona via Firebase, conectando doadores a demandas hospitalares em tempo real.",
        "desc-uvd": "Automação de extração de mídia desktop. Integração de baixo nível com yt-dlp e multiplexação de streams 4K via FFmpeg, otimizado para alta performance.",
        "desc-fretly": "Web tool pedagógica para músicos. Aplica algoritmos de Shuffle Bag para treinamento de leitura à primeira vista no braço da guitarra, com síntese de áudio real (Tone.js).",
        "desc-osteo": "Pesquisa em sistemas distribuídos e computação paralela para detecção assistida de Osteoartrose de joelho em exames de imagem médica.",
        "desc-uvc": "Monitoramento IoT de radiação UV. Integração entre firmware ESP32 e interface mobile Flutter via protocolo HTTP para análise de risco em tempo real.",
        "desc-block": "throughput de mineração em Blockchain. Otimização de processamento de hashes através de paralelismo de hardware em C++.",
        "desc-lista": "Implementação de RAG (Retrieval-Augmented Generation) para consulta semântica em documentos PDF utilizando modelos LLM da OpenAI.",
        "desc-geo": "Renderizador gráfico fundamentado em geometria analítica. Implementação de algoritmos Bresenham e DDA para transformações lineares 2D.",
    },
    en: {
        "nav-role": "SOFTWARE ENGINEER",
        "nav-about": "About", "nav-exp": "Experience", "nav-projects": "Projects", "nav-contact": "Contact",
        "hero-summary": "Computer Science Bachelor with hands-on experience in corporate software development. Currently focused on building and evolving internal platforms, working with TypeScript for frontend and Python for backend integration. I actively participate in requirements gathering and architectural decision-making, aiming to continuously improve my skills to deliver robust, secure, and well-structured solutions.",
        "section-exp": "Professional Path",
        "section-edu": "Education",
        "edu-degree": "B.S. in Computer Science",
        "section-projects": "Projects",
        "section-eng-projects": "Software Engineering & Thesis",
        "section-other-projects": "Tools & Scientific Research",
        "footer-contact": "Connect",
        "read_article": "Read Scientific Paper",

        "exp_draft_role": "Software Developer",
        "exp_draft_desc": "Internal engineering platform development using TypeScript (Vite + Bun). Strategic requirements gathering with users and technical architecture design. Responsible for Full Stack integration (Python Flask), PostgreSQL relational data modeling, and on-premise infrastructure deployment.",
        "exp_tele_role": "L1 Technical Support",
        "exp_tele_desc": "Diagnosis and resolution of critical incidents in network infrastructure and corporate workstations. Identity management via Active Directory and technical documentation under strict SLAs.",
        "exp_ser_role": "Support Specialist",
        "exp_ser_desc": "Initial incident handling and remote support in large-scale environments, ensuring operational continuity for internal systems.",

        "desc-genre": "Undergraduate Thesis (TCC). Comparative research between Random Forest and Neural Networks for music genre identification. The system processes audio via Mel-Spectrograms (Stevens Mel Scale) to extract tonal and harmonic features, automating MIDI accompaniment generation with rhythmic coherence based on detected BPM.",
        "desc-kaiji": "Gamified productivity extension for VS Code inspired by Nobuyuki Fukumoto's work. It transforms valid file saves into a high-stakes loop with virtual coins, built-in slots, achievements, and isometric room customization.",
        "desc-osaka": "Enterprise Ticket Management solution. Modular architecture (DAO/DTO), granular RBAC access control, JWT authentication, and scrypt credential security via PostgreSQL.",
        "desc-hemo": "Critical logistics for blood donation. Integration with Google Maps API for geolocation and asynchronous synchronization via Firebase, connecting donors to real-time hospital demands.",
        "desc-uvd": "Desktop media extraction automation. Low-level yt-dlp integration and 4K stream multiplexing via FFmpeg, performance-optimized for high throughput.",
        "desc-fretly": "Educational web tool for musicians. Applies Shuffle Bag algorithms for guitar fretboard sight-reading training, featuring real audio synthesis (Tone.js).",
        "desc-osteo": "Research in distributed systems and parallel computing for assisted detection of knee Osteoarthritis in medical imaging.",
        "desc-uvc": "IoT UV radiation monitoring. Integration between ESP32 firmware and Flutter mobile interface via HTTP protocol for real-time risk analysis.",
        "desc-block": "Blockchain mining throughput. Optimization of hash processing through hardware parallelism in C++.",
        "desc-lista": "RAG (Retrieval-Augmented Generation) implementation for semantic PDF analysis using OpenAI LLM models.",
        "desc-geo": "Graphical renderer based on analytical geometry. Low-level implementation of Bresenham and DDA algorithms for 2D linear transformations.",
    }
};

export const projectData: Project[] = [
    {
        title: "Kaiji (VS Code Extension)",
        img: "kaiji.png",
        tech: ["TypeScript", "VS Code API", "Webviews"],
        link: "https://github.com/samuelspineli34/kaiji",
        liveLink: "https://marketplace.visualstudio.com/items?itemName=NullGarden.kaiji",
        featured: true,
        descKey: "desc-kaiji"
    },
    {
        title: "Osaka Tech CRM",
        img: "osaka.png",
        tech: ["Python", "JWT", "DAO/DTO"],
        link: "https://github.com/samuelspineli34/Osaka-Tech",
        liveLink: "https://osakatech.vercel.app/login",
        featured: true,
        descKey: "desc-osaka",
        hasCiCd: true
    },
    {
        title: "GenreID AI (TCC)",
        img: "classificador.png",
        tech: ["ML", "Librosa", "Flask"],
        link: "https://github.com/samuelspineli34/GenreID",
        articleLink: "https://bib.pucminas.br/pergamumweb/download/F7248639-17FD-4F19-AF95-68B4A461C381.pdf",
        featured: true,
        descKey: "desc-genre"
    },
    {
        title: "Conexão Hemocentros",
        img: "Hemocentro.png",
        tech: ["Flutter", "Firebase", "Maps API"],
        link: "https://github.com/samuelspineli34/Hemocentro",
        featured: true,
        descKey: "desc-hemo"
    },
    {
        title: "Universal Downloader",
        img: "uvd.png",
        tech: ["FFmpeg", "yt-dlp", "Python"],
        link: "https://github.com/samuelspineli34/universal-video-downloader",
        featured: false,
        descKey: "desc-uvd"
    },
    {
        title: "Fretly",
        img: "fretly.png",
        tech: ["TS", "Tone.js", "VexFlow"],
        link: "https://github.com/samuelspineli34/Fretly",
        liveLink: "http://samuelspineli34.github.io/Fretly/",
        featured: false,
        descKey: "desc-fretly",
        hasCiCd: true
    },
    { title: "Blockchain Parallel", img: "blockchain.png", tech: ["C++", "HPC"], link: "https://github.com/samuelspineli34/Blockchain-Paralela", featured: false, descKey: "desc-block" },
    { title: "UVC Seguro", img: "uvc.png", tech: ["ESP32", "Flutter"], link: "https://github.com/samuelspineli34/Aplicativo-Risco-UV", featured: false, descKey: "desc-uvc" },
    { title: "PDF Assistant AI", img: "lista.png", tech: ["Python", "OpenAI"], link: "https://github.com/samuelspineli34/ListaChatGPT", featured: false, descKey: "desc-lista" },
    { title: "Osteo Classifier", img: "joelho.png", tech: ["C++", "OpenMP"], link: "https://github.com/samuelspineli34/Classificador-de-Osteoartrose", featured: false, descKey: "desc-osteo" },
    { title: "Geometric Renderer", img: "calculadora.png", tech: ["C++", "Math"], link: "https://github.com/samuelspineli34/TP1_CG", featured: false, descKey: "desc-geo" }
];