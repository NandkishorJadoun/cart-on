import { vi, describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ProductCard from "../src/components/ProductCard/ProductCard";

const mockData = {
  id: 1,
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
  price: 109.95,
  rating: 3.9,
  title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
};

describe("ProductCard Component", () => {
  it("renders product details", () => {
    const setCartItems = vi.fn();

    render(
      <ProductCard cartItems={[]} setCartItems={setCartItems} {...mockData} />
    );

    expect(screen.getByText(mockData.title)).toBeInTheDocument();
    expect(screen.getByText(`$ ${mockData.price}`)).toBeInTheDocument();
    expect(screen.getByText(mockData.rating)).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute("src", mockData.image);
  });
});
