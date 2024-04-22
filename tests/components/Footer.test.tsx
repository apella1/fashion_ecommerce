import { render, screen } from "@testing-library/react";
import Footer from "../../src/components/Footer";

describe("Footer", () => {
  it("should render the footer with an heading", () => {
    render(<Footer />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("Footer");
  });
});
