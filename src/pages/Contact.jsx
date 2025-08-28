// import React, { useState } from "react";
// import styles from "../styles/Contact.module.css";


// const Contact = () => {
//   const [submitted, setSubmitted] = useState(false);
//   const [error, setError] = useState("");

//   return (
//     <main className={styles.contactSection}>
//       <h1 className={styles.title}>Let's Talk</h1>
//       <p className={styles.subtitle}>
//         Have a project or idea? We’d love to collaborate with you.
//       </p>

//       <div className={styles.container}>
//         {/* Contact Form */}
//         {!submitted ? (
//           <form
//             action="https://formsubmit.co/ajax/yupdate630@gmail.com"
//             method="POST"
//             className={styles.form}
//             onSubmit={(e) => {
//               e.preventDefault();
//               setError("");
//               const form = e.target;

//               fetch(form.action, {
//                 method: "POST",
//                 body: new FormData(form),
//               })
//                 .then((response) => {
//                   if (response.ok) {
//                     setSubmitted(true);
//                     form.reset();
//                   } else {
//                     setError("Something went wrong. Please try again.");
//                   }
//                 })
//                 .catch(() => {
//                   setError("Something went wrong. Please try again.");
//                 });
//             }}
//           >
//             <input type="hidden" name="_captcha" value="false" />

//             <input
//               type="text"
//               name="name"
//               placeholder="Your Name"
//               required
//             />

//             <input
//               type="email"
//               name="email"
//               placeholder="Your Email"
//               required
//             />

//             <textarea
//               name="message"
//               placeholder="Your Message"
//               rows="6"
//               required
//             />

//             <button type="submit">Send Message</button>

//             {error && <p className={styles.error}>{error}</p>}
//           </form>
//         ) : (
//           <div className={styles.success}>
//             <h2>Thank You!</h2>
//             <p>Your message has been sent successfully. We'll be in touch soon.</p>
//           </div>
//         )}

//         {/* Google Map */}
//         <div className={styles.mapContainer}>
//           <iframe
//             title="Pankow Berlin Location"
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2427.4843709099213!2d13.40020281601388!3d52.569646779805055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84fda4a84099d%3A0x7c8df8bc99e1190c!2sPankow%2C%20Berlin%2C%20Germany!5e0!3m2!1sen!2sus!4v1690597333555!5m2!1sen!2sus"
//             width="100%"
//             height="100%"
//             style={{ border: 0 }}
//             allowFullScreen=""
//             loading="lazy"
//             referrerPolicy="no-referrer-when-downgrade"
//           />
//         </div>
//       </div>
//     </main>
//   );
// };

// export default Contact;






// import React, { useState } from 'react';
// import styles from "../styles/Contact.module.css";

// const Contact = () => {
//   const [submitted, setSubmitted] = useState(false);

//   return (
//     <main className={styles.contactSection}>
//       <h1 className={styles.title}>Let's Talk</h1>

//       <div className={styles.container}>
//         {/* Contact Form */}
//         <div className={styles.form}>
//           {!submitted ? (
//             <form
//               action="https://formsubmit.co/ajax/yupdate630@gmail.com"
//               method="POST"
//               onSubmit={(e) => {
//                 e.preventDefault();
//                 const form = e.target;

//                 fetch(form.action, {
//                   method: 'POST',
//                   body: new FormData(form),
//                 })
//                   .then((response) => {
//                     if (response.ok) {
//                       setSubmitted(true);
//                     } else {
//                       alert('Something went wrong. Please try again.');
//                     }
//                   })
//                   .catch(() => {
//                     alert('Something went wrong. Please try again.');
//                   });
//               }}
//             >
//               <input type="hidden" name="_captcha" value="false" />

//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Your Name"
//                 required
//                 className={styles.input}
//               />

//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Your Email"
//                 required
//                 className={styles.input}
//               />

//               <textarea
//                 name="message"
//                 placeholder="Your Message"
//                 rows="6"
//                 required
//                 className={styles.textarea}
//               />

//               <button type="submit" className={styles.button}>
//                 Send Message
//               </button>
//             </form>
//           ) : (
//             <div className={styles.success}>
//               <h2>Thank You!</h2>
//               <p>Your message has been sent successfully. We'll be in touch soon.</p>
//             </div>
//           )}
//         </div>

//         {/* Google Map */}
//         <div className={styles.mapContainer}>
//           <iframe
//             title="Pankow Berlin Location"
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2427.4843709099213!2d13.40020281601388!3d52.569646779805055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84fda4a84099d%3A0x7c8df8bc99e1190c!2sPankow%2C%20Berlin%2C%20Germany!5e0!3m2!1sen!2sus!4v1690597333555!5m2!1sen!2sus"
//             width="100%"
//             height="100%"
//             style={{ border: 0 }}
//             allowFullScreen=""
//             loading="lazy"
//             referrerPolicy="no-referrer-when-downgrade"
//           />
//         </div>
//       </div>
//     </main>
//   );
// };

