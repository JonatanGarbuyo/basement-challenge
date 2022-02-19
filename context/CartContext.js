import {createContext, useState} from "react";

export const CartContext = createContext();

export default function CartContextProvider({children}) {
  const [itemList, setItemList] = useState([]);
  const [isHidden, setIsHidden] = useState(true);

  return (
    <CartContext.Provider value={{itemList, setItemList, isHidden, setIsHidden}}>
      {children}
    </CartContext.Provider>
  );
}
