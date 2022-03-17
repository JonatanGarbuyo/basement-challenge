import {createContext, Dispatch, SetStateAction} from "react";

import {ICartProduct} from "../interfaces/interfaces";

interface IContextProps {
  itemList: ICartProduct[];
  setItemList: Dispatch<SetStateAction<ICartProduct[]>>;
  isHidden: Boolean;
  setIsHidden: Dispatch<SetStateAction<Boolean>>;
}

export const CartContext = createContext({} as IContextProps);
