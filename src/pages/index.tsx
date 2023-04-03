import Footer from "@/comps/Footer";
import Navbar from "@/comps/Navbar";
import Link from "next/link";
import styles from "@/styles/Home.module.css"

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Home Page</h1>
      <p className={styles.text}>Lorem ipsum</p>
      <Link href="/cats" className={styles.btn}>See Cat Listings</Link>
    </div>
  );
}
