import React from "react";
import {render} from "@testing-library/react";

import Header from "./index";

describe("Header", () => {
  test("should render content in Header component", async () => {
    const {getByTestId, getByRole, getByAltText} = render(<Header />);

    const cartButton = getByRole("button");
    const marquee = getByTestId("marquee");
    const logo = getByAltText("Basement");
    const image = getByAltText("basement supply");
    const asterisk1 = getByAltText("asterisk-image");
    const asterisk2 = getByAltText("asterisk-image2");

    expect(cartButton).toBeVisible();
    expect(marquee).toBeVisible();
    expect(logo).toBeVisible();
    expect(image).toBeVisible();
    expect(asterisk1).toBeVisible();
    expect(asterisk2).toBeVisible();
  });
});
