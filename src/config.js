import ffl_img from './img/ffl.gif';
import grabaphone_img from './img/grabaphone.png';

const NAVBTN_POS_MAP = {
  1: {
    left: '5rem'
  },
  2: {
    left: '15rem',
  },
  3: {
    right: '15rem'
  },
  4: {
    right: '5rem'
  }
};

const PROJECTS = [
  {
    name: 'Fantasy Football Trade Tips',
    description: `Fantasy Football Trade Tips is a full-stack web application that was built by ya boi`,
    image: ffl_img
  },
  {
    name: 'Grabaphone API',
    description: `The Grabaphone API is an API that scrapes cellular device data`,
    image: grabaphone_img
  },
  {
    name: 'Jobify',
    description: `Jobify is a simple web app to look at job openings`,
    image: './img/jobify.jpg'
  }
]

export { NAVBTN_POS_MAP, PROJECTS }