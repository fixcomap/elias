// ─────────────────────────────────────────────────────────────────────────────
// ARCHIVO CENTRAL DE DATOS DEL PORTFOLIO
// Editá este archivo para actualizar cualquier sección del sitio.
// ─────────────────────────────────────────────────────────────────────────────

export const personal = {
  name: 'Elías Joaquín Prieto',
  shortName: 'Elías Prieto',
  initials: 'EP',
  title: 'Security Operations Analyst',
  headline: 'Security Operations Analyst | Cloud Operations & Cybersecurity',
  tagline:
    'Monitoreo, incident response, automatización operativa y confiabilidad en entornos cloud.',
  bio: `Profesional de Operaciones en la Nube con mentalidad analítica y enfoque en ciberseguridad.
Me caracterizo por la calma bajo presión, la comunicación clara y el criterio para priorizar lo importante.
Disfruto optimizar procesos, automatizar tareas repetitivas y mejorar la confiabilidad de los servicios.`,
  location: 'Buenos Aires, Argentina',
  email: 'eliasjoaquinprieto@gmail.com',
  cvUrl: '/assets/cv-elias-prieto.pdf',
};

export const social = {
  linkedin: 'https://linkedin.com/in/elias-prieto/',
  github: 'https://github.com/eluprieto',
};

// ─── EXPERIENCIA ─────────────────────────────────────────────────────────────

export interface Experience {
  id: string;
  company: string;
  companyUrl?: string;
  position: string;
  period: string;
  location: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  current?: boolean;
}

export const experience: Experience[] = [
  {
    id: 'exp-1',
    company: 'Netrix Global',
    position: 'DevOps Analyst II',
    period: 'Dic 2025 – Actualidad',
    location: 'Remoto',
    description:
      'Monitoreo 24×7 y respuesta a incidentes en plataformas SaaS multi-tenant sobre Azure y AWS.',
    responsibilities: [
      'Monitoreo 24×7 de plataformas SaaS multi-tenant en Azure/AWS con Datadog y Site24x7: métricas, logs, synthetics y alerting.',
      'Gestión de incidentes Sev0–Sev3 con PagerDuty: triage, mitigación, ejecución de runbooks, comunicación en Slack y documentación en Jira/Confluence.',
      'Operación en producción: reinicios controlados y health checks de servicios IIS/ASP.NET, agentes Datadog, daemons Linux vía SSH y validación post-cambio.',
      'Troubleshooting: análisis de logs/métricas, correlación de alertas, verificación de PIDs y acciones correctivas (restart de agentes, limpieza de disco, validación de certificados).',
    ],
    technologies: ['Azure', 'AWS', 'Datadog', 'Site24x7', 'PagerDuty', 'Jira', 'Confluence', 'Slack', 'IIS/ASP.NET', 'Linux', 'SSH'],
    current: true,
  },
  {
    id: 'exp-2',
    company: 'SONDA',
    position: 'Service Desk',
    period: 'Mar 2024 – Ago 2025',
    location: 'Buenos Aires, Argentina',
    description:
      'Soporte técnico L1/L2 en entorno VDI con gestión de incidentes, identidades en Azure AD y análisis de seguridad.',
    responsibilities: [
      'Detección y mitigación de vulnerabilidad ICMP con filtrado/threshold, reduciendo superficie de ataque y saturación de VDI en picos de tráfico.',
      'Soporte para identificación y gestión de amenazas de phishing.',
      'Clasificación, escalamiento y documentación de incidentes y solicitudes bajo SLA/ITIL.',
      'Triage y resolución L1/L2 en entorno VDI.',
      'Operaciones en Azure AD: reseteo de MFA, agregado de dispositivos de confianza y verificación de licencias.',
    ],
    technologies: ['VDI', 'Azure AD', 'MFA', 'ITIL', 'Phishing Analysis', 'L1/L2 Support', 'Incident Management'],
    current: false,
  },
  {
    id: 'exp-3',
    company: 'Istorming',
    position: 'Help Desk',
    period: 'May 2023 – Ago 2023',
    location: 'Buenos Aires, Argentina',
    description: 'Soporte técnico con atención multicanal.',
    responsibilities: [
      'Configuración de VPN FortiClient.',
      'Atención multicanal: teléfono, chat y portal; cierre con notas reproducibles.',
    ],
    technologies: ['FortiClient', 'VPN', 'Help Desk'],
    current: false,
  },
  {
    id: 'exp-4',
    company: 'Smartway',
    position: 'Soporte Microinformática',
    period: 'Feb 2023 – Abr 2023',
    location: 'Buenos Aires, Argentina',
    description: 'Field support on-site en cines.',
    responsibilities: [
      'Coordinación con supervisores y gestión por Zendesk.',
      'Unión de equipos al dominio, mapeo de impresoras/unidades y permisos de usuario.',
      'Mantenimiento de PCs de boletería/backoffice, ticketera/POS y periféricos.',
    ],
    technologies: ['Zendesk', 'Windows', 'Active Directory', 'Field Support'],
    current: false,
  },
  {
    id: 'exp-5',
    company: 'FixComAp',
    position: 'Soporte Técnico',
    period: 'Nov 2021 – Nov 2022',
    location: 'Buenos Aires, Argentina',
    description: 'Soporte técnico general y mantenimiento de equipos.',
    responsibilities: [
      'Mantenimiento de impresoras locales y de red.',
      'Clonado y migración de perfiles; checklist de calidad previo a entrega.',
      'Instalación/imagen de Windows 10/11 (y Linux básico), drivers y updates.',
    ],
    technologies: ['Windows', 'Linux', 'Hardware', 'Impresoras'],
    current: false,
  },
];

