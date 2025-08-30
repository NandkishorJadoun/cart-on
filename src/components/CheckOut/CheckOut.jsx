import { Link } from "react-router-dom";
import { Smile } from 'lucide-react';

function CheckOut() {
  return (
    <>
      <h2>Thanks for the purchase</h2>
      <Smile stroke="green" />
      <p>
        Hope you had a lovely time shopping here. I wish you will come back here
        again. Bye! 🥹
      </p>
      <button>
        <Link to={"/"}>GO TO HOME</Link>
      </button>
    </>
  );
}

export default CheckOut;
