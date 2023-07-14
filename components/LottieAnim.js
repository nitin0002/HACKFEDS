import React, { useEffect, useRef } from "react";
import lottie from "Lottie-web";
import programmer from "../public/programmer.json";

const LottieAnimation = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: containerRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: programmer,
    });

    return () => {
      anim.destroy();
    };
  }, []);

  return <div ref={containerRef} className="w-96 h-96"/>;
};

export default LottieAnimation;
