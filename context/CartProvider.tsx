import {useState} from "react";

import {ICartProduct} from "../interfaces/interfaces";

import {CartContext} from "./CartContext";

interface IProps {
  children: JSX.Element | JSX.Element[];
}

export default function CartContextProvider({children}: IProps) {
  const [itemList, setItemList] = useState<ICartProduct[]>([]);
  const [isHidden, setIsHidden] = useState<Boolean>(true);

  return (
    <CartContext.Provider value={{itemList, setItemList, isHidden, setIsHidden}}>
      {children}
    </CartContext.Provider>
  );
}
