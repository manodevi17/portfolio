import '../styles/Certifications.css';

function Certifications() {
  const certs = [
    {
      title: 'AWS AI-Powered Cloud Engineer',
      issuer: 'EduSkills Foundation',
      date: '2026',
      icon: '☁️'
    },
    {
      title: 'Certified Blockchain Associate',
      issuer: 'Kerala Blockchain Academy',
      date: '2025',
      icon: '🔗'
    }
  ];

  return (
    <section id="certifications" className="certifications">
      <div className="certifications-container">
        <h2>CERTIFICATIONS & AWARDS</h2>
        <div className="certs-grid">
          {certs.map((cert, index) => (
            <div key={index} className="cert-card">
              <div className="cert-icon">{cert.icon}</div>
              <h3>{cert.title}</h3>
              <p className="issuer">{cert.issuer}</p>
              <p className="year">{cert.date}</p>
            </div>
          ))}
        </div>
        
        <div className="awards-section">
          <h3>Awards</h3>
          <div className="award-item">
            <span className="award-icon">🏆</span>
            <div>
              <p className="award-title">4th Place - TN-Impact Hackathon 2026</p>
              <p className="award-org">Among 450+ competing teams</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Certifications;