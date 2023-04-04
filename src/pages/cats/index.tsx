import styles from "@/styles/Cats.module.css";

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
        <div key={cat.id}>
          <a className={styles.single}>
            <h3>{cat.name}</h3>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Cats;
