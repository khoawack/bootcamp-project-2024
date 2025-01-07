import React from 'react';
import style from './portfolio.module.css';


const PortfolioPage: React.FC = () => {
    return (
      <>
        <main className={style.main}>
          <h1 className={style.pageTitle}>Portfolio</h1>
          <div className={style.project}>
            <img
              src="https://wpvip.edutopia.org/wp-content/uploads/2022/10/robinson-169hero-portfolio-shutterstock.jpg?w=2880&quality=85"
              className={style.projectImage}
              alt="image of cal poly"
            />
            <div className={style.projectDetails}>
              <h1 className={style.projectName}>Personal Website</h1>
              <p className={style.projectDescription}>
                Made a personal website following Hack4Impact starter pack.
              </p>
              <a href="/" className={style.projectLink}>Learn More</a>
            </div>
          </div>
        </main>
  
        <footer className={style.footer}>
          © 2023 Khoa's Website | All Rights Reserved
        </footer>
      </>
    );
  };
  
  export default PortfolioPage;