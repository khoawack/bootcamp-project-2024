import Link from "next/link";
import React from 'react';
import style from './portfolio.module.css';
import connectDB from "../database/db";
import Project from "../database/portfolioSchema";

async function fetchProject() {
  await connectDB(); 

  try {
    console.log("Fetching from DB...");

    const project = await Project.find().sort({ date: -1 }).lean();
    return project;
  } catch (err) {
    console.error("Error fetching project:", err);
    return [];
  }
}

const PortfolioPage = async () => {
  const project = await fetchProject(); 
    return (
      <>
        <main className={style.main}>
          <h1 className={style.pageTitle}>Portfolio</h1>

          {project.length === 0 ? (
            <p>No projects found</p>
          ) : (
            project.map((project: any) => (
              <div key={project._id} className={style.project}>
              <img
                src={project.image}
                className={style.projectImage}
              />
              <div className={style.projectDetails}>
                <h1 className={style.projectName}>{project.title}</h1>
                <p className={style.projectDescription}>
                  {project.description}
                </p>
                <Link href={project.link}>
                    <h1>Learn More</h1>
                </Link>
              </div>
            </div>
            ))
          )}
        </main>
  
        <footer className={style.footer}>
          © 2023 Khoa's Website | All Rights Reserved
        </footer>
      </>
    );
  };
  
  export default PortfolioPage;