// export default Contact;







// import React, { useState } from 'react';
// import styles from "../styles/Contact.module.css";

// const Contact = () => {
//   const [submitted, setSubmitted] = useState(false);

//   return (
//     <main className={styles.contactSection}>
//       <h1 className={styles.title}>Let's Talk</h1>

//       <div className={styles.container}>
//         {/* Contact Form */}
//         <div className={styles.form}>
//           {!submitted ? (
//             <form
//               action="https://formsubmit.co/ajax/yupdate630@gmail.com"
//               method="POST"
//               onSubmit={(e) => {
//                 e.preventDefault();
//                 const form = e.target;

//                 fetch(form.action, {
//                   method: 'POST',
//                   body: new FormData(form),
//                 })
//                   .then((response) => {
//                     if (response.ok) {
//                       setSubmitted(true);
//                     } else {
//                       alert('Something went wrong. Please try again.');
//                     }
//                   })
//                   .catch(() => {
//                     alert('Something went wrong. Please try again.');
//                   });
//               }}
//             >
//               <input type="hidden" name="_captcha" value="false" />

//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Your Name"
//                 required
//                 className={styles.input}
//               />

//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Your Email"
//                 required
//                 className={styles.input}
//               />

//               <textarea
//                 name="message"
//                 placeholder="Your Message"
//                 rows="6"
//                 required
//                 className={styles.textarea}
//               />

//               <button type="submit" className={styles.button}>
//                 Send Message
//               </button>
//             </form>
//           ) : (
//             <div className={styles.success}>
//               <h2>Thank You!</h2>
//               <p>Your message has been sent successfully. We'll be in touch soon.</p>
//             </div>
//           )}
//         </div>

//         {/* Google Map */}
//         <div className={styles.mapContainer}>
//           <iframe
//             title="Pankow Berlin Location"
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2427.4843709099213!2d13.40020281601388!3d52.569646779805055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84fda4a84099d%3A0x7c8df8bc99e1190c!2sPankow%2C%20Berlin%2C%20Germany!5e0!3m2!1sen!2sus!4v1690597333555!5m2!1sen!2sus"
//             width="100%"
//             height="100%"
//             style={{ border: 0 }}
//             allowFullScreen=""
//             loading="lazy"
//             referrerPolicy="no-referrer-when-downgrade"
//           />
//         </div>
//       </div>
//     </main>
//   );
// };

// export default Contact;







import React from "react";
import "./Contact.css";

import profileImage from "../assets/contact1.png"; // keep your image

export default function Contact() {
  return (
    <main className="cp-page" role="main">
      {/* Header */}
      <header className="cp-hero">
        <h1 className="cp-title">Contact With Me</h1>
      </header>

      {/* Grid */}
      <section className="cp-grid" aria-label="Contact details and map">
        {/* Card: Details */}
        <article className="cp-card">
          <figure className="cp-media">
            <img src={profileImage} alt="Handshake / profile header" className="cp-img" />
          </figure>

          <h2 className="cp-name">Karan Bavarva</h2>
          <p className="cp-role">Web Artisan</p>

          <p className="cp-text">
            Feel free to reach out to me through my account for a chat.
            Let&apos;s connect and discuss how we can collaborate.
          </p>

          <div className="cp-lines">
            <p><span className="cp-label">Phone:</span>{" "}
              <a href="tel:+4915560629586" className="cp-link">+49 15560629586</a>
            </p>
            <p><span className="cp-label">Email:</span>{" "}
              <a href="mailto:karanbavarva19@gmail.com" className="cp-link">karanbavarva19@gmail.com</a>
            </p>
          </div>

          <div className="cp-social">
            <span className="cp-findme">Find me</span>
            <nav className="cp-icons" aria-label="Social links">
              <a className="cp-icon" href="https://github.com/Karan-Bavarva" target="_blank" rel="noreferrer" aria-label="GitHub">
                <i className="fab fa-github" />
              </a>
              <a className="cp-icon" href="https://www.linkedin.com/in/karan-bavarva/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <i className="fab fa-linkedin" />
              </a>
              <a className="cp-icon" href="mailto:karanbavarva19@gmail.com" aria-label="Email">
                <i className="fas fa-envelope" />
              </a>
            </nav>
          </div>
        </article>

        {/* Card: Map */}
        <article className="cp-card cp-mapCard" aria-label="Location map">
          <div className="cp-mapWrap">
            <iframe
              title="Pankow, Berlin"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2429.597375874361!2d13.40495421580077!3d52.56945127982738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a852f79f9ebec5%3A0x42760fc4aa85b60!2sPankow%2C%20Berlin%2C%20Germany!5e0!3m2!1sen!2sde!4v1689702493901!5m2!1sen!2sde"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </article>
      </section>
    </main>
  );
}
