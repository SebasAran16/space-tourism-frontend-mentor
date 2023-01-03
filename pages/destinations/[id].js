import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "/styles/Destinations.module.css";

export default function DestinationsPage({ data, destination }) {
  const imagePath = data.images.png.replace(".", "");

  useEffect(() => {
    const choosers = document.querySelectorAll(".Destinations_chooser__j5vyP");
    choosers.forEach((chooser) => {
      if (chooser.innerHTML.toLowerCase() == destination) {
        chooser.setAttribute(
          "class",
          "Destinations_chooser__j5vyP Destinations_currentChooser__cQwvR"
        );
      } else {
        chooser.removeAttribute("class");
        chooser.setAttribute("class", "Destinations_chooser__j5vyP");
      }
    });
  });

  return (
    <div className={styles.mainContainer}>
      <div className={styles.destPick}>
        <h5 className={styles.pickNumber}>01</h5>
        <h5 className={styles.pickTitle}>Pick your destination</h5>
      </div>
      <section className={styles.destDescription}>
        <Image
          src={imagePath}
          width={200}
          priority
          height={200}
          alt={`${data.name} Image`}
        ></Image>
      </section>
      <section className={styles.destInfo}>
        <div className={styles.destinationsChooser}>
          <Link className={`${styles.chooser}`} href="/destinations/moon">
            Moon
          </Link>
          <Link className={styles.chooser} href="/destinations/mars">
            Mars
          </Link>
          <Link className={styles.chooser} href="/destinations/europa">
            Europa
          </Link>
          <Link className={styles.chooser} href="/destinations/titan">
            Titan
          </Link>
        </div>
        <h2>{data.name}</h2>
        <p>{data.description}</p>
        <div className={styles.infoContainer}>
          <div className={styles.infoItem}>
            <p className={styles.subH2}>Avg. Distance</p>
            <p className={styles.subH1}>{data.distance}</p>
          </div>
          <div className={styles.infoItem}>
            <p className={styles.subH2}>Est. Travel Time</p>
            <p className={styles.subH1}>{data.travel}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export async function getStaticPaths() {
  const { destinations } = await import("/data/data.json");
  const allPaths = destinations.map((dest) => {
    return {
      params: {
        id: dest.name.toLowerCase(),
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
  const { destinations } = await import("/data/data.json");
  const destinationData = destinations.find(
    (dest) => dest.name.toLowerCase() == id
  );
  return { props: { data: destinationData, destination: id } };
}
