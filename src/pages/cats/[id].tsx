export const getStaticPaths = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  const paths = data.map((cat) => {
    return {
      params: { id: cat.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users/" + id
  );
  const data = await response.json();

  return {
    props: { cat: data },
  };
};

const Details = ({ cat }) => {
  return (
    <div>
      <h1>{cat.name}</h1>
      <p>{cat.email}</p>
      <p>{cat.website}</p>
      <p>{cat.address.city}</p>
    </div>
  );
};

export default Details;
