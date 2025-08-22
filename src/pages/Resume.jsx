import React, { useState, useEffect } from 'react';
import styles from '../styles/Resume.module.css';

const designSkills = [
  { name: "HTML", percent: 70 },
  { name: "CSS", percent: 50 },
  { name: "Bootstrap", percent: 60 },
  { name: "JavaScript", percent: 70 },
  { name: "jQuery", percent: 90 },
];

const devSkills = [
  { name: "PHP & Laravel", percent: 95 },
  { name: "Database", percent: 90 },
  { name: "ReactJS", percent: 60 },
  { name: "NodeJS", percent: 60 },
  { name: "Python", percent: 45 },
];

const Resume = () => {
  const [activeTab, setActiveTab] = useState('education');
  const [fillWidths, setFillWidths] = useState({});

  useEffect(() => {
    if (activeTab === 'skills') {
      const newWidths = {};
      [...designSkills, ...devSkills].forEach(skill => {
        newWidths[skill.name] = skill.percent + "%";
      });
      setTimeout(() => setFillWidths(newWidths), 100);
    }
  }, [activeTab]);

  return (
    <section className={styles.resumeContainer}>
      <h3 className={styles.smallHeading}>2+ YEARS OF PROFESSIONAL EXPERIENCE</h3>
      <h1 className={styles.mainHeading}>My Resume</h1>

      <div className={styles.tabs}>
        <button 
          className={activeTab === 'education' ? styles.active : ''} 
          onClick={() => setActiveTab('education')}
        >Education</button>
        <button 
          className={activeTab === 'experience' ? styles.active : ''} 
          onClick={() => setActiveTab('experience')}
        >Experience</button>
        <button 
          className={activeTab === 'skills' ? styles.active : ''} 
          onClick={() => setActiveTab('skills')}
        >Professional Skills</button>
      </div>

      {activeTab === 'education' && (
        <div className={styles.timeline}>

          <div className={styles.timelineItem}>
            <div className={styles.timelineDot}></div>
            <div className={styles.timelineContent}>
              <h3>Master in Data Science</h3>
              <span>University of Europe For Applied Sciences Innovation Hub ( Potsdam ) • 2024 - Present</span>
              {/* <p>Graduated with CGPA 8.41 (79.10%).</p> */}
            </div>
          </div>

          <div className={styles.timelineItem}>
            <div className={styles.timelineDot}></div>
            <div className={styles.timelineContent}>
              <h3>BACHELOR OF COMPUTER APPLICATION</h3>
              <span>Atmiya University ( Rajkot ) • june '2018 — May '2021</span>
              <p>Completed with CGPA 7.14.</p>
            </div>
          </div>

          <div className={styles.timelineItem}>
            <div className={styles.timelineDot}></div>
            <div className={styles.timelineContent}>
              <h3>GUJARAT HIGHER SECONDARY BOARD GUJARAT</h3>
              <span>New Era High School ( Rajkot ) • june '2017 — Mar '2018</span>
              <p>Completed with PR 67.30 .</p>
            </div>
          </div>

          <div className={styles.timelineItem}>
            <div className={styles.timelineDot}></div>
            <div className={styles.timelineContent}>
              <h3>GUJARAT SECONDARY EDUCATION BOARD GUJARAT</h3>
              <span>New Era High School ( Rajkot ) • june '2015 — Mar '2016</span>
              <p>Completed with PR 78.30.</p>
            </div>
          </div>

        </div>
      )}

      {activeTab === 'experience' && (
        <div className={styles.timeline}>
          
          <div className={styles.timelineItem}>
            <div className={styles.timelineDot}></div>
            <div className={styles.timelineContent}>
                <h3>Peer Network PSE UG</h3>
                <span>PHP Backend Developer (Intern) • Mar '25 - May '25</span>
                <p>Leading Developed GraphQL APIs, Collaborated on Blockchain specialists, Assisted with agile sprint iterations.</p>
            </div>
          </div>

          <div className={styles.timelineItem}>
            <div className={styles.timelineDot}></div>
            <div className={styles.timelineContent}>
              <h3>Infocrypt Solution</h3>
              <span>Full Stack Developer • Aug '21 - Apr '24</span>
              <p>Leading app development, maintaining robust frameworks, collaborating on UI/UX.</p>
            </div>
          </div>

          <div className={styles.timelineItem}>
            <div className={styles.timelineDot}></div>
            <div className={styles.timelineContent}>
              <h3>DB It Solution</h3>
              <span>Full Stack Developer & UI/UX Designer • jan '21 - Aug '21</span>
              <p>Developed full-stack applications, and collaborating on UI/UX.</p>
            </div>
          </div>

        </div>
      )}

      {activeTab === 'skills' && (
        <div className={styles.skillsContainer}>
          <div className={styles.column}>
            <h3 className={styles.sectionHeading}>Features</h3>
            <h2 className={styles.columnTitle}>Proficient in Design</h2>
            {designSkills.map(skill => (
              <div key={skill.name} className={styles.skill}>
                <div className={styles.skillLabel}>
                  <span>{skill.name}</span>
                  <span>{skill.percent}%</span>
                </div>
                <div className={styles.skillBar}>
                  <div 
                    className={styles.skillBarFill} 
                    style={{ width: fillWidths[skill.name] || 0 }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.column}>
            <h3 className={styles.sectionHeading}>Features</h3>
            <h2 className={styles.columnTitle}>Development Skill</h2>
            {devSkills.map(skill => (
              <div key={skill.name} className={styles.skill}>
                <div className={styles.skillLabel}>
                  <span>{skill.name}</span>
                  <span>{skill.percent}%</span>
                </div>
                <div className={styles.skillBar}>
                  <div 
                    className={styles.skillBarFill} 
                    style={{ width: fillWidths[skill.name] || 0 }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Resume;
