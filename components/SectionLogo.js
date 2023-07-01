import { FaDiscord } from "react-icons/fa";
import { SiSololearn } from "react-icons/si";

const SectionLogo = () => {
  return (
    <div className="flex flex-col md:flex items-center justify-center h-screen">
      <h1 className="text-3xl font-semibold tracking-tight font-sans text-slate-200 mb-3 ">
        Inspire. Educate. Empower
      </h1>
      <h2
        className="text-9xl font-bold font-RussoOne tracking-wider -mb-1 
            bg-white bg-clip-text text-transparent"
      >
        HACKFED
      </h2>
      <h3 className="text-lg font-medium leading-7 antialiased tracking-tight font-sans  text-slate-200 capitalize">
        HACKFED is a community of passionate developers who shares a common
        purpose
      </h3>
      <div className="flex flex-row space-x-4 mt-8 ">
        <a href="https://discord.gg/Rw97jUCn6k" target="_blank">
    <button className=" flex py-2 px-4 bg-[#6666F2] text-white font-semibold rounded-lg shadow-md  focus:outline-none focus:ring-2 focus:ring-[#8814a1] focus:ring-opacity-75">
   <FaDiscord className="h-12 w-12"/> 
   <span className="py-2 px-4 text-xl">Join Discord</span>
  </button>
   </a>
  <button className=" flex py-2 px-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold rounded-lg shadow-md hover:from-pink-500 hover:to-yellow-500 focus:outline-none focus:ring-2 focus:ring-ring-[#8814a1] focus:ring-opacity-20">
  <SiSololearn className="h-12 w-12"/> 
  <span className="py-2 px-4 text-xl">Register for Hackfed 1.0</span>
</button>
</div>
    </div>
  );
};

export default SectionLogo;
