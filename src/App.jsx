import { Outlet, Link } from "react-router-dom";
import useFetch from "./hooks/useFetch";
import { useState } from "react";
import { Handbag } from "lucide-react";

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
          <Link to={"/products"}>Products</Link>
          <Link to={"/cart"}>
            <Handbag />
            {cartItems.length > 0 && <span>{cartItems.length}</span>}
          </Link>
        </nav>
      </header>
      <main>
        <Outlet
          context={[cartItems, setCartItems, products, error, loading]}
        ></Outlet>
      </main>
      <footer>Made with ❤️ by Nandkishor</footer>
    </>
  );
}

export default App;
