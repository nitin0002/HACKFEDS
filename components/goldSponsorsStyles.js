const goldSponsorsStyles = {
  element: {
    willChange: "opacity, transform",
    opacity: 0.49546,
    transform:
      "translate3d(30px, 120px, 0px) scale3d(0.958176, 0.958176, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg)",
    transformStyle: "preserve-3d",
  },
  section_hackathon_23_spring_schedule_bg: {
    zIndex: -10,
    width: "90%",
    height: "60%",
    filter: "blur(120px)",
    backgroundImage:
      "linear-gradient(90deg, #ffd700, #ffef99 11%, #ffdb19 23%, #ffdb19 35%, #ffef99 47%, #ffd700 57%, #ffef99 70%, #ffef99 84%, #5055d5 94%, #525ae0)",
    position: "absolute",
  },
};
const combinedStyles = {
  ...goldSponsorsStyles.element,
  ...goldSponsorsStyles.section_hackathon_23_spring_schedule_bg,
};

goldSponsorsStyles.combined = combinedStyles;


export default goldSponsorsStyles;
