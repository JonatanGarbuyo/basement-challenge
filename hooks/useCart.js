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
    setItemList([...newList]);
  }

  //
  function addItem(item) {
    const newItem = {...item, inCartId: Date.now().toString(), qty: 1, selectedSize: "S"};

    updateItemList([...itemList, newItem]);
  }

  //
  function removeItem(item) {
    const itemIndex = itemList.findIndex((cartItem) => item.id === cartItem.id);

    if (itemIndex >= 0) {
      itemList.splice(itemIndex, 1);
    }
    updateItemList(itemList);
  }

  function incrementQty(item) {
    const itemIndex = itemList.findIndex((cartItem) => item.inCartId === cartItem.inCartId);

    itemList[itemIndex].qty++;
    updateItemList(itemList);
  }

  function decrementQty(item) {
    const itemIndex = itemList.findIndex((cartItem) => item.inCartId === cartItem.inCartId);

    if (itemList[itemIndex].qty > 1) {
      itemList[itemIndex].qty--;
    } else {
      itemList.splice(itemIndex, 1);
    }
    updateItemList(itemList);
  }

  function selectSize(inCartId, value) {
    const itemIndex = itemList.findIndex((cartItem) => inCartId === cartItem.inCartId);

    itemList[itemIndex].selectedSize = value;
    updateItemList(itemList);
  }

  return {
    addItem,
    removeItem,
    incrementQty,
    decrementQty,
    selectSize,
  };
}
