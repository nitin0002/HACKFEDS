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

const Hackathon_1 = () => {
  const [shadowOffset, setShadowOffset] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const containerWidth = window.innerWidth;
      const offset = (mouseX / containerWidth) * 20 - 10; // Adjust the offset range as needed
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
      <Header />

      <div className="flex flex-col items-center justify-center min-h-screen  rounded-lg space-y-10 ">
        <p
          className="text-3xl font-bold  font-RussoOne tracking-wider mb-10 text-white/75 mt-5 lg:pt-60  xl:text-8xl lg:text-6xl md:text-5xl sm:text-4xl"
          style={{
            textShadow: `${shadowOffset}px -1px 0px rgba(109, 95, 187, 1)`,
          }}
        >
          {"<"} HACKATHON 1.0 {"/>"}
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center -mb-20 bg-white/20 backdrop-filter backdrop-blur-sm mx-16  rounded-2xl lg:divide-x-4 divide-black">
          <p className="w-3/5 px-1 text-xl font-medium tracking-wider antialiased py-16  rounded-lg leading-8 ">
            <hr className="styled-hr-hack" />
            Build your dream project in this hackathon . We provides the tools
            and services frontend and full-stack developers need to easily
            build, deploy, and host feature-rich, full-stack applications,
            leveraging the power of data. No deep cloud expertise needed. By
            registering to this hackathon you are giving permision to Hackfed to
            send you Hackathon details over email.
            <hr className="styled-hr-hack-end" />
          </p>

          <LottieAnimation />
        </div>
      </div>
      <div className="flex flex-wrap flex-col items-center justify-center bg-white/10  backdrop-filter backdrop-blur-sm rounded-lg md:mt-10 sm:mt-40">
        <HackathonStats />
      </div>
      <div className="bg-white/10 mt-5 py-40">
        
        <WinnerMale />
        <WinnerFemale />
      </div>

      <div className="bg-white/20 mt-4 backdrop-filter backdrop-blur-sm py-20 space-y-20">
        <PlatinumSponsors />
        <hr className="styled-hr-sponsors" />
        <GoldSponsors />
      </div>
      <Footer />
    </>
  );
};

export default Hackathon_1;
