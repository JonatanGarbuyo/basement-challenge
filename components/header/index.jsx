import Image from "next/image";
import {useContext} from "react";

import logo from "../../public/logo.svg";
import asterisk from "../../public/asterisk.svg";
import asterisk2 from "../../public/asterisk2.svg";
import {CartContext} from "../../context/CartContext";

import Circle from "./circle";

export default function Header() {
  const {itemList, setIsHidden} = useContext(CartContext);

  return (
    <header className="w-full mb-6 flex flex-col items-center">
      <div className="m-4 md:mb-8 md:m-6 flex justify-center flex-col">
        <div className="text-white text-center flex justify-between md:static my-2 md:py-9 w-full">
          <div className="hidden md:inline-block">
            <Image alt="Basement" src={logo} />
          </div>
          <div className="hidden md:flex items-center ">
            <Circle />
            <div
              className="mx-2 px-1 tracking-tighter bg-white text-black rounded-sm"
              style={{transform: "scale(1.4, 0.9)"}}
            >
              HD
            </div>

            <div className="mx-2 w-20 h-5 flex justify-center items-center border-white border-1 rounded-100% ">
              <div className="w-5 h-5 border-white border-1 rounded-full text-center flex justify-center items-center">
                <div className="w-0 h-0 rounded-full border-2 border-white" />
              </div>
            </div>

            <div
              className="mx-2 px-1 tracking-tighter bg-white text-black rounded-sm"
              style={{transform: "scale(1.4, 0.9)"}}
            >
              4K
            </div>
            <div
              className="mx-2 w-0 h-0  relative"
              style={{
                borderLeft: "11px solid transparent ",
                borderRight: "11px solid transparent",
                borderBottom: "solid white 22px ",
              }}
            >
              <p className=" text-black font-black  absolute -left-2 top-2">!</p>
            </div>
          </div>
          <h1 className="inline-block md:hidden text-6xl">b.</h1>
          <button
            className="border-2 rounded-3xl uppercase font-bold p-4px px-24px h-10 md:h-10
          hover:text-black hover:bg-white"
            onClick={() => setIsHidden("")}
          >
            cart ({itemList.length})
          </button>
        </div>
        <Image
          alt="basement supply"
          className="m-8"
          height={"365px"}
          src="/header.svg"
          width={"1376px"}
        />
      </div>

      <section className="my4 py-2 border-t-2 border-b-2 border-white">
        <div className="max-w-screen-xl sm:flex hidden mx-auto relative">
          <div className="absolute left-0 -top-4 z-30 ml-6">
            <Image alt="asterisk-icon" aria-hidden="true" src={asterisk} />
          </div>
          <div className="absolute right-0 -top-28 z-30 mr-6">
            <Image alt="asterisk-icon" aria-hidden="true" src={asterisk2} />
          </div>
        </div>
        <marquee behavior="scroll" className="text-4xl ">
          {"A man can't have enough basement. swag — A man can't have enough basement. swag"}
        </marquee>
      </section>
    </header>
  );
}
