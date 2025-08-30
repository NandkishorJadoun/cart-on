import { useOutletContext } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";

function Products() {
  const [cartItems, setCartItems, products, error, loading] =
    useOutletContext();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered</p>;

  return (
    <>
      <h2>Products</h2>
      <div>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            cartItems={cartItems}
            setCartItems={setCartItems}
            {...product}
          />
        ))}
      </div>
    </>
  );
}

export default Products;
