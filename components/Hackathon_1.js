import { useState, useEffect } from "react";
import Background from "./Background";
import Header from "./Header";
import LottieAnimation from "./LottieAnim";
import HackathonStats from "./Hackathon_stats";
import PlatinumSponsors from "./PlatinumSponsors";
import GoldSponsors from "./GoldSponsors";
import Footer from "./Footer";
import WinnerMale from "./WinnerMale";
import WinnerFemale from "./WinnerFemale";
import Link from "next/link";
import H_Footer from "./H_Footer";

const Hackathon_1 = () => {
  const [shadowOffset, setShadowOffset] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const containerWidth = window.innerWidth;
      const offset = (mouseX / containerWidth) * 20 - 10;
      setShadowOffset(offset);
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <Background />
      {/* <div className="inline-flex items-center  xl:w-full">
        <hr className="hidden xl:flex w-64 h-1 my-10 bg-white border-0 rounded " />
      </div> */}
      <Header />

      <div className="flex flex-col items-center justify-center min-h-screen  rounded-lg space-y-10 ">
        <p
          className="text-3.5xl font-bold  font-RussoOne tracking-wider mb-10 text-white/75 pt-40 sm:pt-40 mt-5 lg:pt-60  xl:text-8xl lg:text-6xl md:text-5xl sm:text-4xl"
          style={{
            textShadow: `${shadowOffset}px -1px 0px rgba(109, 95, 187, 1)`,
          }}
        >
          {"<"} HACKATHON 1.0 {"/>"}
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center bg-white/10 backdrop-filter backdrop-blur-md mx-4  rounded-2xl lg:divide-x-4 divide-black ">
          <p className="md:w-3/5 px-1 sm:mx-5 mx-5 text-xl font-medium tracking-wider antialiased py-16  rounded-lg leading-8 ">
            <hr className="styled-hr-hack" />
            Build your dream project in this hackathon . We provides the tools
            and services frontend and full-stack developers need to easily
            build, deploy, and host feature-rich, full-stack applications,
            leveraging the power of data. No deep cloud expertise needed. By
            registering to this hackathon you are giving permision to Hackfed to
            send you Hackathon details over email.
            <hr className="styled-hr-hack-end" />
            <button
              type="button"
              className="py-2 px-4 mt-5  text-white rounded-xl font-semibold  bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-indigo-700  hover:to-indigo-500 active:bg-indigo-700 "
            >
              <Link href="#">Register Now</Link>
            </button>
          </p>

          <LottieAnimation />
        </div>
      </div>
      <div className="flex flex-wrap flex-col items-center justify-center bg-gradient-to-b from-black/20 via-blue-added  to-blue-added  backdrop-filter backdrop-blur-sm rounded-lg mx-1 mt-10 md:pt-32 sm:mt-40">
        <HackathonStats />
      </div>
      <div className="bg-blue-added pb-20 py-40 mx-1 rounded-lg backdrop-filter backdrop-blur-s">
        <WinnerMale />
      </div>
      <div className=" pb-40 mx-1 bg-gradient-to-b from-blue-added via-blue-added to-blue-added">
        <WinnerFemale />
      </div>

      <div className="bg-blue-added  backdrop-filter backdrop-blur-sm py-20 space-y-40 mx-1 rounded-t-lg">
        <div className="mx-1 sm:mx-32 rounded-xl backdrop-filter backdrop-blur-sm my-10 ">
          <PlatinumSponsors />
        </div>
        <div className=" mx-5 sm:mx-40 md:mx-50 lg:mx-58 xl:mx-70  rounded-xl backdrop-filter backdrop-blur-sm">
          <GoldSponsors />
        </div>
      </div>
      <div className="mx-1">
        <H_Footer />
      </div>
    </>
  );
};

export default Hackathon_1;
