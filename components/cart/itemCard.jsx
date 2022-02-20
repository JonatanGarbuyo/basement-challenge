import Image from "next/image";
import {useEffect, useState} from "react";

import useCart from "../../hooks/useCart";

export default function ItemCard({product}) {
  const [itemTotal, setItemTotal] = useState(0);
  const {removeItem, incrementQty, decrementQty, selectSize} = useCart();
  const [options] = product.options;

  useEffect(() => {
    setItemTotal(product.price * product.qty);
  }, [product.qty, product.price]);

  return (
    <div className="flex  border-white border-1 m-2 md:mx-6 p-2">
      <div
        className="relative w-60 h-36 md:h-52"
        style={{
          background: "linear-gradient(360deg, #1D1D1D 0%, rgba(21, 21, 21, 0) 100%)",
        }}
      >
        <Image
          alt={product.name}
          layout="fill"
          objectPosition="bottom center"
          src={product.image}
        />
      </div>
      <div className="flex-grow flex flex-col ml-2 md:ml-4 w-full">
        <header className="md:flex-grow">
          <div className="flex justify-between items-center content-center">
            <h1 className="text-sm md:text-3xl font-bold uppercase">{product.name}</h1>
            <button className="mr-4" onClick={() => removeItem(product)}>
              X
            </button>
          </div>
          <p
            className="text-sm md:text-xl text-left my-1"
            style={{
              color: "#999",
            }}
          >
            {product.description}
          </p>
        </header>
        <main className="flex flex-col justify-end text-base md:text-xl">
          <div className="flex gap-3 items-center my-2 ">
            <h2>QUANTITY:</h2>
            <div className="flex flex-row ml-2 border-1 border-white rounded-full">
              <button className="w-6" onClick={() => decrementQty(product)}>
                -
              </button>
              <p>{product.qty}</p>
              <button className="w-6" onClick={() => incrementQty(product)}>
                +
              </button>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between md:pr-2 ">
            <div className="uppercase flex flex-rows items-center">
              <h2 className="uppercase">{options.label}:</h2>
              <div className="mx-2">
                {options.values.map((value) => (
                  <button
                    key={value}
                    className={`uppercase w-6  md:w-8 border-white ${
                      product.selectedSize === value ? "border-1 rounded-full" : ""
                    }`}
                    onClick={() => selectSize(product.inCartId, value)}
                  >
                    {value}
                  </button>
                ))}
              </div>
            </div>
            <h2 className="text-base md:text-3xl text-left">${itemTotal.toFixed(2)}</h2>
          </div>
        </main>
      </div>
    </div>
  );
}
