import { useState, useEffect } from "react";

const useFetch = () => {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://fakestoreapi.com/products", { signal })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((data) => {
        const filteredData = data.slice().map((prod) => {
          return {
            id: prod.id,
            title: prod.title,
            price: prod.price,
            rating: prod.rating.rate,
            image: prod.image,
          };
        });
        setProducts(filteredData);
      })
      .catch((error) => {
        if (error.name === "AbortError") {
          return;
        }
        setError(error);
      })
      .finally(() => {
        if (!signal.aborted) setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return [products, error, loading];
};

export default useFetch;
