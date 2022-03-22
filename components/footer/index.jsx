import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full">
      <div className="relative flex justify-center mx-4 ">
        <Image alt="wear everyday" height="486px" src="/footer.svg" width="1376px" />
      </div>
    </footer>
  );
}
