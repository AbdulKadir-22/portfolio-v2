/**
 * Blog page configuration.
 * All blog posts, categories, and tags are centralized here.
 */

import blogFeatured from '../../../assets/blogs/blog-featured.webp';
import odoo from '../../../assets/blogs/odoo.webp';
import ooniverse from '../../../assets/blogs/ooniverse.webp';
import dominatedOnField from '../../../assets/blogs/dominated-on-field.webp';

// Import markdown posts as raw strings
import theBeginningOfSomethingMd from './posts/the-beginning-of-something.md?raw';
import ooniverseMd from './posts/ooniverse.md?raw';
import aQuietInjuryMd from './posts/a-quiet-injury.md?raw';
import tenDaysThatChangedMeMd from './posts/ten-days-that-changed-me.md?raw';
import theWorkThatSpokeMd from './posts/the-work-that-spoke.md?raw';
import domainsDeadlinesDefiningMomentsMd from './posts/domains-deadlines-defining-moments.md?raw';
import dominatedOnTheFieldTargetedOffItMd from './posts/dominated-on-the-field-targeted-off-it.md?raw';
import knowingWhereYouStandMd from './posts/knowing-where-you-stand.md?raw';

export const blogMarkdownMap = {
  'the-beginning-of-something': theBeginningOfSomethingMd,
  'ooniverse': ooniverseMd,
  'a-quiet-injury': aQuietInjuryMd,
  'ten-days-that-changed-me': tenDaysThatChangedMeMd,
  'the-work-that-spoke': theWorkThatSpokeMd,
  'domains-deadlines-defining-moments': domainsDeadlinesDefiningMomentsMd,
  'dominated-on-the-field-targeted-off-it': dominatedOnTheFieldTargetedOffItMd,
  'knowing-where-you-stand': knowingWhereYouStandMd,
};

export const blogConfig = {
  pageTitle: 'My Blogs',
  pageSubtitle: 'Thoughts, stories and lessons from my journey.',
};

/** Category definitions with colors and counts */
export const categories = [
  { id: 'journey', label: 'Journey', color: '#3b82f6', count: 3 },
  { id: 'technology', label: 'Technology', color: '#8b5cf6', count: 1 },
  { id: 'learnings', label: 'Learnings', color: '#06b6d4', count: 2 },
  { id: 'thoughts', label: 'Thoughts', color: '#eab308', count: 1 },
  { id: 'life', label: 'Life', color: '#22c55e', count: 1 },
];

/** Popular tags */
export const popularTags = [
  '#development', '#javascript', '#react',
  '#webdev', '#learning', '#productivity',
  '#mindset', '#projects', '#life', '#hackathon',
];

/** Featured story */
export const featuredStory = {
  id: 'ten-days-that-changed-me',
  title: 'Ten Days That Changed Me',
  description: 'An 11 PM interview, landing an internship, stepping back, and finding out what really matters when life accelerates.',
  ctaText: 'Read Story',
  image: blogFeatured,
};

/** All blog posts in chronological order (newest first) */
export const blogPosts = [
  {
    id: 'knowing-where-you-stand',
    category: 'learnings',
    title: 'Knowing Where You Stand',
    excerpt: "Competing in the Odoo Hackathon 2026 with 21,000+ developers, facing our weak points, and learning why losing can be the best teacher.",
    date: 'September 13, 2026',
    readTime: '3 min read',
    image: odoo,
    featured: false,
  },
  {
    id: 'dominated-on-the-field-targeted-off-it',
    category: 'learnings',
    title: 'Dominated on the field. Targeted off it.',
    excerpt: 'Building an emergency vehicle multi-agent coordination system in Indore, dominating the national hackathon floor, and dealing with unfair politics.',
    date: 'April 2, 2026',
    readTime: '4 min read',
    image: dominatedOnField,
    featured: false,
  },
  {
    id: 'domains-deadlines-defining-moments',
    category: 'journey',
    title: 'February: Domains, Deadlines, and Defining Moments',
    excerpt: 'Delivering a paid production client app in 7 days, owning my own digital space, and navigating intense moments of growth.',
    date: 'February 19, 2026',
    readTime: '4 min read',
    image: null,
    featured: false,
  },
  {
    id: 'the-work-that-spoke',
    category: 'journey',
    title: 'A Month of Silence, and the Work That Spoke Back',
    excerpt: 'Stepping away from startup noise and choosing solitude to build Be;coming and honest tools that solve real problems.',
    date: 'January 15, 2026',
    readTime: '4 min read',
    image: null,
    featured: false,
  },
  {
    id: 'ten-days-that-changed-me',
    category: 'journey',
    title: 'Ten Days That Changed Me',
    excerpt: 'Ten intense days, an 11 PM interview, an internship offer from IIT Madras alumni, and learning that stepping back is sometimes the bravest move.',
    date: 'December 14, 2025',
    readTime: '4 min read',
    image: blogFeatured,
    featured: true,
  },
  {
    id: 'a-quiet-injury',
    category: 'life',
    title: 'A Quiet Injury',
    excerpt: 'An honest look at doubt, exam failures, tunnel vision, and marking the exact moment of failure before beginning the climb again.',
    date: 'December 4, 2025',
    readTime: '2 min read',
    image: null,
    featured: false,
  },
  {
    id: 'ooniverse',
    category: 'technology',
    title: 'Ooniverse — The Project That Refused to Die',
    excerpt: 'Why is managing college life harder than college itself? The story of building a student-first academic universe from scratch.',
    date: 'November 13, 2025',
    readTime: '4 min read',
    image: ooniverse,
    featured: false,
  },
  {
    id: 'the-beginning-of-something',
    category: 'thoughts',
    title: 'The Beginning of Something',
    excerpt: 'Sending the first professional emails to assemble a team for a dream held for a year, embracing the audacity of youth.',
    date: 'November 1, 2025',
    readTime: '1 min read',
    image: null,
    featured: false,
  },
];
