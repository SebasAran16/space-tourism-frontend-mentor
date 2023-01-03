import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "/styles/Header.module.css";

export const Header = () => {
  const router = useRouter();

  const toggleNav = () => {
    const nav = document.querySelector("nav");
    nav.classList.toggle("Header_hiddenNav__llBhf");
    const burger = document.querySelector(".Header_burger__ISCur");
    burger.classList.toggle("Header_hiddenBurger__LLKHW");
  };

  const closeNav = () => {
    const nav = document.querySelector("nav");
    nav.classList.add("Header_hiddenNav__llBhf");
    const burger = document.querySelector(".Header_burger__ISCur");
    burger.classList.remove("Header_hiddenBurger__LLKHW");
  };

  // Header_currentNavItem__Ev9Nw
  useEffect(() => {
    const navItems = document.querySelectorAll(".Header_navItem__Mvcfc");
    navItems.forEach((item) => {
      const path = router.pathname;
      let usePath;

      if (path.lastIndexOf("/") == 0) {
        if (item.pathname == router.pathname) {
          item.classList.add("Header_currentNavItem__Ev9Nw");
        } else {
          item.classList.remove("Header_currentNavItem__Ev9Nw");
        }
      } else {
        const words = path.split("/");
        usePath = `/${words[1]}`;
        if (item.pathname.startsWith(usePath)) {
          item.classList.add("Header_currentNavItem__Ev9Nw");
        } else {
          item.classList.remove("Header_currentNavItem__Ev9Nw");
        }
      }
    });
  });

  return (
    <header className={styles.header}>
      {/* Unnecesary div */}
      <div className={styles.topBar}>
        <div className={styles.topLeft}>
          <Link href="/" onClick={closeNav}>
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
              <g fill="none" fillRule="evenodd">
                <circle cx="24" cy="24" r="24" fill="#FFF" />
                <path
                  fill="#0B0D17"
                  d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
                />
              </g>
            </svg>
            <hr className={styles.deskBar}></hr>
          </Link>
        </div>
        <div className="top-right">
          <svg
            onClick={toggleNav}
            className={styles.burger}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="21"
          >
            <g fill="#D0D6F9" fillRule="evenodd">
              <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" />
            </g>
          </svg>
          <nav id="navBar" className={`${styles.navBar} ${styles.hiddenNav}`}>
            <svg
              onClick={toggleNav}
              className={styles.crossNav}
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="21"
            >
              <g fill="#D0D6F9" fillRule="evenodd">
                <path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z" />
                <path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z" />
              </g>
            </svg>
            <Link href="/" className={styles.navItem} onClick={closeNav}>
              <p className={styles.navNumber}>00</p>
              <p className={styles.navDestination}>Home</p>
            </Link>
            <Link
              href="/destinations/moon"
              className={`${styles.navItem} ${styles.currentNavItem}`}
              onClick={closeNav}
            >
              <p className={styles.navNumber}>01</p>
              <p className={styles.navDestination}>Destination</p>
            </Link>
            <Link
              href="/crew/douglas-hurley"
              className={styles.navItem}
              onClick={closeNav}
            >
              <p className={styles.navNumber}>02</p>
              <p className={styles.navDestination}>Crew</p>
            </Link>
            <Link
              href="/technology/launch-vehicle"
              className={styles.navItem}
              onClick={closeNav}
            >
              <p className={styles.navNumber}>03</p>
              <p className={styles.navDestination}>Technology</p>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};
