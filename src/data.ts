// All content is drawn from public repositories at github.com/hao05dev.

export const profile = {
  name: 'Nguyễn Hoàng Hào',
  handle: 'hao05dev',
  role: 'Full-stack Developer',
  school: 'IT student · Can Tho University',
  intro:
    'I build web systems end to end — Spring Boot APIs, React front-ends, PostgreSQL schemas — and ship them with Docker. Most of what I make starts from a real workflow: a clinic, an internship office, a restaurant floor.',
  email: 'hau05.ruan@gmail.com',
  github: 'https://github.com/hao05dev',
  facebook: 'https://www.facebook.com/nguyen.hao.230457/',
};

export const stack: { group: string; color: string; items: string[] }[] = [
  {
    group: 'Backend',
    color: 'bg-cobalt',
    items: ['Java', 'Spring Boot', 'Spring Security · JWT', 'JPA / Hibernate', 'Node.js · Express', 'PHP · Twig', 'FastAPI'],
  },
  {
    group: 'Frontend',
    color: 'bg-sunflower',
    items: ['React', 'TypeScript', 'Next.js', 'Vue.js', 'Tailwind CSS', 'React Query · Zustand'],
  },
  {
    group: 'Data & Infra',
    color: 'bg-cypress',
    items: ['PostgreSQL', 'MySQL', 'Redis', 'RabbitMQ', 'Flyway', 'Docker', 'GitHub Actions'],
  },
  {
    group: 'Machine Learning',
    color: 'bg-terracotta',
    items: ['Python', 'PyTorch', 'scikit-learn', 'OpenCV', 'Streamlit'],
  },
];

export interface Project {
  name: string;
  tagline: string;
  points: string[];
  tech: string[];
  repo: string;
  accent: string; // tailwind bg class for the paint dab
}

export const projects: Project[] = [
  {
    name: 'InternLink',
    tagline: 'Graduation-internship portal for CICT, Can Tho University',
    points: [
      'Connects students, companies and faculty across 7 roles',
      'Tripartite agreements, weekly logs, rubric / CLO grading',
    ],
    tech: ['Spring Boot 3', 'Java 21', 'Next.js 14', 'PostgreSQL + pgvector', 'FastAPI'],
    repo: 'https://github.com/hao05dev/Internlink-v1-backend',
    accent: 'bg-sunflower',
  },
  {
    name: 'Family Medicine CDSS',
    tagline: 'Clinical decision support for family clinics',
    points: [
      'Admin-built dynamic diagnostic forms & question bank',
      'Risk analysis for doctors, results sent by email / Zalo',
    ],
    tech: ['Spring Boot', 'React', 'Vite', 'Docker'],
    repo: 'https://github.com/hao05dev/family_medicine',
    accent: 'bg-cobalt',
  },
  {
    name: 'ToyToiShop',
    tagline: 'E-commerce for anime figures & collectibles',
    points: [
      'VNPay & VietQR checkout, order and stock workflow',
      'FP-Growth product recommendations, multi-level RBAC',
    ],
    tech: ['Spring Boot 3', 'React 19', 'PostgreSQL'],
    repo: 'https://github.com/hao05dev/toitoyshop',
    accent: 'bg-terracotta',
  },
  {
    name: 'LifeFlow',
    tagline: 'Personal planning & self-development platform',
    points: [
      'Drag-and-drop Kanban, habits & streaks, budgets',
      'SM-2 spaced repetition; async reminders via RabbitMQ',
    ],
    tech: ['Spring Boot', 'MySQL', 'Redis', 'RabbitMQ', 'React + TS'],
    repo: 'https://github.com/hao05dev/HelloTask',
    accent: 'bg-cypress',
  },
  {
    name: '3 Miền Cua',
    tagline: 'Restaurant booking & floor management',
    points: [
      'Online booking, walk-ins, table merging, in-table orders',
      'Recipes, ingredient stock, invoices, revenue dashboard',
    ],
    tech: ['Vue.js', 'Express', 'JWT'],
    repo: 'https://github.com/hao05dev/3mienres',
    accent: 'bg-ochre',
  },
  {
    name: 'MovieChiuChiu',
    tagline: 'Movie streaming site on a hand-rolled PHP MVC',
    points: [
      'Layered controllers / services, CSRF & auth middleware',
      'Google OAuth, automatic movie crawler from an API',
    ],
    tech: ['PHP', 'Twig', 'PSR-4'],
    repo: 'https://github.com/hao05dev/moviechiuchiu.com',
    accent: 'bg-sky',
  },
];

export const experiments: { name: string; note: string; tech: string; repo: string }[] = [
  {
    name: 'Old Photo Colorization',
    note: 'U-Net & Pix2Pix models that colorize black-and-white photos, scored with PSNR / SSIM.',
    tech: 'PyTorch · OpenCV',
    repo: 'https://github.com/hao05dev/oldPhoto_Colorization',
  },
  {
    name: 'Phishing Website Detection',
    note: 'Compared KNN, Naive Bayes, Decision Tree and Random Forest on the UCI dataset; shipped as a Streamlit app.',
    tech: 'scikit-learn · Streamlit',
    repo: 'https://github.com/hao05dev/phishing_websites',
  },
];
