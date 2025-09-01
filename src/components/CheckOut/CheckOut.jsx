import { useNavigate } from "react-router-dom";
import { Smile } from "lucide-react";
import styles from "./CheckOut.module.css";

function CheckOut() {
  const navigate = useNavigate();
  return (
    <div className={styles.checkout}>
      <h2>Thanks for the purchase</h2>
      <Smile size={100} stroke="green" />
      <p>
        Hope you had a lovely time shopping here. I wish you will come back here
        again. Bye! 🥹
      </p>
      <button onClick={() => navigate("/")}>GO TO HOME</button>
    </div>
  );
}

export default CheckOut;
