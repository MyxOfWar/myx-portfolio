import PageContent from './PageContent';

const projectsData = [
  {
    id: 1,
    command: "echo 'Projects'",
  },
  {    id: 1.1,
    command: 'Here are some of my recent projects:',
  },
  {
    id: 1.2,
    command: ' ',
  },
  {
    id: 2,
    command: 'Project 1:',
  },
  {
    id: 2.1,
    command: 'Personal Portfolio Website - A responsive portfolio website built with React and hosted on GitHub Pages.'

  },
  {
    id: 2.2,
    command: 'Repository: '
  },
  {
    id: 2.21,
    command: "'github.com/MyxOfWar/myx-portfolio'",
  },
  {
    id: 2.3,
    command: 'Live Demo: '
  },
  {    id: 2.31,
    command: "'myx-portfolio.vercel.app/'",
  },
  {
    id: 2.4,
    command: ' ',
  },
  {
    id: 3,
    command: 'Project 2:',
  },
  {
    id: 3.1,
    command: 'Household and Task Manager App - A full stack adult household and task management application using Node.js, Express, and MongoDB.'
  },
  {
    id: 3.2,
    command: 'Overview: '
  },
  {
    id: 3.21,
    command: "'coming soon ...'",
  },
  {
    id: 3.3,
    command: ' ',
  },
  {
    id: 4,
    command: 'More coming soon ...',
  },
]

function Projects() {
  return <PageContent data={projectsData} />;
}

export default Projects;