// ─── EDUCACIÓN ────────────────────────────────────────────────────────────────

export interface Education {
  id: string;
  institution: string;
  degree: string;      // Nombre de la carrera — actualizar con el nombre exacto
  field: string;
  period: string;
  location?: string;
  modalidad?: string;  // "Online", "Presencial" o "Semipresencial"
  link?: string;       // URL institucional (opcional)
  description?: string;
  current?: boolean;
}

export const education: Education[] = [
  {
    id: 'edu-1',
    degree: 'Grado en Ciberseguridad',
    field: 'Cloud, Infraestructura & Ciberseguridad',
    institution: 'UNIR – Universidad Internacional de La Rioja',
    period: '2024 – 2025',
    location: 'Online',
    modalidad: 'Online',
    description:
      'Formación académica orientada al área tecnológica, complementando la experiencia profesional en operaciones cloud, infraestructura y ciberseguridad.',
    current: false,
  },
  {
    id: 'edu-2',
    degree: 'Diplomatura en Investigación de Cibercrimen y Ciberseguridad',
    field: 'Ciberseguridad & Cibercrimen',
    institution: 'Universidad Siglo 21',
    period: 'Abr 2023 – Mar 2024',
    location: 'Online',
    modalidad: 'Online',
    description:
      'Programa especializado en investigación de cibercrimen y fundamentos de ciberseguridad, con enfoque en estrategias de detección de amenazas y respuesta a incidentes.',
    current: false,
  },
];

// ─── CERTIFICACIONES ─────────────────────────────────────────────────────────

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  issuedDate: string;  // Año o fecha de emisión
  expiry: string;      // "Sin vencimiento" o año de vencimiento
  credentialId?: string;
  // ↓ Para habilitar "Ver credencial": pegar la URL de verificación.
  //   Si queda vacío (""), el botón aparece deshabilitado con "Link pendiente".
  verifyUrl: string;
}

export const certifications: Certification[] = [
  {
    id: 'cert-aws-ccp',
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    issuedDate: '2026',
    expiry: '2029',
    verifyUrl: 'https://www.credly.com/badges/9fd2016a-5e25-4b02-90e3-e0205ea4b2bf/public_url',
  },
  {
    id: 'cert-1',
    name: 'Microsoft AZ-900',
    issuer: 'Microsoft',
    issuedDate: '2026',
    expiry: 'Sin vencimiento',
    verifyUrl: 'https://learn.microsoft.com/api/credentials/share/es-es/EliasPrieto-4043/FA4190F2509A67B3?sharingId=8342C99739572C82',
  },
  {
    id: 'cert-2',
    name: 'CompTIA Security+',
    issuer: 'CompTIA',
    issuedDate: '2025',
    expiry: '2028',
    verifyUrl: 'https://www.credly.com/badges/9b11fce7-1f6a-4c3e-836b-ff081d5113ed/linked_in_profile',
  },
  {
    id: 'cert-3',
    name: 'Google Cybersecurity Professional',
    issuer: 'Google / Coursera',
    issuedDate: '2024',
    expiry: 'Sin vencimiento',
    verifyUrl: 'https://www.credly.com/badges/e6792781-bf76-4ac2-b522-9345d549eea1/linked_in_profile',
  },
];

