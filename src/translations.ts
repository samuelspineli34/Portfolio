export interface Project {
    title: string;
    img: string;
    tech: string[];
    link: string;
    liveLink?: string;
    featured: boolean;
    descKey: string;
}

export const translations: any = {
    pt: {
        "nav-role": "SOFTWARE ENGINEER",
        "nav-about": "Sobre", "nav-exp": "Experiência", "nav-projects": "Projetos", "nav-contact": "Contato",
        "hero-summary": "Bacharel em Ciência da Computação com sólida base em engenharia de software e arquitetura de sistemas. Especialista em TypeScript e Python, com experiência prática em transformar requisitos complexos em plataformas corporativas robustas, escaláveis e de alta usabilidade.",
        "section-exp": "Experiência Profissional",
        "section-edu": "Formação Acadêmica",
        "edu-degree": "Bacharelado em Ciência da Computação",
        "section-projects": "Engenharia de Software & TCC",
        "section-other-projects": "Ferramentas & Pesquisa Científica",
        "footer-contact": "Estabelecer Conexão",

        // Experiência Draft
        "exp_draft_role": "Desenvolvedor de Software",
        "exp_draft_desc": "Desenvolvimento de plataforma interna de engenharia com foco em TypeScript (Vite + Bun). Atuação direta no levantamento de requisitos com usuários e definição da arquitetura técnica. Responsável pela integração Full Stack (Python Flask), modelagem de dados PostgreSQL e publicação em infraestrutura on-premise.",
        
        // Experiência Telefonica
        "exp_tele_role": "Service Desk (Vivo)",
        "exp_tele_desc": "Suporte técnico especializado N1. Diagnóstico de incidentes de rede, gestão de usuários via Active Directory e suporte a estações de trabalho sob rigorosos níveis de SLA. Atuação direta no treinamento de novos colaboradores e documentação de processos operacionais.",
        
        // Experiência Sermicro
        "exp_ser_role": "Service Desk N1",
        "exp_ser_desc": "Atendimento e diagnóstico inicial de incidentes de hardware e software. Suporte remoto e categorização de chamados em ambiente corporativo de larga escala.",

        // Descrições dos Projetos
        "desc-genre": "Trabalho de Conclusão de Curso (TCC). Sistema de IA para classificação de gêneros musicais via Random Forest e Mel-espectrogramas. Inclui geração automatizada de acompanhamento MIDI baseado em predição tonal.",
        "desc-osaka": "Sistema corporativo de Ticket Management com arquitetura modular (DAO/DTO/RBAC). Implementa autenticação JWT e criptografia scrypt, garantindo segurança e integridade no gerenciamento de chamados técnicos.",
        "desc-hemo": "Sistema de logística hospitalar para doação de sangue. Utiliza Flutter e geolocalização em tempo real para conectar doadores às instituições que necessitam de tipos sanguíneos específicos.",
        "desc-uvd": "Utilitário para extração de mídia via yt-dlp e processamento via FFmpeg. Suporta resoluções 4K e automação de downloads.",
        "desc-fretly": "Ferramenta pedagógica musical. Associa visualização de partituras dinâmica à execução técnica no braço da guitarra.",
        "desc-osteo": "Pesquisa científica em processamento de imagem médica para detecção assistida de Osteoartrose de joelho.",
        "desc-uvc": "Monitoramento IoT de radiação UV. Integração hardware ESP32 e aplicativo mobile via protocolo HTTP.",
        "desc-block": "Mineração paralela de blocos em blockchain utilizando C++ para otimização de processamento de hashes.",
        "desc-lista": "Assistente semântico RAG para documentos PDF integrando embeddings e modelos GPT-3.5.",
        "desc-geo": "Renderizador gráfico 2D focado em algoritmos de baixo nível (DDA e Bresenham) para transformações geométricas."
    },
    en: {
        "nav-role": "SOFTWARE ENGINEER",
        "nav-about": "About", "nav-exp": "Experience", "nav-projects": "Projects", "nav-contact": "Contact",
        "hero-summary": "Computer Science Bachelor with a solid background in software engineering and system architecture. Specialist in TypeScript and Python, with hands-on experience transforming complex requirements into robust, scalable, and high-usability corporate platforms.",
        "section-exp": "Work Experience",
        "section-edu": "Education",
        "edu-degree": "B.S. in Computer Science",
        "section-projects": "Engineering Systems & Thesis",
        "section-other-projects": "Tools & Scientific Research",
        "footer-contact": "Connect",

        "exp_draft_role": "Software Developer",
        "exp_draft_desc": "Internal engineering platform development using TypeScript (Vite + Bun). Direct requirements gathering with users and technical architecture definition. Responsible for Full Stack integration (Python Flask), PostgreSQL data modeling, and on-premise infrastructure deployment.",
        
        "exp_tele_role": "Service Desk (Vivo)",
        "exp_tele_desc": "L1 Technical support. Network incident diagnosis, Active Directory user management, and workstation support under strict SLAs. Directly involved in onboarding new employees and documenting operational processes.",
        
        "exp_ser_role": "Service Desk Specialist",
        "exp_ser_desc": "Initial incident handling and diagnosis for hardware and software. Remote support and ticket categorization in large-scale corporate environments.",

        "desc-genre": "Undergraduate Thesis (TCC). AI system for musical genre classification using Random Forest and Mel-spectrograms. Features automated MIDI generation based on tonal prediction.",
        "desc-osaka": "Enterprise Ticket Management solution with modular architecture (DAO/DTO/RBAC). Implements JWT authentication and scrypt encryption for secure technical support management.",
        "desc-hemo": "Hospital logistics system for blood donation. Uses Flutter and real-time geolocation to connect donors with institutions in need of specific blood types.",
        "desc-uvd": "Utility for media extraction via yt-dlp and FFmpeg processing. Supports 4K resolutions and download automation.",
        "desc-fretly": "Musical pedagogical tool. Connects dynamic sheet music visualization to technical execution on the guitar fretboard.",
        "desc-osteo": "Scientific research in medical image processing for assisted detection of knee Osteoarthritis.",
        "desc-uvc": "IoT UV radiation monitoring. Integrates ESP32 hardware and mobile application via HTTP protocol.",
        "desc-block": "Parallel block mining in blockchain using C++ for hash processing optimization.",
        "desc-lista": "RAG semantic assistant for PDF documents integrating embeddings and GPT-3.5 models.",
        "desc-geo": "2D Graphical renderer focused on low-level algorithms (DDA and Bresenham) for geometric transformations."
    }
};

