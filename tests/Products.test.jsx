import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import routes from "../src/routes";
import userEvent from "@testing-library/user-event";

describe("Product Component", () => {
  const router = createMemoryRouter(routes);

  it("should render the product component", async () => {
    const user = userEvent.setup();
    render(<RouterProvider router={router} />);

    const button = screen.getByRole("button", { name: "START SHOPPING" });

    await user.click(button);

    expect(screen.getByRole("paragraph").textContent).toMatch(/loading.../i);
  });
});
