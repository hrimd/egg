"use client";
import Image from "next/image";
import Egg from ".././public/Image/Eggnog-removebg-preview.png";
export default function Provider({ children }) {
  return (
    <div className="w-full h-screen flex flex-col">
      <div className="bg-black mx-8 flex  justify-between items-center rounded-b-2xl ">
        <Image src={Egg} alt="Logo" width={100} height={200} />

        <button className="bg-[#fea802] w-24 h-10 m-3  text-black uppercase font-bold rounded-lg">
          Buy now
        </button>
      </div>
      <div className="grow ">{children}</div>
    </div>
  );
}
