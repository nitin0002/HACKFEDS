import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import programmer from "../public/programmer.json";
import FirstMedal from "../public/FirstMedal.json";

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

export function Medal() {
  const containerRef = useRef(null);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: containerRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: FirstMedal,
    });

    return () => {
      anim.destroy();
    };
  }, []);

  return <div ref={containerRef} className="w-96 h-96" />;
}

export default LottieAnimation;
