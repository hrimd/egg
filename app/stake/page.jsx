"use client";
import React, { useState } from "react";
import Image from "next/image";
import Egg from "../../public/Image/Eggnog-removebg-preview.png";
export default function Tokenomics() {
  const [btnChange, setBtnChange] = useState("stake");

  const [inputValue, setInputValue] = useState("0");
  const handleBtnChange = () => {
    setBtnChange(btnChange);
  };

  const handleClick = () => {
    // console.warn("Button clicked!");
    alert("Invalid network. Switch to avalanche !");
    alert("You have no pending reward to claim! Refresh and try again");
  };

  return (
    <>
      <div className="border lg:w-2/3 lg:h-[500px]  lg:m-auto my-10 rounded-xl">
        <div className="bg-[#dac8a5] rounded-md m-1 flex flex-col my-1 py-10 lg:py-0.5 ">
          <div className="w-full rounded-xl px-1 py-2 sm:p-4 flex justify-between items-end">
            <div>
              <div className="font-semibold text-2xl text-white/60 font-mono">
                Balance
              </div>
              <div className="font-bold text-2xl lg:text-5xl flex items-center gap-2 ">
                <div>0</div>
                <Image
                  src={Egg}
                  alt="egg"
                  className="w-[50] h-[40] shadow-md
                shadow-[#ac946521]   rounded-b-full "
                />
              </div>
            </div>
            <button
              className="h-10 border-2 px-1 sm:px-4 border-none rounded-full hover:bg-white hover:text-black 
                  font-semibold shadow-md bg-[#fea802]"
            >
              0x9c9..094
            </button>
          </div>

          <div className="w-full bg-[#dac8a5] rounded-xl px-1 py-2 sm:p-4 flex justify-between">
            <div>
              <div className="font-semibold font-mono text-md lg:text-2xl text-white/60">
                Staked
              </div>
              <div className="font-extrabold text-xl lg:text-2xl xl:text-4xl flex items-center gap-2">
                0
                <div>
                  <Image
                    src={Egg}
                    alt="egg"
                    className="w-[50] h-[40] shadow-md
                shadow-[#ac946521]   rounded-b-full "
                  />
                </div>
              </div>
            </div>

            <div>
              <div className="font-semibold font-mono text-md lg:text-2xl text-white/60">
                Pending
              </div>
              <div className="font-extrabold text-xl lg:text-2xl xl:text-4xl flex items-center gap-2">
                <div>0</div>
                <div>
                  <Image
                    src={Egg}
                    alt="egg"
                    className="w-[50] h-[40] shadow-md
                shadow-[#ac946521]   rounded-b-full "
                  />
                </div>
              </div>
            </div>

            <div>
              <div className="font-semibold font-mono text-md lg:text-2xl text-white/60">
                Claimed
              </div>
              <div className="font-extrabold text-xl lg:text-2xl xl:text-4xl flex items-center gap-2">
                <div>0</div>
                <div>
                  <Image
                    src={Egg}
                    alt="egg"
                    className="w-[50] h-[40] shadow-md
                shadow-[#ac946521]   rounded-b-full "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#dac8a5] rounded-md m-1 py-6 relative">
          <div className="w-full rounded-full bg-amber-100 flex justify-between items-center p-1">
            <div
              onClick={() => setBtnChange("stake")}
              className={`w-1/2 text-center font-bold rounded-full p-2 cursor-pointer ${
                btnChange === "stake"
                  ? "bg-[#fea802] text-white"
                  : " text-black"
              }`}
            >
              Stake
            </div>
            <div
              onClick={() => setBtnChange("withdraw")}
              className={`w-1/2 text-center font-bold rounded-full p-2 cursor-pointer ${
                btnChange === "withdraw"
                  ? "bg-[#fea802] text-white"
                  : " text-black"
              }`}
            >
              Withdraw
            </div>
            <div
              onClick={() => setBtnChange("claim")}
              className={`w-1/2 text-center font-bold rounded-full p-2 cursor-pointer ${
                btnChange === "claim"
                  ? "bg-[#fea802] text-white"
                  : " text-black"
              }`}
            >
              Claim
            </div>
          </div>
          {btnChange === "stake" && <div>Stake</div>}
          {btnChange === "withdraw" && <div>Pending</div>}
          {btnChange === "claim" && <div>Claimed</div>}
          {/* input */}
          <div className="w-2/3 m-auto h-full flex items-center justify-center bg-[#fea802] overflow-hidden p-1 border-opacity-30 rounded-lg shadow-md">
            <input
              className="grow h-full border-none outline-none rounded-l-md bg-amber-100 text-black font-semibold caret-orange-500 pl-2 text-2xl font-mono"
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <div className="flex items-center justify-center relative w-10 h-7  bg-amber-100 border-opacity-20 rounded-r-md">
              <Image
                src={Egg}
                alt="egg"
                className=" rounded-b-xl shadow-sm shadow-[#eec97fad]"
              />
            </div>
          </div>
          {/* volume */}
          <div className="w-2/3 xl:w-2/3 flex flex-col gap-2 mx-auto p-2">
            <input
              className="w-full mx-auto"
              min="0"
              max="4"
              step="1"
              type="range"
              disabled
            />
            <div className="w-full flex justify-between">
              <p>0</p>
              <p>25%</p>
              <p>50%</p>
              <p>75%</p>
              <p>max</p>
            </div>
          </div>
          <button
            className="w-5/6 m-auto bg-white border-none rounded-lg h-12 text-center flex  justify-center font-bold text-2xl items-center text-[#fea802] hover:bg-[#fea802] hover:text-white"
            onClick={(e) => handleClick(e)}
          >
            Claim
          </button>
        </div>
      </div>
    </>
  );
}
