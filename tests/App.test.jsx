import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import routes from "../src/routes";

describe("App component", () => {
  const router = createMemoryRouter(routes);

  it("should render the page", () => {
    render(<RouterProvider router={router} />);
    expect(screen.getByRole("banner")).toBeInTheDocument();
    expect(screen.getByRole("main")).toBeInTheDocument();
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });

  it("should render the home page by default", () => {
    render(<RouterProvider router={router} />);
    expect(
      screen.getByRole("heading", { name: "Welcome to CartOn" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "START SHOPPING" })
    ).toBeInTheDocument();
  });
});
