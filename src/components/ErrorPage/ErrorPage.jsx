import { Link } from "react-router-dom";
import { ShieldAlert } from 'lucide-react';
import styles from "./ErrorPage.module.css"

const ErrorPage = () => {
  return (
    <div className={styles.error}>
      <ShieldAlert  size={100} stroke="red" />
      <h1>Oh no, this route doesn't exist!</h1>
      <Link to="/">
        You can go back to the home page by clicking here, though!
      </Link>
    </div>
  );
};

export default ErrorPage;
