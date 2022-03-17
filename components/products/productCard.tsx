import React from "react";
import Image from "next/image";

import useShowElement from "../../hooks/useShowElement";
import AddToCart from "../addToCart";
import {Product} from "../../product/types";

interface props {
  product: Product;
}

export default function ProductCard({product}: props) {
  const {hidden, setHidden, elementRef} = useShowElement();

  return (
    <div
      ref={elementRef}
      className="p-6 md:p-0 w-440px flex flex-col justify-between"
      onMouseEnter={() => setHidden(false)}
      onMouseLeave={() => setHidden(true)}
    >
      <div className="border-b-1 border-white relative backgroundGradient">
        <AddToCart hidden={hidden} product={product} />
        <Image alt={product.name} height={577} src={product.image} width={440} />
      </div>
      <footer className="flex justify-between mt-4 text-2xl ">
        <div>{product.name}</div>
        <div>&#36;{product.price}</div>
      </footer>
    </div>
  );
}
