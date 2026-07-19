import '../styles/Home.css';

function Home() {
  const scrollToProjects = () => {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Mano_Resume.pdf';
    link.click();
  };

  return (
    <section id="home" className="home">
      <div className="home-background">
        <div className="bg-shape bg-shape-1"></div>
      </div>
      
      <div className="home-content">
        <p className="welcome-text">WELCOME TO</p>
        <h1 className="home-title home-title-highlight">Manodevi's Website</h1>
        <p className="tagline">Full Stack Developer | Cloud Enthusiast</p>
        <div className="button-group">
          <button className="cta-btn" onClick={scrollToProjects}>
            View My Work
          </button>
          <button className="resume-btn" onClick={downloadResume}>
            My Resume
          </button>
        </div>
      </div>
    </section>
  );
}

export default Home;