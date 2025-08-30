import { Link } from "react-router-dom";

function CheckOut() {
  return (
    <div>
      <h1>Thanks for the purchase</h1>
      <p>Image</p>
      <p>
        Hope you had a lovely time shopping here. I wish you will come back here
        again. Bye! 🥹
      </p>
      <button>
        <Link to={"/"}>GO TO HOME</Link>
      </button>
    </div>
  );
}

export default CheckOut;
