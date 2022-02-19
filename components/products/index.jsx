import ProductCard from "./productCard";

export default function ProductsList({products}) {
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
