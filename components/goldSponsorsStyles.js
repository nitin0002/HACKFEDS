const goldSponsorsStyles = {
  element: {
    willChange: "opacity, transform",
    opacity: 0.79546,
    transform:
      "translate3d(0px, 0px, 0px) scale3d(0.958176, 0.958176, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg)",
    transformStyle: "preserve-3d",
  },
  section_hackathon_23_spring_schedule_bg: {
    zIndex: -10,
    width: "100%",
    height: "100%",
    filter: "blur(120px)",
    backgroundImage:
      "linear-gradient(90deg, #ffd700, #ffef99 11%, #ffdb19 23%, #ffdb19 35%, #aa53b5 47%, #ffd700 57%, #ffef99 70%, #ffef99 84%, #5055d5 94%, #525ae0)",
    position: "absolute",
  },
};
const combinedStyles = {
  ...goldSponsorsStyles.element,
  ...goldSponsorsStyles.section_hackathon_23_spring_schedule_bg,
};

goldSponsorsStyles.combined = combinedStyles;


export default goldSponsorsStyles;
