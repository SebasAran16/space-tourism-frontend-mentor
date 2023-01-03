import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "/styles/Technology.module.css";

export default function TechnologyPage({ devInfo, id }) {
  const [imagePath, setImagePath] = useState("");

  useEffect(() => {
    let width = window.screen.width;
    let img = document.querySelector(".Technology_devImg__n5GlC");
    if (width >= 992) {
      setImagePath(devInfo.images.portrait.substring(1));
      // img.setAttribute("src", imagePath);
      img.src = imagePath;
    } else {
      setImagePath(devInfo.images.landscape.substring(1));
      img.setAttribute("src", imagePath);
    }
    const choosers = document.querySelectorAll(".Technology_chooser__pVk0s");
    choosers.forEach((chooser) => {
      if (chooser.id == id) {
        chooser.setAttribute(
          "class",
          "Technology_chooser__pVk0s Technology_currentChooser__iRFDU"
        );
      } else {
        chooser.removeAttribute("class");
        chooser.setAttribute("class", "Technology_chooser__pVk0s");
      }
    });
  });

  return (
    <div className={styles.mainContainer}>
      <div className={styles.title}>
        <h5 className={styles.titleNumber}>03</h5>
        <h5 className={styles.tContent}>Space Launch 101</h5>
      </div>
      <section className={styles.techContainer}>
        <div className={styles.techContent}>
          <Image
            className={styles.devImg}
            src={
              imagePath ||
              "/assets/technology/image-launch-vehicle-portrait.jpg"
            }
            alt={`${devInfo.name} Image`}
            priority
            width={300}
            height={200}
          ></Image>
          <div className={styles.destinationsChooser}>
            <Link
              id="launch-vehicle"
              className={`${styles.chooser} ${styles.currentChooser}`}
              href="/technology/launch-vehicle"
            >
              1
            </Link>
            <Link
              id="spaceport"
              className={styles.chooser}
              href="/technology/spaceport"
            >
              2
            </Link>
            <Link
              id="space-capsule"
              className={styles.chooser}
              href="/technology/space-capsule"
            >
              3
            </Link>
          </div>
          <div className={styles.devDescription}>
            <div className={styles.devInfo}>
              <h4 className={styles.terminology}>The Terminology</h4>
              <h3 className={styles.devName}>{devInfo.name}</h3>
            </div>
            <p>{devInfo.description}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export async function getStaticPaths() {
  const { technology } = await import("/data/data.json");
  const allPaths = technology.map((tec) => {
    return {
      params: {
        id: tec.name.toLowerCase().replaceAll(" ", "-"),
      },
    };
  });
  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context.params.id;
  const { technology } = await import("/data/data.json");
  const devInfo = technology.find(
    (dev) => dev.name.toLowerCase().replaceAll(" ", "-") == id
  );
  return {
    props: {
      devInfo,
      id,
    },
  };
}
