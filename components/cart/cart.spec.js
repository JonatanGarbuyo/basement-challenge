import React from "react";
import {fireEvent, render, screen} from "@testing-library/react";

import useCart from "../../hooks/useCart";
import mockProduct from "../../test/__mocks__/mockProduct";
import {useCartContext} from "../../context/CartContext";

import Cart from "./index";

jest.mock("../../hooks/useCart");
jest.mock("../../context/CartContext");

const mockUseCart = {
  cartTotal: 123,
  checkout: jest.fn(),
};

const mockUseCartContext = {
  itemList: [mockProduct],
  isHidden: false,
  setIsHidden: jest.fn(),
};

useCart.mockReturnValue(mockUseCart);
useCartContext.mockReturnValue(mockUseCartContext);

describe("Cart", () => {
  beforeEach(() => {
    React.useContext = mockUseCartContext;

    render(<Cart />);
  });

  describe("shows the cart", () => {
    it("should render the title", () => {
      expect(screen.getByText(/cart/i)).toBeInTheDocument();
    });
    it("should render the total label", () => {
      expect(screen.getByText(/total:/i)).toBeInTheDocument();
    });
    it("should render the total price in cart", () => {
      const cartTotal = RegExp(mockUseCart.cartTotal.toFixed(2));

      expect(screen.queryAllByText(cartTotal)).toHaveLength(2);
    });
  });

  describe("show a button to close the cart", () => {
    it("should render the close button", () => {
      expect(screen.getByRole("button", {name: "close cart"})).toBeInTheDocument();
    });
    it("should call a function to close the cart when button is clicked", () => {
      const spyCloseCart = jest.spyOn(mockUseCartContext, "setIsHidden");

      expect(spyCloseCart).not.toBeCalled();
      fireEvent.click(screen.getByRole("button", {name: "close cart"}));
      expect(spyCloseCart).toBeCalledTimes(1);
    });
  });

  describe("show a button to checkout the purchase", () => {
    it("should render the checkout button", () => {
      expect(screen.getByRole("button", {name: "checkout"})).toBeInTheDocument();
    });
    it("should call a function to checkout the purchase", () => {
      const spyAddItem = jest.spyOn(mockUseCart, "checkout");

      expect(spyAddItem).not.toBeCalled();
      fireEvent.click(screen.getByRole("button", {name: "checkout"}));
      expect(spyAddItem).toBeCalledTimes(1);
    });
  });
});
