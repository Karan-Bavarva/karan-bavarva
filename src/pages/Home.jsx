// import React from "react";
// import styles from "../styles/Home.module.css";

// export default function Home() {
//   return (
//     // <section className={styles.hero}>
//     //   <h1 className={styles.title}>Karan Bavarva</h1>
//     //   <p className={styles.subtitle}>Full Stack Developer | Backend Developer</p>
//     //   <div className={styles.buttons}>
//     //     <a href="/projects" className={styles.primaryButton}>View Projects</a>
//     //     <a href="/resume.pdf" className={styles.secondaryButton}>Resume</a>
//     //   </div>
//     // </section>

//     <section className={styles.hero}>
//         <h1 className={styles.title}>Karan Bavarva</h1>
//         <p className={styles.subtitle}>Full Stack Developer | Backend Developer</p>
//         <div className={styles.buttons}>
//         <a href="/projects" className={styles.primaryButton}>View Projects</a>
//         <a href="/Resume" className={styles.secondaryButton}>Resume</a>
//         </div>
//     </section>
    
//   );
// }



// import React from "react";
// import styles from "../styles/Home.module.css";
// import profileImage from "../assets/Karan.png"; // adjust to your actual image path

// export default function Home() {
//   return (
//     <section className={styles.hero}>
//       <div className={styles.left}>
//         <h4 className={styles.smallTitle}>WELCOME TO MY WEB DEVELOPMENT UNIVERSE!</h4>
//         <h1 className={styles.bigTitle}>
//           Hi, I’m <span className={styles.highlight}>Karan Bavarva</span><br />
//           a Laravel Artisan.
//         </h1>
//         <p className={styles.description}>
//           Crafting dynamic web solutions with Laravel, PHP, Node.js, and React. 
//           Full stack developer dedicated to building seamless digital experiences.
//           Let's collaborate and bring your ideas to life!
//         </p>

//         <div className={styles.linksRow}>
//           <div>
//             <h5>FIND WITH ME</h5>
//             <div className={styles.socialIcons}>
//               <a href="https://github.com"><i className="fab fa-github"></i></a>
//               <a href="https://github.com"><i className="fab fa-linkedin"></i></a>
//               <a href="https://github.com"><i className="fab fa-stack-overflow"></i></a>
//             </div>
//           </div>
//           <div>
//             <h5>BEST SKILL ON</h5>
//             <div className={styles.skillIcons}>
//               <i className="fab fa-laravel"></i>
//               <i className="fab fa-node-js"></i>
//               <i className="fab fa-react"></i>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className={styles.right}>
//         <img src={profileImage} alt="Profile illustration" />
//       </div>
//     </section>
//   );
// }




// import React, { useState, useEffect } from "react";
// import styles from "../styles/Home.module.css";

// import profileImage from "../assets/Karan.png";

// import { FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";
// import { SiLaravel, SiNodedotjs, SiReact } from "react-icons/si";

// export default function Home() {
//   const titles = ["Laravel Artisan.", "React Wizard.", "Node.js Ninja."];
//   const [currentText, setCurrentText] = useState("");
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isDeleting, setIsDeleting] = useState(false);

//   useEffect(() => {
//     const currentTitle = titles[currentIndex];
//     let typeSpeed = isDeleting ? 50 : 100;

//     const type = setTimeout(() => {
//       setCurrentText(prev =>
//         isDeleting
//           ? currentTitle.substring(0, prev.length - 1)
//           : currentTitle.substring(0, prev.length + 1)
//       );

//       if (!isDeleting && currentText === currentTitle) {
//         setTimeout(() => setIsDeleting(true), 1000);
//       } else if (isDeleting && currentText === "") {
//         setIsDeleting(false);
//         setCurrentIndex((prev) => (prev + 1) % titles.length);
//       }
//     }, typeSpeed);

//     return () => clearTimeout(type);
//   }, [currentText, isDeleting, currentIndex]);

