import React from "react";

const AboutUs = () => {
  return (
    <div className="flex flex-col justify-between gap-5 py-20 lg:flex-row lg:gap-12 bg-gradient-to-b from-transparent via-black to-indigo-950">
      <img
        src="/About.jpg"
        className="inline-block flex-grow border-none object-cover rounded-lg mx-auto lg:max-w-lg w-11/12 "
      />

      <div className="text-xl text-white font-medium antialiased flex w-full shrink-0 flex-col gap-6 lg:w-1/2 px-5">
        <h1 className="text-5xl font-bold antialiased ">About Us</h1>
        <hr className="styled-hr" />
        <ul className="flex flex-col gap-6 font-medium text-content first:mt-0">
          <li className="tracking-wider flex  gap-2">
            <svg
              className=" text-base fill-current stroke-current flex-shrink-0 h-4 w-4"
              viewBox="0 0 1024 1024"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
            </svg>
            <span>
              {" "}
              Community : We believe in the power of collaboration and support
              our{" "}
              <span className="highlight highlight--white">
                {" "}
                through challenges and triumphs.{" "}
              </span>
            </span>
          </li>
          <li className="tracking-wider flex  gap-2">
            <svg
              className=" text-base fill-current stroke-current flex-shrink-0 h-4 w-4"
              viewBox="0 0 1024 1024"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
            </svg>
            <span>
              Innovation :{" "}
              <span className="highlight highlight--white">
                We believe in pushing boundaries and constantly seeking new
                opportunities{" "}
              </span>
              <span className="highlight highlight--white">
                {" "}
                to learn and grow.
              </span>
            </span>
          </li>
          <li className="tracking-wider flex  gap-2">
            <svg
              className=" text-base fill-current stroke-current flex-shrink-0 h-4 w-4"
              viewBox="0 0 1024 1024"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
            </svg>
            <span>
              Empowerment :{" "}
              <span className="highlight highlight--white">
                We believe in the importance of following your passions{" "}
              </span>
              and dreams to realize your true potential.
            </span>
          </li>
          <li className="tracking-wider flex  gap-2">
            <svg
              className=" text-base fill-current stroke-current flex-shrink-0 h-4 w-4"
              viewBox="0 0 1024 1024"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
            </svg>
            <span>
              Diversity: We believe in embracing{" "}
              <span className="highlight highlight--white">
                people of all backgrounds and cultures{" "}
              </span>
              and striving for inclusive practices in our community.
            </span>
          </li>
        </ul>
        {/* <div className="flex items-center">
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
        </div> */}
      </div>
    </div>
  );
};

export default AboutUs;
