"use client";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import Link from "next/link";
const NavbarComponent = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScroll(position);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`${styles.header} ${scroll ? styles.shadow : ""}`}>
      <div className={styles.navbar}>
        <Link className={styles.head} href={"#"}>
          <div className={`${styles.headerLogo} rounded-full`}>AK</div>
          <h5 className={styles.headerText}>Aytuhan Kazandırmak</h5>
        </Link>

        <nav>
          <ul className={styles.navigations}>
            <li>
              <Link className={styles.navigation} href="#about">
                About
              </Link>
            </li>
            <li>
              <Link className={styles.navigation} href="#projects">
                Projects
              </Link>
            </li>
            <li>
              <Link className={styles.navigation} href="#contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavbarComponent;
