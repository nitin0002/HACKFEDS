import React from "react";
import { BsStarFill } from "react-icons/bs";

const AboutUs = () => {
  return (
    <div className="grid md:grid-cols-2 justify-items-stretch h-min md:h-min bg-gradient-to-b from-transparent via-black to-indigo-950">
      <img
        src="/About.jpg"
        className="md:w-2/4 object-cover rounded-xl p-5 ml-28  bg-opacity-50"
      />

      <div className="text-xl text-white font-medium antialiased space-y-4 -ml-20 mr-20 ">
        <h1 className="text-5xl font-bold antialiased ">
          About Us
        </h1>
        <hr className='styled-hr'/>
        <div className="flex items-center">
          <BsStarFill className="mr-2 text-2xl" />
          <div>
            Community: We believe in the power of collaboration and support our
            members through challenges and triumphs.
          </div>
        </div>
        <div className="flex items-center">
          <BsStarFill className="mr-2" />
          <div>
            Innovation: We believe in pushing boundaries and constantly seeking
            new opportunities to learn and grow.
          </div>
        </div>
        <div className="flex items-center">
          <BsStarFill className="mr-2" />
          <div>
            Empowerment: We believe in the importance of following your passions
            and dreams to realize your true potential.
          </div>
        </div>
        <div className="flex items-center">
          <BsStarFill className="mr-2" />
          <div>
            Diversity: We believe in embracing people of all backgrounds and
            cultures and striving for inclusive practices in our community.
          </div>
        </div>
        <div className="flex items-center">
          <BsStarFill className="mr-2" />
          <div>
            Integrity: We believe in being honest and transparent in our actions
            and decisions.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
