
import React from "react";
import styles from "../styles/About.module.css";

export default function About() {
    return (
        <section className={styles.aboutSection}>
            <h1 className={styles.aboutTitle}>About Me</h1>

            <p className={styles.aboutText}>
                I'm Creative Director and Full Stack Developer from Gujarat, INDIA, working in web development.
                I enjoy turning complex problems into simple, beautiful, and intuitive designs.
            </p>

            <p className={styles.aboutText}>
                Crafting dynamic web solutions with Laravel, PHP, Node.js, and React. Full stack developer
                dedicated to building seamless digital experiences. Let's collaborate and bring your ideas to life.
            </p>

            <p className={styles.aboutText}>
                I add a personal touch to your product and make sure that it is eye-catching and easy to use.
                I aim to bring across your message and identity in the most creative way. I’ve created web designs
                for some famous brand companies.
            </p>

            
        </section>
    );
}
