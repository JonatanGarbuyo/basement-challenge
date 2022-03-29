import React from "react";
import {fireEvent, render, screen} from "@testing-library/react";

import useCart from "../../hooks/useCart";
import mockProduct from "../../test/__mocks__/mockProduct";

import AddToCart from "./index";

jest.mock("../../hooks/useCart");

const mockUseCart = {
  addItem: jest.fn(),
};

useCart.mockReturnValue(mockUseCart);

describe("AddToCart", () => {
  beforeEach(() => {
    render(<AddToCart product={mockProduct} />);
  });

  describe("shows a button to add a product to cart", () => {
    it("should render the button", () => {
      expect(screen.getByRole("button", {name: "add to cart"})).toBeInTheDocument();
    });
    it("should call a function to add 1 product to cart when button is clicked", () => {
      const spyAddItem = jest.spyOn(mockUseCart, "addItem");

      expect(spyAddItem).not.toBeCalled();
      fireEvent.click(screen.getByRole("button"));
      expect(spyAddItem).toBeCalledTimes(1);
    });
  });
});
