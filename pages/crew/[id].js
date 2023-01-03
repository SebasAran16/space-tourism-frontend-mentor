import React, { useEffect } from "react";
import styles from "/styles/Crew.module.css";
import Image from "next/image";
import Link from "next/link";

export default function CrewPage({ member, name }) {
  const imagePath = member.images.png.replace(".", "");

  useEffect(() => {
    const points = document.querySelectorAll(".Crew_chooser__V697_");
    points.forEach((point) => {
      if (point.id == name) {
        point.setAttribute(
          "class",
          "Crew_chooser__V697_ Crew_currentChooser___12an"
        );
      } else {
        point.removeAttribute("class");
        point.setAttribute("class", "Crew_chooser__V697_");
      }
    });
  });

  return (
    <div className={styles.mainContainer}>
      <div className={styles.destPick}>
        <h5 className={styles.pickNumber}>02</h5>
        <h5 className={styles.mCrew}>Meet your crew</h5>
      </div>
      <section className={styles.crewContainer}>
        <div className={styles.imgLine}>
          <Image
            className={styles.memImage}
            src={imagePath}
            priority
            alt={`${member.name} Image`}
            width={250}
            height={270}
          ></Image>
        </div>
        <div className={styles.destinationsChooser}>
          <Link
            id="douglas-hurley"
            className={styles.chooser}
            href="/crew/douglas-hurley"
          ></Link>
          <Link
            id="mark-shuttleworth"
            className={styles.chooser}
            href="/crew/mark-shuttleworth"
          ></Link>
          <Link
            id="victor-glover"
            className={styles.chooser}
            href="/crew/victor-glover"
          ></Link>
          <Link
            id="anousheh-ansari"
            className={styles.chooser}
            href="/crew/anousheh-ansari"
          ></Link>
        </div>
        <div className={styles.memDescription}>
          <div className={styles.memInfo}>
            <h4 className={styles.role}>{member.role}</h4>
            <h3 className={styles.memName}>{member.name}</h3>
          </div>
          <p>{member.bio}</p>
        </div>
      </section>
    </div>
  );
}

export async function getStaticPaths() {
  const { crew } = await import("/data/data.json");
  const allPaths = crew.map((mem) => {
    const name = mem.name.toLowerCase().replaceAll(" ", "-");
    return {
      params: {
        id: name,
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
  const { crew } = await import("/data/data.json");
  const memberData = crew.find(
    (mem) => mem.name.toLowerCase().replaceAll(" ", "-") == id.toString()
  );
  return {
    props: { member: memberData, name: id },
  };
}
