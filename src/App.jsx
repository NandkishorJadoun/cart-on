import { Outlet, Link } from "react-router-dom";
import useFetch from "./hooks/useFetch";
import { useState } from "react";

function App() {
  const [products, error, loading] = useFetch();
  const [cartItems, setCartItems] = useState([]);

  return (
    <>
      <header>
        <h1>
          <Link to={"/"}>CartOn</Link>
        </h1>
        <nav>
          <button>
            <Link to={"/products"}>Products</Link>
          </button>
          <button>
            <Link to={"/cart"}>Cart</Link>
          </button>
        </nav>
      </header>
      <hr />
      <Outlet
        context={[cartItems, setCartItems, products, error, loading]}
      ></Outlet>
      <hr />
      <footer>Made with ❤️ by Nandkishor</footer>
    </>
  );
}

export default App;
