import React, { useState } from 'react';
import './About.css';

const About = () => {
  const [activeTab, setActiveTab] = useState('skills');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className='about-section' id='about'>
      <div className="about-container">
        <div className="about-row">
        <h1 className='about-sub-heading mobile'>About Me</h1>
          <div className="about-col-1">
            <img src="/images/user.png" alt="user-img" />
          </div>
          <div className="about-col-2">
            <h1 className='about-sub-heading'>About Me</h1>
            <p>Innovative and deadline-driven Software Engineer with 2 years of experience in designing and developing Flutter Apps from initial concept to final, polished deliverable.</p>
            <div className="tab-titles">
              <p className={`tab-links ${activeTab === 'skills' ? 'active-link' : ''}`} onClick={() => handleTabClick('skills')}>Skills</p>
              <p className={`tab-links ${activeTab === 'experience' ? 'active-link' : ''}`} onClick={() => handleTabClick('experience')}>Experience</p>
              <p className={`tab-links ${activeTab === 'education' ? 'active-link' : ''}`} onClick={() => handleTabClick('education')}>Education</p>
            </div>
            <div className={`tab-content ${activeTab === 'skills' ? 'active-tab' : ''}`} id='skills'>
            <ul>
                <li><span>UI/UX</span><br />To create visually appealing and user-friendly interfaces.</li>
                <li><span>Cross-Platform Development</span><br />To develop cross-platform mobile applications for iOS and Android using Flutter.</li>
                <li><span>API Integration</span><br />Experienced in integrating RESTful APIs and third-party services to fetch and send data.</li>
                <li><span>Firebase</span><br />Knowledge of integrating Firebase services for features like authentication, real-time databases, and cloud functions.</li>
                <li><span>Continuous Integration/Continuous Deployment</span><br />Experienced in setting up CI/CD pipelines for automated testing and deployment.</li>
              </ul>
            </div>
            <div className={`tab-content ${activeTab === 'experience' ? 'active-tab' : ''}`} id='experience'>
            <ul>
                <li><span>Flutter Developer 2023-Current</span><br />Proficient in developing cross-platform mobile applications using Flutter, ensuring a consistent and engaging user experience across both iOS and Android platforms.
                  Demonstrated ability to seamlessly integrate visually appealing and intuitive user interfaces, combining technical proficiency with a keen eye for design to create polished and user-friendly applications.</li>
                <li><span>.Net Core Developer 2022-2023</span><br />Demonstrated expertise in designing, implementing, and maintaining robust applications using the .NET Core framework, ensuring optimal performance and scalability.
                  Skilled in working with databases, proficient in designing and optimizing database schemas, and experienced in using Entity Framework Core for efficient data access and manipulation.</li>
              </ul>
            </div>
            <div className={`tab-content ${activeTab === 'education' ? 'active-tab' : ''}`} id='education'>
              <ul>
                <li><span>COMSATS 2022-Current</span><br />Bachelor's of Computer Science</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
