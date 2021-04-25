import React from 'react';
import { Typography } from '@material-ui/core';
import './styles/About.css'

const About = () => {
  return (
    <div className="About" id="about">
      <Typography variant="h1" className="About-Heading">
        About
      </Typography>

      <div className="About-Body">
        <Typography variant="h5" component="p">
          Hello! My name is Leshawn Rice, and I'm a Software Developer from the Greater Seattle area. I primarily use <strong>Javascript</strong> and <strong>Python</strong> but picking up a new framework or language isn't a problem for me. I'm comfortable developing on the frontend and the backend, and I enjoy challenging myself to make seamless, efficient, and scalable applications.
          <br />
          <br />

          <Typography variant="h4" component="span">
            Backend
          </Typography>
          <br />
          My bread and butter is <strong>Express</strong>. When working with a backend in Javascript, the stack I'm most familiar with is PostgreSQL, Express, and Node.js, but like I said picking up a new framework or language isn't a problem for me, so I can quickly adapt to a MEAN stack without much difficulty.
          <br />
          <a className="project-link" href="#TicketMaster">Yeti</a> runs off of a backend built with Express.
          <br />
          <br />
          When working in a Python backend, the framework I'm most familiar with is <strong>Flask</strong>. While Flask is easy to work with and provides a lot of flexibiliy, I've been getting more into using <strong>Django</strong> since they added asynchronous support.
          <br />
          <a className="project-link" href="#Fantasy Football Trade Tips">Fantasy Football Trade Tips</a> runs off of a backend built with Flask.
        </Typography>
      </div>
    </div>
  )
}

export default About;