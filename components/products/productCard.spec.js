import React from "react";
import {fireEvent, render, screen} from "@testing-library/react";

import "../../test/__mocks__/mockIntersectionObserver";

import mockProduct from "../../test/__mocks__/mockProduct";
import useCart from "../../hooks/useCart";

import ProductCard from "./productCard";

jest.mock("../../hooks/useCart");

const mockUseCart = {
  addItem: jest.fn(),
};

useCart.mockReturnValue(mockUseCart);

describe("ProductCard", () => {
  beforeEach(() => {
    render(<ProductCard product={mockProduct} />);
  });

  describe("show the product", () => {
    it("should render the title", () => {
      expect(screen.getByText(mockProduct.name)).toBeInTheDocument();
    });
    it("should render the price", () => {
      expect(screen.getByText("$" + mockProduct.price)).toBeInTheDocument();
    });
    it("should render the image", () => {
      expect(screen.getByAltText(mockProduct.name)).toBeInTheDocument();
    });
  });

  describe("show a button to add porduct in cart", () => {
    beforeEach(() => {
      fireEvent.mouseEnter(screen.getByRole("img"));
    });
    it("should show a button on mouse enter", () => {
      expect(screen.getByRole("button")).toBeInTheDocument();
    });
    it("should call a function to add 1 product to cart when button is clicked", () => {
      const spyAddItem = jest.spyOn(mockUseCart, "addItem");

      expect(spyAddItem).not.toBeCalled();
      fireEvent.click(screen.getByRole("button"));
      expect(spyAddItem).toBeCalledTimes(1);
    });
  });
});
