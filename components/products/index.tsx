import {Product} from "../../product/types";

import ProductCard from "./productCard";

interface props {
  products: Product[];
}

export default function ProductsList({products}: props) {
  return (
    <>
      <main className=" w-full">
        <article className="flex flex-col md:flex-row items-center justify-center gap-8 m-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </article>
      </main>
    </>
  );
}
