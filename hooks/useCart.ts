import {useEffect, useContext, useState} from "react";

import {CartContext} from "../context/CartContext";
import {ICartProduct} from "../interfaces/interfaces";

export default function useCart() {
  const {itemList, setItemList} = useContext(CartContext);
  const [cartTotal, setCartTotal] = useState(0);

  // init cart
  useEffect(() => {
    const cartInLocalStorage = window.localStorage.getItem("cart");

    if (cartInLocalStorage && cartInLocalStorage.length) {
      setItemList(JSON.parse(cartInLocalStorage));
    } else {
      window.localStorage.setItem("cart", JSON.stringify([]));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // update total price in cart
  useEffect(() => {
    const total = itemList.reduce((acc, product) => {
      return (acc += product.price * product.qty);
    }, 0);

    setCartTotal(+total.toFixed(2));
  }, [itemList]);

  //
  function updateItemList(newList: ICartProduct[]) {
    window.localStorage.setItem("cart", JSON.stringify(newList));
    setItemList(newList);
  }

  function addItem(item: ICartProduct) {
    const newItem = {...item, inCartId: Date.now().toString(), qty: 1, selectedSize: "S"};

    updateItemList([...itemList, newItem]);
  }

  function removeItem(item: ICartProduct) {
    const newItemList = itemList.filter((cartItem) => item.inCartId !== cartItem.inCartId);

    updateItemList(newItemList);
  }

  function incrementQty(item: ICartProduct) {
    const newItemList = itemList.map((cartItem) => {
      if (item.inCartId === cartItem.inCartId) cartItem.qty++;

      return cartItem;
    });

    updateItemList(newItemList);
  }

  function decrementQty(item: ICartProduct) {
    const newItemList = itemList.reduce<ICartProduct[]>((list, cartItem) => {
      if (item.inCartId === cartItem.inCartId) {
        if (cartItem.qty > 1) {
          cartItem.qty--;
          list.push(cartItem);
        }
      } else {
        list.push(cartItem);
      }

      return list;
    }, []);

    updateItemList(newItemList);
  }

  function selectSize(inCartId: string, value: string) {
    const newItemList = itemList.map((cartItem) => {
      if (inCartId === cartItem.inCartId) cartItem.selectedSize = value;

      return cartItem;
    });

    updateItemList(newItemList);
  }

  function checkout() {
    // eslint-disable-next-line no-console
    if (itemList.length) console.log(itemList);
  }

  return {
    addItem,
    removeItem,
    incrementQty,
    decrementQty,
    selectSize,
    cartTotal,
    checkout,
  };
}
