import styles from "@/styles/Cats.module.css";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: { cats: data },
  };
};

const Cats = ({ cats }) => {
  return (
    <div>
      <h1>All Cats</h1>
      {cats.map((cat) => (
        <Link href={'/cats/' + cat.id} key={cat.id} className={styles.single}>
            <h3>{cat.name}</h3>
        </Link>
      ))}
    </div>
  );
};

export default Cats;
