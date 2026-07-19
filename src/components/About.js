import '../styles/About.css';

function About() {
  return(
    <section id="about" className="about">
      <div className="about-container">
        <h2>ABOUT ME</h2>
        
        <div className="about-description">
          <p>
            Passionate full-stack developer with demonstrated expertise in building cloud-backed web applications. 
            AWS-certified with hands-on experience in S3, EC2, and role-based access control systems. 
            Led development of production-ready projects including a file management system with AWS S3 integration and a Digital Twin simulation (4th place, TN-Impact Hackathon 2026 among 450+ teams). 
            Driven by innovation and committed to delivering high-quality solutions that make an impact.
          </p>
        </div>

        <h3>EXPERIENCE</h3>
        <div className="experience">
          <p><strong>AWS AI-Powered Cloud Engineer:</strong> EduSkills Foundation, Virtual Internship (January - March 2026)</p>
          <p><strong>Full Stack Web Development:</strong> Astonish Infotech, Trichy (July 2026 - 30 days)</p>
          <p><strong>Hackathon:</strong> TN-Impact 2026 - 4th Place (February 2026, Digital Twin Project)</p>
          </div>
      </div>
    </section>
  );
}

export default About;