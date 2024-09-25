import * as React from "react";
import Image from "next/image";

export default function ComingSoonPage() {
  return (
    <div className="h-full w-full bg-[url('/images/bg-soon.jpeg')] bg-center bg-cover flex flex-col justify-center items-center space-y-10">
      <div className="flex justify-center items-center flex-col gap-y-4 text-center">
        <div className="space-y-2">
          <span className="text-white font-bold text-lg md:text-xl tracking-[0.6rem] md:tracking-[1rem]">
            BIG THINGS ARE
          </span>
          <p className="text-white font-extralight text-3xl md:text-5xl tracking-[1.9rem] md:tracking-[2.2rem] pl-5">
            COMING
          </p>
        </div>
        <div className="-ml-2 md:ml-0">
          <h1 className="text-white text-[90px] md:text-[160px] font-bold !leading-0">
            SOON
          </h1>
          <p className="text-[#2FBEF2] font-bold text-[24px] md:text-4xl tracking-[1rem] md:tracking-[1.75rem] mt-[-30px]  md:mt-[-50px] pl-4 md:pl-6">
            STAYTUNED
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-y-2">
        <Image src="/icons/logo.svg" alt="Logo" width={98} height={120} />
        <p className="font-bold text-[20px] text-white">TECHPUNDITS</p>
      </div>
    </div>
  );
}
