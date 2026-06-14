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
  SiGraphql,
  SiSocketdotio,
  SiPython,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiFlask,
  SiFlutter,
  SiDart,
  SiGooglecloud,
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
import { DiJava,DiDjango} from 'react-icons/di';
import { FaAws } from 'react-icons/fa';
import { VscVscode } from 'react-icons/vsc';

import frontendPlanet from '../../../assets/skills/frontend.png';
import backendPlanet from '../../../assets/skills/Backend.png';
import databasePlanet from '../../../assets/skills/Database.png';
import aiPlanet from '../../../assets/skills/Locked.png';
import toolsPlanet from '../../../assets/skills/tools.png';

export const skillsConfig = {
  pageTitle: 'My Skills',
  pageSubtitle:
    'A growing collection of technologies, tools, ideas, and disciplines that shape the things I create.',
  quote: 'Every skill started as a mystery I refused to leave unsolved.',
};

export const skillsData = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    planet: frontendPlanet,
    count: '5 Technologies',
    description:
      'The visible side of my ideas. I enjoy transforming concepts into experiences that feel intuitive, expressive, and alive. From portfolio experiments to hackathon products, frontend development is where design meets engineering.',
    angle: -126,
    proficiencies: [
      { name: 'React', percentage: 90 },
      { name: 'JavaScript', percentage: 88 },
      { name: 'HTML5', percentage: 95 },
      { name: 'CSS3', percentage: 90 },
      { name: 'Tailwind CSS', percentage: 92 }
    ],
    technologies: [
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS3', icon: SiCss, color: '#1572B6' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' }
    ],
    featuredProjects: ['portfoliov2', 'portyours', 'neargrab']
  },

  {
    id: 'backend',
    title: 'Backend Development',
    planet: backendPlanet,
    count: '7 Technologies',
    description:
      'My favorite playground. I enjoy architecting APIs, designing authentication systems, solving data-flow challenges, and building the invisible foundations that power modern applications. Most of my recent growth has been focused on becoming a stronger backend engineer.',
    angle: -54,
    proficiencies: [
      { name: 'Node.js / Express', percentage: 90 },
      { name: 'REST APIs', percentage: 92 },
      { name: 'Authentication & JWT', percentage: 88 },
      { name: 'Python Backend', percentage: 75 },
      { name: 'Java', percentage: 72 }
    ],
    technologies: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      {
        name: 'Express.js',
        icon: SiExpress,
        color: '#000000',
        lightColor: '#000000',
        darkColor: '#FFFFFF'
      },
      { name: 'Java', icon: DiJava, color: '#ED8B00' },
      { name: 'Python', icon: SiPython, color: '#3776AB' },
      { name: 'Django', icon: DiDjango, color: '#092E20' },
      {
        name: 'Flask',
        icon: SiFlask,
        color: '#000000',
        lightColor: '#000000',
        darkColor: '#FFFFFF'
      },
      { name: 'JWT Authentication', icon: null, color: '#000000' }
    ],
    featuredProjects: ['portyours', 'neargrab']
  },

  {
    id: 'databases',
    title: 'Databases & Data',
    planet: databasePlanet,
    count: '3 Technologies',
    description:
      'Every application eventually becomes a story about data. I enjoy designing schemas, structuring information, optimizing queries, and ensuring systems remain reliable as projects grow from prototypes into products.',
    angle: 18,
    proficiencies: [
      { name: 'MongoDB', percentage: 88 },
      { name: 'PostgreSQL', percentage: 80 },
      { name: 'SQLite', percentage: 75 },
      { name: 'Database Design', percentage: 85 },
      { name: 'Data Modeling', percentage: 82 }
    ],
    technologies: [
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4479A1' },
      { name: 'SQLite', icon: null, color: '#003B57' }
    ],
    featuredProjects: ['portyours', 'neargrab']
  },

  {
    id: 'mobile-cloud',
    title: 'Mobile & Cloud',
    planet: aiPlanet,
    count: '4 Technologies',
    description:
      'Exploring mobile application development and cloud-powered services. Building cross-platform experiences with Flutter while leveraging Firebase and Google Cloud for scalable backend services.',
    angle: 90,
    proficiencies: [
      { name: 'Flutter', percentage: 72 },
      { name: 'Dart', percentage: 70 },
      { name: 'Firebase', percentage: 80 },
      { name: 'Google Cloud', percentage: 65 },
      { name: 'Cross Platform Development', percentage: 70 }
    ],
    technologies: [
      { name: 'Flutter', icon: SiFlutter, color: '#02569B' },
      { name: 'Dart', icon: SiDart, color: '#0175C2' },
      { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
      { name: 'Google Cloud', icon: SiGooglecloud, color: '#4285F4' }
    ],
    featuredProjects: []
  },

  {
    id: 'tools-workflow',
    title: 'Tools & Workflow',
    planet: toolsPlanet,
    count: '5 Technologies',
    description:
      'The tools behind every successful project. From version control and API testing to design and project planning, these help transform ideas into production-ready products.',
    angle: 162,
    proficiencies: [
      { name: 'Git & GitHub', percentage: 92 },
      { name: 'API Testing', percentage: 90 },
      { name: 'UI/UX Design', percentage: 85 },
      { name: 'Project Planning', percentage: 85 },
      { name: 'Developer Workflow', percentage: 95 }
    ],
    technologies: [
      { name: 'Git', icon: SiGit, color: '#F05032' },
      {
        name: 'GitHub',
        icon: SiGithub,
        color: '#181717',
        lightColor: '#181717',
        darkColor: '#FFFFFF'
      },
      { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
      { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
      { name: 'Notion', icon: null, color: '#000000' }
    ],
    featuredProjects: [
      'portfoliov2',
      'portyours',
      'neargrab'
    ]
  }
];