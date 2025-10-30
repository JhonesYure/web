// Navigation between sections
const navButtons = document.querySelectorAll('.nav-btn');
const contentSections = document.querySelectorAll('.content-section');

navButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const targetSection = button.getAttribute('data-section');

    // Remove active class from all buttons and sections
    navButtons.forEach((btn) => btn.classList.remove('active'));
    contentSections.forEach((section) => section.classList.remove('active'));

    // Add active class to clicked button and target section
    button.classList.add('active');
    document.getElementById(targetSection).classList.add('active');
  });
});

// Project Modal
const projectCards = document.querySelectorAll('.project-card');
const modal = document.getElementById('projectModal');
const closeModal = document.querySelector('.close-modal');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');

// Project data (você pode customizar isso depois)
const projectsData = {
  1: {
    title: 'Ludiko Desktop',
    image: 'LudikoDesktop.png',
    description:
      'A comprehensive school management software designed for administrators and coordinators. Ludiko Desktop provides complete control over applied classes, content tracking, detailed reporting, and much more. This robust solution streamlines educational management processes, enabling efficient monitoring of academic activities and generating insightful reports for better decision-making.',
    technologies: ['C++', 'Qt', 'Python'],
  },
  2: {
    title: 'Ludiko Mobile',
    image: 'LudikoMobile.png',
    description:
      "The teacher's companion app designed to streamline classroom management. Ludiko Mobile enables educators to create lesson plans, take attendance, generate reports, and leverage the power of Da'Ra AI assistant. This mobile solution empowers teachers with intelligent tools to enhance their teaching workflow and improve student engagement through data-driven insights.",
    technologies: ['Kotlin', 'Node.js', 'MySQL', 'AI'],
  },
  3: {
    title: 'Da´Ra',
    image: 'dara.png',
    description:
      "An advanced AI assistant specifically designed for education professionals. Da'Ra focuses on helping educators create comprehensive lesson plans, build detailed reports, and optimize teaching strategies. This intelligent system understands educational contexts and provides tailored support for curriculum development, assessment creation, and pedagogical improvement, making it an indispensable tool for modern educators.",
    technologies: ['Python', 'PostgreSQL', 'AI', 'NLP'],
  },
  4: {
    title: 'SPPA',
    image: 'sppa.png',
    description:
      'A cutting-edge web-based dental implant simulation software that revolutionizes preliminary dental assessments. SPPA enables patients to verify conditions and implant feasibility before visiting a dentist, significantly accelerating the evaluation process. This innovative solution combines medical imaging analysis with simulation technology to provide quick, accurate preliminary assessments, saving time for both patients and dental professionals.',
    technologies: ['React', 'Firebase', 'TypeScript', '3D Rendering'],
  },
  5: {
    title: 'InteligenCAM',
    image: 'inteliCAM.png',
    description:
      'An intelligent AI-powered camera system, part of the Ludiko family, designed to enhance school safety and security. InteligenCAM detects aggressive behavior, bullying incidents, and unauthorized absence of supervisors in classrooms through advanced computer vision. When critical situations are identified, the AI automatically sends urgent notifications or directly calls the school administration, ensuring rapid response to maintain a safe learning environment.',
    technologies: [
      'Python',
      'Azure',
      'Docker',
      'Kubernetes',
      'Computer Vision',
      'AI',
    ],
  },
};

// Open modal when clicking on a project card
projectCards.forEach((card) => {
  card.addEventListener('click', () => {
    const projectId = card.getAttribute('data-project');
    const project = projectsData[projectId];

    // Try to use translated project content if available
    let translated = null;
    try {
      if (
        typeof translations !== 'undefined' &&
        typeof currentLang !== 'undefined' &&
        translations[currentLang] &&
        translations[currentLang].projects &&
        translations[currentLang].projects.items &&
        translations[currentLang].projects.items[projectId]
      ) {
        translated = translations[currentLang].projects.items[projectId];
      }
    } catch (e) {
      translated = null;
    }

    const titleText =
      translated && translated.title ? translated.title : project.title;
    const descriptionText =
      translated && translated.description
        ? translated.description
        : project.description;
    const techArray =
      translated && translated.technologies
        ? translated.technologies
        : project.technologies;

    modalTitle.textContent = titleText;

    // Create technologies tags HTML
    const techTags = (techArray || [])
      .map((tech) => `<span class="tech-tag">${tech}</span>`)
      .join('');

    modalBody.innerHTML = `
            <p>${descriptionText}</p>
            <div class="tech-tags-container">
                ${techTags}
            </div>
        `;

    modal.classList.add('active');
  });
});

// Close modal
closeModal.addEventListener('click', () => {
  modal.classList.remove('active');
});

// Close modal when clicking outside
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('active');
  }
});

// Close modal with ESC key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('active')) {
    modal.classList.remove('active');
  }
});
