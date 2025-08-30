import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <img src="#" alt="" />
      <h2>Welcome to CartOn</h2>
      <p>
        This is a fake store which has items fetched through the fake store api.
        This site isn't real. This is just a filler text for the landing page of
        this project.
      </p>
      <button>
        <Link to={"/products"}>START SHOPPING</Link>
      </button>
    </>
  );
}

export default Home;