// ─── SKILLS ──────────────────────────────────────────────────────────────────

export interface SkillCategory {
  label: string;
  icon: string;
  items: string[];
}

export const skills: SkillCategory[] = [
  {
    label: 'Cloud & Infrastructure',
    icon: 'Cloud',
    items: ['Azure', 'AWS', 'VDI', 'IIS/ASP.NET'],
  },
  {
    label: 'Monitoring & Incident Management',
    icon: 'Activity',
    items: ['Datadog', 'Site24x7', 'PagerDuty', 'Jira', 'Confluence', 'Slack'],
  },
  {
    label: 'Security',
    icon: 'Shield',
    items: ['CompTIA Security+', 'Phishing Analysis', 'MFA', 'Azure AD', 'Incident Triage', 'Vulnerability Detection'],
  },
  {
    label: 'Scripting & Automation',
    icon: 'Code2',
    items: ['PowerShell', 'Python', 'Runbooks', 'Operational Scripts'],
  },
  {
    label: 'Networking',
    icon: 'Network',
    items: ['DNS', 'TCP/IP', 'ICMP', 'VPN', 'Troubleshooting'],
  },
];

// ─── PROYECTOS ────────────────────────────────────────────────────────────────

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  // ↓ Para habilitar botones: pegar la URL correspondiente.
  //   Si queda vacío (""), el botón aparece deshabilitado o como "Próximamente".
  projectUrl: string;
  githubUrl: string;
  demoUrl: string;
  color: string;       // Gradiente del mockup visual (clases Tailwind bg-gradient-to-br)
  highlight?: boolean;
}

export const projects: Project[] = [
  {
    id: 'proj-1',
    title: 'SafeBrowse AI',
    description:
      'Extensión de navegador enfocada en análisis de URLs, detección de sitios maliciosos o sospechosos y bloqueo preventivo. Incluye estados visuales de seguridad y experiencia pensada para advertir al usuario antes de interactuar con sitios riesgosos.',
    technologies: ['Chrome Extension', 'JavaScript', 'API Integration', 'VirusTotal', 'Security UX'],
    projectUrl: '',
    githubUrl: 'https://github.com/eluprieto/safebrowse-ai',
    demoUrl: '',
    color: 'from-blue-600 to-cyan-500',
    highlight: true,
  },
  {
    id: 'proj-2',
    title: 'Network Monitoring Script',
    description:
      'Script en Python para monitoreo de red, validación de IPs permitidas, detección de conexiones sospechosas, registro de eventos y alertas automáticas.',
    technologies: ['Python', 'Scapy', 'Pandas', 'SMTP', 'Nmap', 'FireHOL'],
    projectUrl: '',
    githubUrl: 'https://github.com/eluprieto/Monitoreo-de-red',
    demoUrl: '',
    color: 'from-emerald-600 to-teal-500',
    highlight: true,
  },
  {
    id: 'proj-4',
    title: 'TattooStudio Web',
    description:
      'Aplicación web fullstack para gestión de estudios de tatuajes. Incluye catálogo de productos, carrito de compras, autenticación de usuarios e integración con Mercado Pago para pagos online.',
    technologies: ['JavaScript', 'Node.js', 'Express', 'MongoDB', 'Mercado Pago', 'Vercel'],
    projectUrl: 'https://tattoostudio-web.vercel.app',
    githubUrl: 'https://github.com/eluprieto/tattoostudio-web',
    demoUrl: '',
    color: 'from-rose-600 to-pink-500',
    highlight: true,
  },
  {
    id: 'proj-5',
    title: 'Calendario de Turnos',
    description:
      'Aplicación web para gestión de turnos y reservas. Permite a usuarios seleccionar fecha y hora disponible, y administrar agendas de forma sencilla.',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    projectUrl: '',
    githubUrl: 'https://github.com/eluprieto/Calendario',
    demoUrl: 'https://calendario-li2t.onrender.com/',
    color: 'from-amber-500 to-orange-500',
    highlight: false,
  },
];
