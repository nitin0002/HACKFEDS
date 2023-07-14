import { useState, useEffect } from "react";
import Background from "./Background";
import Header from "./Header";
import LottieAnimation from "./LottieAnim";
import HackathonStats from "./Hackathon_stats";
import PlatinumSponsors from "./PlatinumSponsors";
import GoldSponsors from "./GoldSponsors";
import Footer from "./Footer";

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

      <div className="flex flex-wrap flex-col items-center justify-center bg-white/20  backdrop-filter backdrop-blur-sm rounded-lg">
        <p
          className="text-3xl font-bold  font-RussoOne tracking-wider mb-4 text-white/75 mt-5  xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl"
          style={{
            textShadow: `${shadowOffset}px -1px 0px rgba(109, 95, 187, 1)`,
          }}
        >
          {"<"} HACKATHON - 1.0 {"/>"}
        </p>
        <div className="flex flex-row flex-wrap items-center justify-center ">
          <p className="basis-3/5 p-5 text-xl font-medium tracking-wider antialiased bg-black/40 py-16  rounded-lg leading-8 ">
            {/* <hr className="styled-hr-hack" /> */}
            Build your dream project in this hackathon . We provides the tools
            and services frontend and full-stack developers need to easily
            build, deploy, and host feature-rich, full-stack applications,
            leveraging the power of data. No deep cloud expertise needed. By
            registering to this hackathon you are giving permision to Hackfed to
            send you Hackathon details over email.
            {/* <hr className="styled-hr-hack-end" /> */}
          </p>

          <LottieAnimation />
        </div>
      </div>
      <div className="flex flex-wrap flex-col items-center justify-center bg-white/10  backdrop-filter backdrop-blur-sm rounded-lg mt-4">
        <HackathonStats />
      </div>
      <div className="bg-white/20 mt-4 backdrop-filter backdrop-blur-sm">
        <PlatinumSponsors />
        <hr className="styled-hr-sponsors" />
        <GoldSponsors />
      </div>
      <Footer />
    </>
  );
};

export default Hackathon_1;