//   return (
//     <section className={styles.hero}>
//       <div className={styles.left}>
//         <h4 className={styles.smallTitle}>WELCOME TO MY WEB DEVELOPMENT UNIVERSE!</h4>
//         <h1 className={styles.bigTitle}>
//           Hi, I’m <span className={styles.highlight}>Karan Bavarva</span><br />
//           a <span className={styles.autoHighlight}>{currentText}</span>
//         </h1>
//         <p className={styles.description}>
//           Crafting dynamic web solutions with Laravel, PHP, Node.js, and React. 
//           Full stack developer dedicated to building seamless digital experiences.
//           Let's collaborate and bring your ideas to life!
//         </p>

//         <div className={styles.linksRow}>
//           <div>
//             <h5>FIND WITH ME</h5>
//             <div className={styles.skillIcons}>
//               <a href="https://github.com"><FaGithub color="#181717" /></a>
//               <a href="https://github.com"><FaLinkedin color="#0A66C2" /></a>
//               <a href="https://github.com"><FaStackOverflow color="#F58025" /></a>
//             </div>
//           </div>
//           <div>
//             <h5>BEST SKILL ON</h5>
//             <div className={styles.skillIcons}>
//               <SiLaravel color="#FF2D20" />
//               <SiNodedotjs color="#339933" />
//               <SiReact color="#61DAFB" />
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className={styles.right}>
//         <img src={profileImage} alt="Profile illustration" />
//       </div>
//     </section>
//   );
// }







import React, { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import profileImage from "../assets/Karan.png";

import { FaGithub, FaLinkedin, FaStackOverflow, FaEnvelope } from "react-icons/fa";
import { SiLaravel, SiNodedotjs, SiReact } from "react-icons/si";

export default function Home() {
  const titles = ["Laravel Artisan.", "React Wizard.", "Node.js Ninja."];
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[currentIndex];
    let typeSpeed = isDeleting ? 50 : 100;

    const type = setTimeout(() => {
      setCurrentText(prev =>
        isDeleting
          ? currentTitle.substring(0, prev.length - 1)
          : currentTitle.substring(0, prev.length + 1)
      );

      if (!isDeleting && currentText === currentTitle) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % titles.length);
      }
    }, typeSpeed);

    return () => clearTimeout(type);
  }, [currentText, isDeleting, currentIndex]);

  return (
    <section className={styles.hero}>
      <div className={styles.left}>
        <h4 className={styles.smallTitle}>WELCOME TO MY WEB DEVELOPMENT UNIVERSE!</h4>
        <h1 className={styles.bigTitle}>
          Hi, I’m <span className={styles.highlight}>Karan Bavarva</span><br />
          a <span className={styles.autoHighlight}>{currentText}</span>
        </h1>
        <p className={styles.description}>
          Crafting dynamic web solutions with Laravel, PHP, Node.js, and React. 
          Full stack developer dedicated to building seamless digital experiences.
          Let's collaborate and bring your ideas to life!
        </p>

        <div className={styles.linksRow}>
          <div>
            <h5>FIND WITH ME</h5>
            <div className={styles.skillIcons}>
              {/* <a href="https://github.com/Karan-Bavarva"><FaGithub color="#181717" /></a>
              <a href="https://www.linkedin.com/in/karan-bavarva/"><FaLinkedin color="#0A66C2" /></a>
              <a href="https://github.com"><FaStackOverflow color="#F58025" /></a> */}
               <a href="https://github.com/Karan-Bavarva" target="_blank" rel="noopener noreferrer">
                <FaGithub color="#181717" />
              </a>
              <a href="https://www.linkedin.com/in/karan-bavarva/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin color="#0A66C2" />
              </a>
              {/* <a href="https://stackoverflow.com/users/your-id" target="_blank" rel="noopener noreferrer">
                <FaStackOverflow color="#F58025" />
              </a> */}
              <a href="mailto:karan.bavarva@example.com">
                <FaEnvelope color="#EA4335" />   {/* 👈 red email icon */}
              </a>
            </div>
          </div>
          <div>
            <h5>BEST SKILL ON</h5>
            <div className={styles.skillIcons}>
              <SiLaravel color="#FF2D20" />
              <SiNodedotjs color="#339933" />
              <SiReact color="#61DAFB" />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.right}>
        {/* responsive class added */}
        <img src={profileImage} alt="Profile illustration" className={styles.heroImg} />
      </div>
    </section>
  );
}
