import {useCallback, useEffect} from "react";

import {useCartContext} from "../../context/CartContext";
import useCart from "../../hooks/useCart";

import ItemCard from "./itemCard";

export default function Cart() {
  const {itemList, isHidden, setIsHidden} = useCartContext();
  const {cartTotal, checkout} = useCart();

  const escFunction = useCallback(
    (event) => {
      if (event.keyCode === 27) {
        setIsHidden(true);
      }
    },
    [setIsHidden],
  );

  useEffect(() => {
    document.addEventListener("keydown", escFunction);

    return () => {
      document.removeEventListener("keydown", escFunction);
    };
  }, [escFunction]);

  return (
    <>
      <div
        className={`absolute h-full w-full bg-black opacity-70 z-40 ${isHidden && "hidden"}`}
        onClick={() => setIsHidden(true)}
      />
      <div
        className={`absolute md:right-0 flex-grow flex flex-col justify-center
          bg-black z-50 border-white md:border-l-1 md:border-b-1 
          h-full w-full md:w-1/3 md:min-w-min  md:h-auto text-center ${isHidden && "hidden"}`}
      >
        <div
          className=" font-bold text-xl text-right py-4 px-2 md:p-6"
          onClick={() => setIsHidden(true)}
        >
          <button aria-label="close cart">&rarr; CLOSE</button>
        </div>
        <div className="flex flex-col md:flex-row text-9xl md:text-8xl ">
          <h1 className="md:pl-6 font-bold ">YOUR</h1>
          <h1 className="md:px-6 text-black font-bold shadowText-w">CART</h1>
        </div>

        <main className="h-full flex flex-col md:max-h-577px overflow-y-scroll" id="itemsList">
          {itemList.length > 0 ? (
            itemList.map((item) => <ItemCard key={item.inCartId} product={item} />)
          ) : (
            <p className="text-3xl m-20">is empty</p>
          )}
        </main>

        <footer className="flex flex-col md:flex-row items-center border-white md:border-t-1">
          <div className="flex w-full justify-between md:hidden">
            <h2 className="flex-grow p-4 px-5 text-3xl text-left border-white md:border-r-1">
              TOTAL
            </h2>
            <h2 className="flex-grow p-4 px-5 text-3xl text-right border-white md:border-r-1">
              ${cartTotal.toFixed(2)}
            </h2>
          </div>
          <h2 className="flex-grow p-4 px-5 text-3xl text-left hidden md:inline-block border-white md:border-r-1">
            {`TOTAL: $${cartTotal.toFixed(2)}`}
          </h2>
          <button
            aria-label="checkout"
            className="p-4 md:py-4 md:px-5 text-7xl md:text-3xl text-black font-bold border-white border-t-1 md:border-t-0 w-screen md:w-auto shadowText-w"
            onClick={() => checkout()}
          >
            CHECKOUT
          </button>
        </footer>
      </div>
    </>
  );
}
