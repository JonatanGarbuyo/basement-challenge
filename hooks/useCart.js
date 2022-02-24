import {useEffect, useContext} from "react";

import {CartContext} from "../context/CartContext";

export default function useCart() {
  const {itemList, setItemList} = useContext(CartContext);

  useEffect(() => {
    const cartInLocalStorage = window.localStorage.getItem("cart");

    if (cartInLocalStorage && cartInLocalStorage.length) {
      setItemList(JSON.parse(cartInLocalStorage));
    } else {
      window.localStorage.setItem("cart", JSON.stringify([]));
    }
  }, [setItemList]);

  //
  function updateItemList(newList) {
    window.localStorage.setItem("cart", JSON.stringify(newList));
    setItemList(newList);
  }

  function addItem(item) {
    const newItem = {...item, inCartId: Date.now().toString(), qty: 1, selectedSize: "S"};

    updateItemList([...itemList, newItem]);
  }

  function removeItem(item) {
    const newItemList = itemList.filter((cartItem) => item.inCartId !== cartItem.inCartId);

    updateItemList(newItemList);
  }

  function incrementQty(item) {
    const newItemList = itemList.map((cartItem) => {
      if (item.inCartId === cartItem.inCartId) cartItem.qty++;

      return cartItem;
    });

    updateItemList(newItemList);
  }

  function decrementQty(item) {
    const newItemList = itemList.reduce((list, cartItem) => {
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

  function selectSize(inCartId, value) {
    const newItemList = itemList.map((cartItem) => {
      if (inCartId === cartItem.inCartId) cartItem.selectedSize = value;

      return cartItem;
    });

    updateItemList(newItemList);
  }

  return {
    addItem,
    removeItem,
    incrementQty,
    decrementQty,
    selectSize,
  };
}
