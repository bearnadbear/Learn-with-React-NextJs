import Image from "next/image";

import styles from "./hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image
          src="/images/site/test.jpg"
          alt="An image showing Bearnadbear"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Faris Firdaus Ariputra</h1>
      <p>
        I blog about web development - especially frontend frameworks like
        Angular or React.
      </p>
    </section>
  );
}
