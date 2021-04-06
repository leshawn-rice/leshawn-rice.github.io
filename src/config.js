import ffl_img from './img/ffl.gif';
import grabaphone_img from './img/grabaphone.png';
import jobify_img from './img/jobify.gif';

const PROJECTS = [
  {
    title: 'Fantasy Football Trade Tips',
    description: `Fantasy Trade Tips is a full stack web application that allows fantasy football players to view stats, get trade suggestions, and simulate trades to view the impact on their new team. It's written in Python, and uses Flask, SQLAlchemy, & WTForms on the backend. It's currently hosted on Heroku, so it may take a moment to spin up.`,
    image: grabaphone_img
  },
  {
    title: 'Grabaphone API',
    description: `Grabaphone is a RESTful API that can be used to retrieve data on over 5000 cellular devices. It's written in Python, and uses Flask & SQLAlchemy on the backend. It's currently hosted on Heroku, so it may take a moment to spin up.`,
    image: grabaphone_img
  },
  {
    title: 'Jobify',
    description: `Jobify is a web application that aggregates job postings from LinkedIn, Indeed, and Monster so users can easily find, save, and apply to tons of jobs in one place.`,
    image: grabaphone_img
  },
  {
    title: 'Yeti',
    description: 'Yeti is a full stack web application, and a mobile app that empowers users to engage with their community. It uses Express on the backend, and React/React Native on the frontend for the web and mobile apps, respectively.',
  }
]

const HEADERS_DATA = [
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Contact',
    href: '#contact',
  },
  {
    label: 'Projects',
    href: '#projects',
  },
  {
    label: 'Github',
    href: 'https://github.com/leshawn-rice',
    target: '_blank'
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.in/in/leshawn-rice',
    target: '_blank'
  }
];

export { PROJECTS, HEADERS_DATA }