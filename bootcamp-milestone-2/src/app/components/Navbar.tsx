import React from "react";
import style from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className={style.header}>
      <nav className={style.navbar}> {/* Use style.navbar for the nav element */}
        <h1 className={style.logo}> {/* Use style.logo for the logo class */}
          <Link href="/">personal website</Link>
        </h1>
        <ul className={style.navList}> {/* Use style.navList for the list */}
          <li><Link href="/">Home</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/portfolio">Portfolio</Link></li>
          <li><Link href="/resume">Resume</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}
