import React from "react";
import {render} from "@testing-library/react";

import Footer from "./index";

describe("Footer", () => {
  test("should render content in component Footer", async () => {
    const {getByAltText} = render(<Footer />);
    const image = getByAltText("wear everyday");

    expect(image).toBeVisible();
  });
});
