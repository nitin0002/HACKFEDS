import React from "react";

function Background() {
  return (
    <div className='-z-10 fixed top-0 left-0 w-full h-full overflow-hidden'
      
    >
      <video
        src="/bgvideo.mp4"
        autoPlay
        loop
        muted
        className="w-full h-full object-cover"
      />
    </div>
  );
}

export default Background;
