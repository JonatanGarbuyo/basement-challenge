import React from "react";
import Image from "next/image";

import logo from "../../public/footer.svg";

export default function Footer() {
  return (
    <footer className="w-full">
      <div className="flex justify-center m-6">
        <Image alt="wear everyday" src={logo} />
      </div>
    </footer>
  );
}
