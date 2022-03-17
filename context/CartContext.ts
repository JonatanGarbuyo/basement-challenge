import {createContext, Dispatch, SetStateAction} from "react";

import {Product} from "../product/types";

interface IContextProps {
  itemList: Product[];
  setItemList: Dispatch<SetStateAction<Product[]>>;
  isHidden: Boolean;
  setIsHidden: Dispatch<SetStateAction<Boolean>>;
}

export const CartContext = createContext({} as IContextProps);
