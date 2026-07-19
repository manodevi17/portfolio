import '../styles/Projects.css';

function Projects() {
  const projects = [
    {
      name: 'Cloud File Management System',
      desc: 'Full-stack file management application with role-based access control. Built with Flask and Boto3 using AWS S3 API simulation (Moto).',
      tech: 'Python, Flask, Boto3, Moto, HTML/CSS',
      github: 'https://github.com/manodevi17/cloud-file-manager-flask'
    },
    {
      name: 'Digital Twin Model',
      desc: 'Virtual factory simulation project that replicates real-world operations. Placed 4th at TN-Impact Hackathon 2026 among 450+ teams.',
      tech: 'Python, Flask, SimPy, JavaScript, HTML/CSS',
      github: 'https://github.com/manodevi17/DigitalTwin'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2>MY WORKS</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.name}</h3>
              <p className="project-desc">{project.desc}</p>
              <p className="tech-stack"><strong>Tech:</strong> {project.tech}</p>
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-link">
                View on GitHub →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;