import React from "react";
import {render, screen} from "@testing-library/react";

import Header from "./index";

describe("Header", () => {
  beforeEach(() => {
    render(<Header />);
  });
  describe("shows content in Header component", () => {
    it("should render the logo", () => {
      expect(screen.getByAltText("Basement")).toBeInTheDocument();
    });
    it("should render the image", () => {
      expect(screen.getByAltText("basement supply")).toBeInTheDocument();
    });
    it("should render the marquee", () => {
      expect(screen.getByTestId("marquee")).toBeInTheDocument();
    });
    it("should render the asterisk1", () => {
      expect(screen.getByAltText("asterisk-image")).toBeInTheDocument();
    });
    it("should render the asterisk2", () => {
      expect(screen.getByAltText("asterisk-image2")).toBeInTheDocument();
    });
  });

  describe("shows a Cart button", () => {
    it("should render the cart button", () => {
      expect(screen.getByRole("button", {name: "cart button"})).toBeInTheDocument();
    });
    it("should render the item in cart count", () => {
      expect(screen.getByText(`cart (0)`)).toBeInTheDocument();
    });
  });
});
