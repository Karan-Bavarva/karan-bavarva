import React from "react";
import styles from "../styles/About.module.css";

export default function About() {
    return (
        <section className={styles.aboutSection}>
            {/* My Expertise Section */}
            <h2 className={styles.subTitle}>My Expertise</h2>
            <div className={styles.expertiseGrid}>
                <div className={styles.expertiseCard}>
                    <div className={styles.expertiseIcon}>⬆️</div>
                    <h3>API Development</h3>
                    <p>Creating robust and scalable application programming interfaces.</p>
                </div>

                <div className={styles.expertiseCard}>
                    <div className={styles.expertiseIcon}>🗄️</div>
                    <h3>Database Management</h3>
                    <p>Designing efficient database structures and optimizing queries.</p>
                </div>

                <div className={styles.expertiseCard}>
                    <div className={styles.expertiseIcon}>💻</div>
                    <h3>Backend Development</h3>
                    <p>Building robust server-side architecture and database systems.</p>
                </div>

                <div className={styles.expertiseCard}>
                    <div className={styles.expertiseIcon}>🖥️</div>
                    <h3>Server Configuration</h3>
                    <p>Setting up and maintaining server environments for optimal performance.</p>
                </div>

                <div className={styles.expertiseCard}>
                    <div className={styles.expertiseIcon}>⚙️</div>
                    <h3>Performance Optimization</h3>
                    <p>Fine-tuning backend code and infrastructure for speed and efficiency.</p>
                </div>

                <div className={styles.expertiseCard}>
                    <div className={styles.expertiseIcon}>📊</div>
                    <h3>Data Processing</h3>
                    <p>Developing algorithms and scripts for data manipulation and analysis.</p>
                </div>
            </div>

            {/* What I'm Doing Section */}
            <h2 className={styles.subTitle}>What I'm Doing</h2>
            <div className={styles.servicesGrid}>
                <div className={styles.serviceCard}>
                    <div className={styles.icon}>🎨</div>
                    <h3>Web Design</h3>
                    <p>The most modern and high-quality design made at a professional level.</p>
                </div>

                <div className={styles.serviceCard}>
                    <div className={styles.icon}>💻</div>
                    <h3>Web Development</h3>
                    <p>High-quality development of sites at the professional level.</p>
                </div>

                <div className={styles.serviceCard}>
                    <div className={styles.icon}>⚙️</div>
                    <h3>Performance Optimization</h3>
                    <p>Fine-tuning backend code and infrastructure for speed and efficiency.</p>
                </div>

                <div className={styles.serviceCard}>
                    <div className={styles.icon}>🗄️</div>
                    <h3>Database Management</h3>
                    <p>Designing efficient database structures and optimizing queries.</p>
                </div>

                <div className={styles.serviceCard}>
                    <div className={styles.icon}>📱</div>
                    <h3>Server Configuration</h3>
                    <p>Setting up and maintaining server environments for optimal performance.</p>
                </div>

                <div className={styles.serviceCard}>
                    <div className={styles.icon}>🧮</div>
                    <h3>Data Processing</h3>
                    <p>Developing algorithms and scripts for data manipulation and analysis.</p>
                </div>
            </div>
        </section>
    );
}
