import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/Home.module.css"

export default function Home() {
  return (
    <>
      <Head>
        <title>Cat List | Home</title>
        <meta name="keywords" content="cats" />
      </Head>
      <div>
        <h1 className={styles.title}>Home Page</h1>
        <p className={styles.text}>Lorem ipsum</p>
        <Link href="/cats" className={styles.btn}>See Cat Listings</Link>
      </div>
    </>
  );
}
