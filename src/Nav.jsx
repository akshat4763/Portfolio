import React from 'react';
import profileImage from './assets/pro.jpg'; // Make sure to save the image in the src directory
import resumePDF from './assets/resume.pdf'; // Import the PDF file

const Portfolio = () => {
  return (
    <div className="portfolio">
      <header className="header">
        <div className="logo">
          <img src='https://i.ibb.co/xGdJhZs/2.png' alt="profile" height="100px"/>
        </div>

        <nav className="navigation">
          <a href={resumePDF} download="Akshat_Resume.pdf">My Resume</a>
          <a href="https://github.com/akshat4763">Certificates</a>
          <a href="https://github.com/akshat4763">Skills</a>
          {/* <a href="#">Contacts</a> */}
          <a href="#">|</a>
        </nav>
        <div className="social-media">
          <a href="https://www.instagram.com/_akshat4763/" className="icon">
            <img src='https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/instagram-white-icon.png' width="20px" alt="Instagram"/>
          </a>
          <a href="https://www.linkedin.com/in/akshat-sharma4763/" className="icon">
            <img src='https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/linkedin-app-white-icon.svg' width="20px" alt="LinkedIn"/>
          </a>
          <a href="https://github.com/akshat4763" className="icon">
            <img src='https://img.icons8.com/?size=100&id=38362&format=png&color=FFFFFF' width="20px" alt="GitHub"/>
          </a>
          <a href="https://x.com/Akshat9570" className="icon">
            <img src='https://img.icons8.com/?size=100&id=A4DsujzAX4rw&format=png&color=FFFFFF' width="20px" alt="Twitter"/>
          </a>
        </div>
      </header>
      <main className="main-content">
        <div className="intro">
          <h1>HI, I'M AKSHAT</h1>
          <h2>I'M A FULL STACK <br /> DEVELOPER</h2>
          <p>With extensive experience in both front-end and back-end technologies, as a freelancer, I bring innovative solutions to life, ensuring each project is tailored to meet unique client needs.</p>
          <a href="#" className="view-projects-btn"><img className='link' src='https://img.icons8.com/?size=100&id=92&format=png&color=FFFFFF'></img> View My Projects</a>
        </div>
        <div className="profile-image-container">
          <img src={profileImage} alt="Akshat" className="profile-image" />
        </div>
      </main>
    </div>
  );
};

export default Portfolio;
