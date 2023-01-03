import HeadComponent from "../src/components/head/head";
import { Header } from "../src/components/header/header";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <HeadComponent />
      <div className={styles.mainContainer}>
        <main className={styles.contentGrid}>
          <section className={styles.projectIntro}>
            <h5 className={styles.mobileHeaderF}>So, you want to travel to</h5>
            <h1 className={styles.mobileHeader}>Space</h1>
            <p>
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </section>
          <aside className={styles.aside}>
            <button className={styles.homeMainButton}>Explore</button>
          </aside>
        </main>
      </div>
    </>
  );
}
