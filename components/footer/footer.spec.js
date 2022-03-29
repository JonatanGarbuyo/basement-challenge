import React from "react";
import {render, screen} from "@testing-library/react";

import Footer from "./index";

describe("Footer", () => {
  beforeEach(() => {
    render(<Footer />);
  });
  describe("should render content in component Footer", () => {
    it("should render the logo", () => {
      expect(screen.getByAltText("wear everyday")).toBeInTheDocument();
    });
  });
});
