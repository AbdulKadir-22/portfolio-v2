import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiSass,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiGraphql,
  SiSocketdotio,
  SiPython,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiMysql,
  SiFirebase,
  SiDocker,
  SiGithubactions,
  SiNginx,
  SiLinux,
  SiVercel,
  SiPytorch,
  SiTensorflow,
  SiScikitlearn,
  SiOpenai,
  SiGit,
  SiGithub,
  SiPostman,
  SiFigma,
  SiNpm,
  SiWebpack,
  SiVite
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
import { VscVscode } from 'react-icons/vsc';

import frontendPlanet from '../../../assets/skills/frontend.png';
import backendPlanet from '../../../assets/skills/Backend.png';
import databasePlanet from '../../../assets/skills/Database.png';
import aiPlanet from '../../../assets/skills/Locked.png';
import toolsPlanet from '../../../assets/skills/tools.png';

export const skillsConfig = {
  pageTitle: 'My Skills',
  pageSubtitle: 'Exploring the universe of technologies I work with.',
  quote: 'Skills are the stars, consistency is the gravity.',
};

export const skillsData = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    planet: frontendPlanet,
    count: '8 Technologies',
    description: 'Building beautiful, responsive, and highly interactive user interfaces and web applications.',
    angle: -126, // Top-Left
    proficiencies: [
      { name: 'React / Next.js', percentage: 90 },
      { name: 'JavaScript (ES6+)', percentage: 85 },
      { name: 'TypeScript', percentage: 80 },
      { name: 'HTML & CSS', percentage: 95 },
      { name: 'Tailwind CSS', percentage: 90 }
    ],
    technologies: [
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#000000', lightColor: '#000000', darkColor: '#FFFFFF' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS3', icon: SiCss, color: '#1572B6' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'Sass', icon: SiSass, color: '#CC6699' }
    ],
    featuredProjects: ['astroblog', 'devconnect', 'portfoliov2']
  },
  {
    id: 'backend',
    title: 'Backend Development',
    planet: backendPlanet,
    count: '7 Technologies',
    description: 'Designing scalable, robust, and high-performance server-side architectures, REST APIs, and microservices.',
    angle: -54, // Top-Right
    proficiencies: [
      { name: 'Node.js / Express', percentage: 85 },
      { name: 'NestJS', percentage: 75 },
      { name: 'REST APIs', percentage: 90 },
      { name: 'GraphQL', percentage: 70 },
      { name: 'WebSockets', percentage: 80 }
    ],
    technologies: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'Express', icon: SiExpress, color: '#000000', lightColor: '#000000', darkColor: '#FFFFFF' },
      { name: 'NestJS', icon: SiNestjs, color: '#E0234E' },
      { name: 'GraphQL', icon: SiGraphql, color: '#E10098' },
      { name: 'Socket.io', icon: SiSocketdotio, color: '#010101', lightColor: '#010101', darkColor: '#FFFFFF' },
      { name: 'Python', icon: SiPython, color: '#3776AB' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' }
    ],
    featuredProjects: ['devconnect', 'neargrab']
  },
  {
    id: 'databases',
    title: 'Databases',
    planet: databasePlanet,
    count: '5 Technologies',
    description: 'Structuring, query optimization, indexing, and managing structured and unstructured database engines.',
    angle: 18, // Middle-Right
    proficiencies: [
      { name: 'MongoDB', percentage: 85 },
      { name: 'PostgreSQL', percentage: 80 },
      { name: 'MySQL', percentage: 75 },
      { name: 'Redis', percentage: 75 },
      { name: 'Firebase', percentage: 80 }
    ],
    technologies: [
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
      { name: 'Redis', icon: SiRedis, color: '#DC382D' },
      { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' }
    ],
    featuredProjects: ['devconnect', 'neargrab']
  },
  {
    id: 'tools-devops',
    title: 'Tools & DevOps',
    planet: toolsPlanet,
    count: '13 Technologies',
    description: 'Essential developer tools, cloud deployments, CI/CD automation pipelines, containers, and UX workflows.',
    angle: 90, // Bottom-Center
    proficiencies: [
      { name: 'Git & GitHub', percentage: 90 },
      { name: 'Docker / Containers', percentage: 75 },
      { name: 'CI/CD (GitHub Actions)', percentage: 80 },
      { name: 'Cloud (AWS / Vercel)', percentage: 80 },
      { name: 'VS Code & Env', percentage: 95 }
    ],
    technologies: [
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'GitHub', icon: SiGithub, color: '#181717', lightColor: '#181717', darkColor: '#FFFFFF' },
      { name: 'Docker', icon: SiDocker, color: '#2496ED' },
      { name: 'GitHub Actions', icon: SiGithubactions, color: '#2088FF' },
      { name: 'AWS', icon: FaAws, color: '#FF9900' },
      { name: 'Vercel', icon: SiVercel, color: '#000000', lightColor: '#000000', darkColor: '#FFFFFF' },
      { name: 'Nginx', icon: SiNginx, color: '#009639' },
      { name: 'Linux', icon: SiLinux, color: '#FCC624' },
      { name: 'VS Code', icon: VscVscode, color: '#007ACC' },
      { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
      { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
      { name: 'NPM', icon: SiNpm, color: '#CB3837' },
      { name: 'Vite', icon: SiVite, color: '#646CFF' }
    ],
    featuredProjects: ['codesnippet', 'portfoliov2', 'devconnect', 'astroblog']
  },
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    planet: aiPlanet,
    count: '5 Technologies',
    description: 'Building intelligent predictive models, data preprocessing, neural networks, and integrating LLMs.',
    angle: 162, // Middle-Left
    proficiencies: [
      { name: 'Python', percentage: 85 },
      { name: 'LLM Integration', percentage: 80 },
      { name: 'Machine Learning', percentage: 70 },
      { name: 'Deep Learning', percentage: 60 },
      { name: 'NLP', percentage: 65 }
    ],
    technologies: [
      { name: 'Python', icon: SiPython, color: '#3776AB' },
      { name: 'PyTorch', icon: SiPytorch, color: '#EE4C2C' },
      { name: 'TensorFlow', icon: SiTensorflow, color: '#FF6F00' },
      { name: 'Scikit-Learn', icon: SiScikitlearn, color: '#F7931E' },
      { name: 'OpenAI API', icon: SiOpenai, color: '#412991', lightColor: '#000000', darkColor: '#FFFFFF' }
    ],
    featuredProjects: ['codesnippet']
  }
];
