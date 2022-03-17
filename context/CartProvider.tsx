import {useState} from "react";

import {Product} from "../product/types";

import {CartContext} from "./CartContext";

interface IProps {
  children: JSX.Element | JSX.Element[];
}

export default function CartContextProvider({children}: IProps) {
  const [itemList, setItemList] = useState<Product[]>([]);
  const [isHidden, setIsHidden] = useState<Boolean>(true);

  return (
    <CartContext.Provider value={{itemList, setItemList, isHidden, setIsHidden}}>
      {children}
    </CartContext.Provider>
  );
}