export const projectData: Project[] = [
    { title: "Osaka Tech CRM", img: "osaka.png", tech: ["DAO/DTO", "RBAC", "Python", "Typescript"], link: "https://github.com/samuelspineli34/Osaka-Tech", liveLink: "https://osakatech.vercel.app/login", featured: true, descKey: "desc-osaka" },
    { title: "GenreID AI (TCC)", img: "classificador.png", tech: ["ML", "Python", "Flask"], link: "https://github.com/samuelspineli34/GenreID", featured: true, descKey: "desc-genre" },
    { title: "Conexão Hemocentros", img: "Hemocentro.png", tech: ["Flutter", "Firebase", "API Maps"], link: "https://github.com/samuelspineli34/Hemocentro", featured: true, descKey: "desc-hemo" },
    { title: "Universal Downloader", img: "uvd.png", tech: ["FFmpeg", "yt-dlp", "Python"], link: "https://github.com/samuelspineli34/universal-video-downloader", featured: false, descKey: "desc-uvd" },
    { title: "Fretly", img: "fretly.png", tech: ["TypeScript", "Tone.js", "VexFlow"], link: "https://github.com/samuelspineli34/Fretly", liveLink: "http://samuelspineli34.github.io/Fretly/", featured: false, descKey: "desc-fretly" },
    { title: "Blockchain Parallel", img: "blockchain.png", tech: ["C++", "Parallelism"], link: "https://github.com/samuelspineli34/Blockchain-Paralela", featured: false, descKey: "desc-block" },
    { title: "UVC Seguro", img: "uvc.png", tech: ["ESP32", "Flutter"], link: "https://github.com/samuelspineli34/Aplicativo-Risco-UV", featured: false, descKey: "desc-uvc" },
    { title: "PDF Assistant AI", img: "lista.png", tech: ["Python", "all-MiniLM-L6-v2"], link: "https://github.com/samuelspineli34/ListaChatGPT", featured: false, descKey: "desc-lista" },
    { title: "Osteoarthritis Classifier", img: "joelho.png", tech: ["Python", "HPC"], link: "https://github.com/samuelspineli34/Classificador-de-Osteoartrose", featured: false, descKey: "desc-osteo" },
    { title: "Line Drawing Transformations", img: "calculadora.png", tech: ["Math", "Python"], link: "https://github.com/samuelspineli34/TP1_CG", featured: false, descKey: "desc-geo" }
];