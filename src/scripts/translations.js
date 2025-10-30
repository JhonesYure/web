// Translations
const translations = {
  en: {
    nav: {
      about: 'ABOUT',
      resume: 'RESUME',
      download: 'DOWNLOAD',
    },
    about: {
      title1: 'Who am I?',
      text1:
        "I am a technology and innovation enthusiast with a solid background in Computer Science and Software Engineering (Bachelor's degree) and an Associate degree in Software Development. With over 5 years of experience in the field, I currently work as a Senior DevOps Engineer at Conceptu, where I apply my expertise in automation, infrastructure as code, and continuous delivery practices to transform complex challenges into efficient and scalable solutions.",
      title2: 'Technical Expertise',
      text2:
        'Throughout my professional journey, I have developed diverse technical skills that enable me to work on different fronts. I master essential tools and platforms such as Kubernetes, Docker, AWS, and Azure for container orchestration and cloud infrastructure management. I work with CI/CD pipelines using GitHub and GitLab, and have solid experience in automation with PowerShell. In software development, I have knowledge in languages such as C, C++, C#, Python, and modern frameworks like React Native and Qt, which gives me a holistic view of the application lifecycle, from development to production operations.',
    },
    projects: {
      title: 'PROJECTS',
      items: {
        1: {
          title: 'Ludiko Desktop',
          description:
            'A comprehensive school management software designed for administrators and coordinators. Ludiko Desktop provides complete control over applied classes, content tracking, detailed reporting, and much more.',
          technologies: ['C++', 'Qt', 'Python'],
        },
        2: {
          title: 'Ludiko Mobile',
          description:
            "The teacher's companion app designed to streamline classroom management. Ludiko Mobile enables educators to create lesson plans, take attendance, and generate reports.",
          technologies: ['Kotlin', 'Node.js', 'MySQL', 'AI'],
        },
        3: {
          title: 'Da´Ra',
          description:
            'An advanced AI assistant specifically designed for education professionals, focused on lesson planning, reporting and pedagogical support.',
          technologies: ['Python', 'PostgreSQL', 'AI', 'NLP'],
        },
        4: {
          title: 'SPPA',
          description:
            'A web-based dental implant simulation software that accelerates preliminary dental assessments by combining imaging analysis and simulation technology.',
          technologies: ['React', 'Firebase', 'TypeScript', '3D Rendering'],
        },
        5: {
          title: 'InteligenCAM',
          description:
            'An intelligent AI-powered camera system designed to enhance school safety by detecting aggressive behavior and notifying administration when critical events occur.',
          technologies: [
            'Python',
            'Azure',
            'Docker',
            'Kubernetes',
            'Computer Vision',
            'AI',
          ],
        },
      },
    },
    resume: {
      job1: {
        title: 'Senior DevOps Engineer - Conceptu',
        period: '2025 - Present',
        desc1: 'Leading DevOps transformation initiatives',
        desc2: 'Implementing CI/CD pipelines with GitHub and GitLab',
        desc3: 'Managing cloud infrastructure on AWS and Azure',
        desc4: 'Orchestrating containerized applications with Kubernetes',
        desc5: 'Automating deployment processes and infrastructure as code',
      },
      edu1: {
        title: "🎓 Bachelor's in Software Engineering",
        period: '2024 - Present',
        desc1: 'Currently studying advanced software engineering principles',
        desc2: 'DevOps and cloud-native architectures',
        desc3: 'System design and scalability patterns',
      },
      job2: {
        title: 'Software Engineer - SkyDrones',
        period: '2023 - 2025',
        desc1: 'Developed drone control applications using QML and C++',
        desc2: 'Created embedded firmware with C, C++, and Lua',
        desc3: 'Worked on real-time systems and low-level programming',
        desc4: 'Implemented communication protocols for drone systems',
        desc5: 'Optimized performance for embedded devices',
      },
      edu2: {
        title: "🎓 Bachelor's in Computer Science",
        period: '2020 - 2024',
        desc1: 'Deep dive into computer science fundamentals',
        desc2: 'Artificial Intelligence and Machine Learning',
        desc3: 'Advanced data structures and algorithms',
        desc4: 'Software engineering methodologies',
      },
      job3: {
        title: 'Systems Developer - Vent Digital',
        period: '2020 - 2022',
        desc1: 'Built modern web applications with React and Next.js',
        desc2: 'Developed cross-platform mobile apps using React Native',
        desc3: 'Managed containerized deployments with Docker',
        desc4: 'Worked with cloud platforms AWS and Azure',
        desc5: 'Orchestrated services using Kubernetes (K8s)',
      },
      edu3: {
        title: '🎓 Associate Degree in Systems Development',
        period: '2018 - 2020',
        desc1: 'Studied software architecture and design patterns',
        desc2: 'Advanced programming concepts and algorithms',
        desc3: 'Database management and system analysis',
      },
      job4: {
        title: 'Website Development Intern',
        period: 'May 2016 - Dec 2016',
        desc1: 'Developed responsive websites using HTML, CSS, and JavaScript',
        desc2: 'Worked with MySQL databases and PHP backend development',
        desc3: 'Gained foundational web development skills',
        desc4: 'Collaborated with design team on UI/UX implementations',
      },
    },
    download: {
      title: 'Download Resume',
      subtitle: 'Get my complete resume in your preferred language',
      btnEn: 'English Version',
      btnPt: 'Portuguese Version',
      lastUpdated: 'Last updated: October 2025',
    },
  },
  pt: {
    nav: {
      about: 'SOBRE',
      resume: 'CURRÍCULO',
      download: 'DOWNLOAD',
    },
    about: {
      title1: 'Quem sou eu?',
      text1:
        'Sou um profissional apaixonado por tecnologia e inovação, com formação sólida em Ciência da Computação e Engenharia de Software (Bacharel) e Tecnólogo em Desenvolvimento de Software. Com mais de 5 anos de experiência na área, atualmente atuo como Engenheiro DevOps Sênior na Conceptu, onde aplico minha expertise em automação, infraestrutura como código e práticas de entrega contínua para transformar desafios complexos em soluções eficientes e escaláveis.',
      title2: 'Expertise Técnica',
      text2:
        'Ao longo da minha jornada profissional, desenvolvi habilidades técnicas diversificadas que me permitem atuar em diferentes frentes. Domino ferramentas e plataformas essenciais como Kubernetes, Docker, AWS e Azure para orquestração de containers e gestão de infraestrutura em nuvem. Trabalho com pipelines CI/CD usando GitHub e GitLab, e tenho sólida experiência em automação com PowerShell. No desenvolvimento de software, tenho conhecimento em linguagens como C, C++, C#, Python e frameworks modernos como React Native e Qt, o que me proporciona uma visão holística do ciclo de vida das aplicações, desde o desenvolvimento até as operações em produção.',
    },
    projects: {
      title: 'PROJETOS',
      items: {
        1: {
          title: 'Ludiko Desktop',
          description:
            'Um software completo de gestão escolar voltado para administradores e coordenadores. O Ludiko Desktop oferece controle de turmas, acompanhamento de conteúdo, relatórios detalhados e muito mais.',
          technologies: ['C++', 'Qt', 'Python'],
        },
        2: {
          title: 'Ludiko Mobile',
          description:
            'Aplicativo para professores que facilita o gerenciamento de sala de aula: criação de planos, chamada, geração de relatórios e integração com assistente AI.',
          technologies: ['Kotlin', 'Node.js', 'MySQL', 'AI'],
        },
        3: {
          title: 'Da´Ra',
          description:
            'Assistente de IA avançado focado em educação, auxiliando na criação de planos de aula, relatórios e suporte pedagógico.',
          technologies: ['Python', 'PostgreSQL', 'AI', 'NLP'],
        },
        4: {
          title: 'SPPA',
          description:
            'Software web de simulação de implante dentário que acelera avaliações prévias combinando análise de imagem e tecnologia de simulação.',
          technologies: ['React', 'Firebase', 'TypeScript', '3D Rendering'],
        },
        5: {
          title: 'InteligenCAM',
          description:
            'Sistema de câmera inteligente com IA voltado para segurança escolar, detectando comportamentos agressivos e notificando a administração quando necessário.',
          technologies: [
            'Python',
            'Azure',
            'Docker',
            'Kubernetes',
            'Computer Vision',
            'AI',
          ],
        },
      },
    },
    resume: {
      job1: {
        title: 'Engenheiro DevOps Sênior - Conceptu',
        period: '2025 - Atual',
        desc1: 'Liderança de iniciativas de transformação DevOps',
        desc2: 'Implementação de pipelines CI/CD com GitHub e GitLab',
        desc3: 'Gestão de infraestrutura em nuvem AWS e Azure',
        desc4: 'Orquestração de aplicações containerizadas com Kubernetes',
        desc5: 'Automação de processos de deploy e infraestrutura como código',
      },
      edu1: {
        title: '🎓 Bacharelado em Engenharia de Software',
        period: '2024 - Atual',
        desc1: 'Cursando princípios avançados de engenharia de software',
        desc2: 'DevOps e arquiteturas cloud-native',
        desc3: 'Design de sistemas e padrões de escalabilidade',
      },
      job2: {
        title: 'Engenheiro de Software - SkyDrones',
        period: '2023 - 2025',
        desc1:
          'Desenvolvimento de aplicações de controle de drones com QML e C++',
        desc2: 'Criação de firmwares embarcados com C, C++ e Lua',
        desc3:
          'Trabalho em sistemas de tempo real e programação de baixo nível',
        desc4:
          'Implementação de protocolos de comunicação para sistemas de drones',
        desc5: 'Otimização de performance para dispositivos embarcados',
      },
      edu2: {
        title: '🎓 Bacharelado em Ciência da Computação',
        period: '2020 - 2024',
        desc1: 'Fundamentos aprofundados de ciência da computação',
        desc2: 'Inteligência Artificial e Machine Learning',
        desc3: 'Estruturas de dados e algoritmos avançados',
        desc4: 'Metodologias de engenharia de software',
      },
      job3: {
        title: 'Desenvolvedor de Sistemas - Vent Digital',
        period: '2020 - 2022',
        desc1: 'Desenvolvimento de aplicações web modernas com React e Next.js',
        desc2:
          'Criação de aplicativos mobile multiplataforma usando React Native',
        desc3: 'Gerenciamento de deploys containerizados com Docker',
        desc4: 'Trabalho com plataformas de nuvem AWS e Azure',
        desc5: 'Orquestração de serviços usando Kubernetes (K8s)',
      },
      edu3: {
        title: '🎓 Tecnólogo em Desenvolvimento de Sistemas',
        period: '2018 - 2020',
        desc1: 'Arquitetura de software e padrões de design',
        desc2: 'Conceitos avançados de programação e algoritmos',
        desc3: 'Gestão de bancos de dados e análise de sistemas',
      },
      job4: {
        title: 'Estagiário em Desenvolvimento Web',
        period: 'Mai 2016 - Dez 2016',
        desc1:
          'Desenvolvimento de sites responsivos usando HTML, CSS e JavaScript',
        desc2:
          'Trabalho com bancos de dados MySQL e desenvolvimento backend em PHP',
        desc3: 'Aquisição de habilidades fundamentais em desenvolvimento web',
        desc4: 'Colaboração com equipe de design em implementações de UI/UX',
      },
    },
    download: {
      title: 'Baixar Currículo',
      subtitle: 'Obtenha meu currículo completo no idioma de sua preferência',
      btnEn: 'Versão em Inglês',
      btnPt: 'Versão em Português',
      lastUpdated: 'Última atualização: Outubro 2025',
    },
  },
};

// Language management
let currentLang = 'en';

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('preferredLanguage', lang);
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';

  // Update all translatable elements
  document.querySelectorAll('[data-translate]').forEach((element) => {
    const keys = element.getAttribute('data-translate').split('.');
    let translation = translations[lang];

    keys.forEach((key) => {
      translation = translation[key];
    });

    element.textContent = translation;
  });

  // Update active language button
  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
  // Get saved language or default to English
  const savedLang = localStorage.getItem('preferredLanguage') || 'en';
  setLanguage(savedLang);

  // Add click handlers to language buttons
  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      setLanguage(lang);
    });
  });
});
