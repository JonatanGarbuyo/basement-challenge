import useCart from "../../hooks/useCart";

export default function AddToCart({product, ...props}) {
  const {addItem} = useCart();
  const handleClick = () => {
    addItem(product);
  };

  return (
    <div {...props}>
      <div className="flex justify-center absolute  top-1/3 z-40 w-full">
        <button
          className="text-black font-bold text-3xl absolute top-1/3 z-50 shadowText-w"
          id={product && product.id}
          onClick={handleClick}
        >
          ADD TO CART
        </button>
        <div
          className=" border-white border-2 rounded-full overflow-hidden flex flex-col"
          style={{
            width: "120px",
            height: "120px",
          }}
        >
          <div className="mt-2 border-t-1 border-white" />
          <div className="mt-5 border-t-1 border-white" />
          <div className="mt-14 border-t-1 border-white" />
          <div className="mt-6 border-t-1 border-white" />
        </div>

        <div className=" border-1 border-white absolute h-full rounded-100% w-6" />
        <div className=" border-1 border-white absolute h-full rounded-100% w-16" />
        <div className=" border-1 border-white absolute h-full rounded-100% w-24" />
      </div>
    </div>
  );
}
