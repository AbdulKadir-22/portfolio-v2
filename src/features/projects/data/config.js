import projectsData from './projects.json';

// Import local project cover images
import portfoliov2Img from '../../../assets/projects/project-portfolio.png';
import neargrabImg from '../Images/Neargrab.png';
import portyoursImg from '../Images/portyours/portyours.png';
import amaal2 from '../Images/amaal/amaal2.png';
import bitsImg from '../Images/bits/dashboard.jpeg';

// Map image assets to project ids
const imageMapping = {
  portfoliov2: portfoliov2Img,
  neargrab: neargrabImg,
  ramazaanAmaal: amaal2,
  portyours: portyoursImg,
  bits: bitsImg,
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
