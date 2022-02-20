import {useContext} from "react";
import type {NextPage, GetStaticProps} from "next";

import Header from "../components/header";
import ProductsList from "../components/products";
import Footer from "../components/footer";
import Cart from "../components/cart";
import {Product} from "../product/types";
import {CartContext} from "../context/CartContext";
interface Props {
  products: Product[];
}

const Home: NextPage<Props> = ({products}) => {
  const {isHidden} = useContext(CartContext);

  return (
    <div
      className="w-full h-full relative flex flex-col m-auto bg-black "
      style={isHidden ? {} : {overflowY: "hidden"}}
    >
      {isHidden ? null : <Cart />}
      <Header />
      <ProductsList products={products} />
      <Footer />
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const products: Product[] = await import("../product/mock.json").then((res) => res.default);

  return {
    props: {
      products,
    },
  };
};
