import '../styles/Skills.css';
import { FaLaptopCode, FaPython, FaCloud, FaDatabase } from 'react-icons/fa';

function Skills() {
  const skillCategories = [
    { name: 'Web Development', icon: <FaLaptopCode /> },
    { name: 'Python', icon: <FaPython /> },
    { name: 'Cloud', icon: <FaCloud /> },
    { name: 'MySQL', icon: <FaDatabase /> }
  ];

  const skillBars = [
    { name: 'HTML, CSS & JavaScript', level: 90 },
    { name: 'React', level: 85 },
    { name: 'Python & Flask', level: 80 },
    { name: 'AWS & Cloud', level: 75 },
    { name: 'MongoDB & MySQL', level: 80 },
    { name: 'Node.js & Express.js', level: 75 }
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <h2>MY SKILLS</h2>
        
        <div className="skills-categories">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <div className="skill-icon">{category.icon}</div>
              <p className="skill-name">{category.name}</p>
            </div>
          ))}
        </div>

        <h3>PROFICIENCY</h3>
        <div className="skills-bars">
          {skillBars.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-header">
                <span className="skill-label">{skill.name}</span>
                <span className="skill-percent">{skill.level}%</span>
              </div>
              <div className="skill-bar-bg">
                <div className="skill-bar-fill" style={{ width: `${skill.level}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;