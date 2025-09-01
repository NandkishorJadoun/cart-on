import { useNavigate } from "react-router-dom";
import hero from "/hero.webp";
import styles from "./Home.module.css";

function Home() {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div>
        <h2>Welcome to CartOn</h2>
        <p>
          This is a fake store which has items fetched through the fake store
          api. This site isn't real. This is just a filler text for the landing
          page of this project.
        </p>
        <button onClick={() => navigate("/products")}>START SHOPPING</button>
      </div>
      <img src={hero} alt="" width={640} />
    </div>
  );
}

export default Home;
