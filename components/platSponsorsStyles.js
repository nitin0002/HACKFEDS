const platSponsorsStyles = {
    element: {
      willChange: "opacity, transform",
      opacity: 0.39546,
      transform:
        "translate3d(40px, 120px, 0px) scale3d(0.958176, 0.958176, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg)",
      transformStyle: "preserve-3d",
    },
    section_hackathon_23_spring_schedule_bg: {
      zIndex: -10,
      width: "90%",
      height: "70%",
      filter: "blur(120px)",
      backgroundImage:
        "linear-gradient(90deg, #e8e7e3, #eafafd 11%, #d0f6ff 23%, #d0f6ff 35%, #d0f6ff 47%, #d0f6ff 57%, #d0f6ff 70%, #f3f3f3 84%,  #d1d1d1 94%, #c3c3c3)",
      position: "absolute",
    },
  };
  const combinedStyles = {
    ...platSponsorsStyles.element,
    ...platSponsorsStyles.section_hackathon_23_spring_schedule_bg,
  };
  
platSponsorsStyles.combined = combinedStyles;
  
  
  export default platSponsorsStyles;
  