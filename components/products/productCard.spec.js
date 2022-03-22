import React from "react";
import {render} from "@testing-library/react";

import ProductCard from "./productCard";
import "../../test/__mocks__/intersectionObserverMock";

describe("ProductCard", () => {
  let spectedProps;

  beforeEach(() => {
    spectedProps = {
      id: "black-tshirt",
      image: "/products/shirt.png",
      price: 7.95,
      name: "Black t-shirt",
      description: "Unisex Basic Softstyle T-Shirt",
      options: [
        {
          label: "size",
          values: ["S", "M", "L", "XL"],
        },
      ],
    };
  });

  test("should render content in component ProductCard", async () => {
    const {getByText, getByAltText} = render(<ProductCard product={spectedProps} />);
    const name = getByText(spectedProps.name);
    const price = getByText("$" + spectedProps.price);
    const image = getByAltText(spectedProps.name);

    expect(name).toBeVisible();
    expect(price).toBeVisible();
    expect(image).toBeVisible();
  });
});
