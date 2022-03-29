import React from "react";
import {fireEvent, render, screen} from "@testing-library/react";

import mockProduct from "../../test/__mocks__/mockProduct";
import useCart from "../../hooks/useCart";

import ItemCard from "./itemCard";

jest.mock("../../hooks/useCart");

const mockUseCart = {
  addItem: jest.fn(),
  removeItem: jest.fn(),
  incrementQty: jest.fn(),
  decrementQty: jest.fn(),
  selectSize: jest.fn(),
};

useCart.mockReturnValue(mockUseCart);

describe("ItemCard", () => {
  beforeEach(() => {
    render(<ItemCard product={mockProduct} />);
  });

  describe("shows the product in cart", () => {
    it("should render the image", () => {
      expect(screen.getByRole("img", {name: mockProduct.name})).toBeInTheDocument();
    });
    it("should render the title", () => {
      expect(screen.getByText(mockProduct.name)).toBeInTheDocument();
    });
    it("should render the description", () => {
      expect(screen.getByText(mockProduct.description)).toBeInTheDocument();
    });
    it("should render the sub-total price", () => {
      const subTotal = RegExp(`${(mockProduct.price * mockProduct.qty).toFixed(2)}`);

      expect(screen.getByText(subTotal)).toBeInTheDocument();
    });
    it("should render the quantity label", () => {
      expect(screen.getByText(/quantity/i)).toBeInTheDocument();
    });
    it("should render the product quantity", () => {
      expect(screen.getByText(mockProduct.qty)).toBeInTheDocument();
    });
    it("should render the size label", () => {
      expect(screen.getByText(/size/i)).toBeInTheDocument();
    });
    it("should render the selected size", () => {
      expect(
        screen.getByRole("button", {name: `size ${mockProduct.selectedSize}`}),
      ).toBeInTheDocument();
    });
  });

  describe("shows a button to change product size", () => {
    it("should render the size button", () => {
      expect(screen.getByRole("button", {name: "size M"})).toBeInTheDocument(); ////
    });
    it("should show call a function to the item size", () => {
      const spySelectSize = jest.spyOn(mockUseCart, "selectSize");

      expect(spySelectSize).not.toBeCalled();
      fireEvent.click(screen.getByRole("button", {name: "size M"}));
      expect(spySelectSize).toBeCalledTimes(1);
      expect(spySelectSize).toBeCalledWith(mockProduct.inCartId, "M");
    });
  });

  describe("shows a button to delete product in cart", () => {
    it("should render the delete item button", () => {
      expect(screen.getByRole("button", {name: "remove item"})).toBeInTheDocument(); ////
    });
    it("should show call a function to delete item from cart", () => {
      const spyRemoveItem = jest.spyOn(mockUseCart, "removeItem");

      expect(spyRemoveItem).not.toBeCalled();
      fireEvent.click(screen.getByRole("button", {name: "remove item"}));
      expect(spyRemoveItem).toBeCalledTimes(1);
    });
  });

  describe("shows a button to increment/decrement quantity of product in cart", () => {
    let incrementButton;
    let decrementButton;

    beforeEach(() => {
      incrementButton = screen.getByRole("button", {name: "increment quantity"});
      decrementButton = screen.getByRole("button", {name: "decrement quantity"});
    });

    it("should show a button to increment", () => {
      expect(incrementButton).toBeInTheDocument();
    });
    it("should call a function to increment 1 product in cart when button is clicked", () => {
      const spyIncrementQty = jest.spyOn(mockUseCart, "incrementQty");

      expect(spyIncrementQty).not.toBeCalled();
      fireEvent.click(incrementButton);
      expect(spyIncrementQty).toBeCalledTimes(1);
    });

    it("should show a button to decrement", () => {
      expect(decrementButton).toBeInTheDocument();
    });
    it("should call a function to decrement 1 product in cart when button is clicked", () => {
      const spyDecrementQty = jest.spyOn(mockUseCart, "decrementQty");

      expect(spyDecrementQty).not.toBeCalled();
      fireEvent.click(decrementButton);
      expect(spyDecrementQty).toBeCalledTimes(1);
    });
  });
});
