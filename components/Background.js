import React from "react";

function Background() {
  return (
    <div className='-z-10 fixed top-0 left-0 w-full h-full overflow-hidden dark:bg-black'
      
    >
      <video
        src="/bgvideo.mp4"
        autoPlay
        loop
        muted
        className="w-full h-full object-cover dark:bg-black"
      />
    </div>
  );
}

export default Background;
