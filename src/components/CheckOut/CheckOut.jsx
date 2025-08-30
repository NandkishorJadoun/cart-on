import { Link } from "react-router-dom";

function CheckOut() {
  return (
    <>
      <h2>Thanks for the purchase</h2>
      <p>Image</p>
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
