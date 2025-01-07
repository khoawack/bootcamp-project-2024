import React from 'react';
import style from './resume.module.css';


const ResumePage: React.FC = () => {
    return (
        <main className={style.main}>
            <h1 className={style.pageTitle}>Resume</h1>

            <a href="/resume.pdf" className={style.downloadLink}>Download</a>

            <div className={style.resume}>
                <section className={style.section}> 
                    <h2 className={style.sectionTitle}>Education</h2>
                    <div className={style.entry}>
                        <h3 className={style.entryTitle}>Bachelor of Science in Software Engineering</h3>
                        California Polytechnic State University, San Luis Obispo | Expected Graduation June 2026
                    </div>
                </section>

                <section className={style.section}> 
                    <h2 className={style.sectionTitle}>Experience</h2> 
                    <div className={style.entry}>
                        <h3 className={style.entryTitle}>Internship 1</h3>
                        <ul className={style.experienceList}>
                            <li>worked on this</li>
                            <li>worked on that</li>
                        </ul>
                    </div>
                </section>

                <section className={style.section}> 
                    <h2 className={style.sectionTitle}>Projects</h2>
                    <div className={style.entry}>
                        <h3 className={style.entryTitle}>project 1</h3>
                        <ul> 
                            <li>worked on this</li>
                        </ul>

                        <h3 className={style.entryTitle}>project 2</h3>
                        <ul> 
                            <li>worked on this</li>
                            <li>worked on that</li>
                        </ul>
                    </div> 
                </section>

                <section className={style.section}> 
                    <h2 className={style.sectionTitle}>Coursework</h2>
                    <ul className={style.courseList}>
                        <li>Web Development</li>
                        <li>Introduction to Programming</li>
                        <li>Data Structures and Algorithms</li>
                    </ul>
                </section>

                <section className={style.section}> 
                    <h2 className={style.sectionTitle}>Skills</h2> 
                    <ul className={style.skillList}>
                        <li>Python</li>
                        <li>HTML & CSS</li>
                        <li>Javascript</li>
                        <li>C++</li>
                    </ul>
                </section>
            </div>
        </main>
    );
};

export default ResumePage;
