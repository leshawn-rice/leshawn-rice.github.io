import React from 'react'
import Seperator from './Seperator';
import '../styles/Skills.scss';

const Skills = () => {
  return (
    <>
      <Seperator />
      <h1 className="Skills-Header">Skills</h1>
      <div className="Skills">
        <div className="Skill-Pill">
          Javascript
        </div>
        <div className="Skill-Pill">
          Python
        </div>
        <div className="Skill-Pill">
          SQL
        </div>
        <div className="Skill-Pill">
          Express
        </div>
        <div className="Skill-Pill">
          Flask
        </div>
        <div className="Skill-Pill">
          Django
        </div>
        <div className="Skill-Pill">
          React
        </div>
        <div className="Skill-Pill">
          React-Native
        </div>
        <div className="Skill-Pill">
          Ansible
        </div>
      </div>
    </>
  )
}

export default Skills;