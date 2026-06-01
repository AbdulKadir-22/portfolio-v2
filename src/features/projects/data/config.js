import projectsData from './projects.json';

// Import local project cover images
import astroblogImg from '../../../assets/projects/project-astroblog.png';
import devconnectImg from '../../../assets/projects/project-devconnect.png';
import portfoliov2Img from '../../../assets/projects/project-portfoliov2.png';
import neargrabImg from '../../../assets/projects/project-neargrab.png';
import portyoursImg from '../../../assets/projects/project-portyours.png';
import codesnippetImg from '../../../assets/projects/project-codesnippet.png';

// Map image assets to project ids
const imageMapping = {
  astroblog: astroblogImg,
  devconnect: devconnectImg,
  portfoliov2: portfoliov2Img,
  neargrab: neargrabImg,
  portyours: portyoursImg,
  codesnippet: codesnippetImg
};

// Merge JSON projects with actual imported images
export const projects = projectsData.map((project) => ({
  ...project,
  image: imageMapping[project.id] || null
}));

// Page configuration matching design mockup text
export const projectConfig = {
  pageTitle: 'My Projects',
  pageSubtitle: 'Ideas turned into reality. Things I built with code, curiosity and passion.',
  categories: [
    { id: 'all', label: 'All Projects' },
    { id: 'webapps', label: 'Web Apps' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'tools', label: 'Tools' },
    { id: 'opensource', label: 'Open Source' }
  ],
  stats: [
    { label: 'Projects Built', value: '12+', color: 'purple' },
    { label: 'Full Stack Apps', value: '6', color: 'cyan' },
    { label: 'Open Source', value: '5', color: 'gold' }
  ],
  techStackOverview: [
    { label: 'JavaScript / TypeScript', percentage: 90, color: 'blue' },
    { label: 'React / Next.js', percentage: 85, color: 'violet' },
    { label: 'Node.js', percentage: 80, color: 'emerald' },
    { label: 'Database', percentage: 75, color: 'amber' },
    { label: 'DevOps & Tools', percentage: 70, color: 'indigo' }
  ]
};
