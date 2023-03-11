import Image from "next/image";

import styles from "./hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image
          src="/images/test.jpg"
          alt="An image showing Faris Firdaus A."
          width={300}
          height={300}
        />
      </div>

      <h1 className="">Hi, I'am Faris Firdaus Ariputra</h1>

      <p className="">
        This blog about web development - especially frontend frameworks likes
        Angular or React
      </p>
    </section>
  );
}
