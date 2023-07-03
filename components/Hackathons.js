const Hackathons = () => {
  return (
    <div className="flex flex-wrap justify-center bg-gradient-to-t from-gray-800 via-gray-800 to-indigo-950 text-white">
      <div className="flex justify-center w-full mt-48">
        <h1 className="text-6xl font-bold antialiased underline underline-offset-20 decoration-indigo-500 ">Hackathons</h1>
      </div>
      <div className="flex flex-row flex-wrap justify-center mt-32">
        <div className="max-w-xs w-full md:w-auto mx-2 my-2 rounded-lg  bg-white/20 backdrop-filter backdrop-blur-sm">
          <img src="hcthon-1.jpg" className="rounded-t-lg" alt="..." />
          <div className="p-6 text-">
            <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              Card title
            </h5>
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div className="max-w-xs w-full md:w-auto mx-2 my-2 rounded-lg bg-white/20 backdrop-filter backdrop-blur-sm">
          <img src="hcthon-3.jpg" className="rounded-t-lg" alt="..." />
          <div className="p-6">
            <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              Card title
            </h5>
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div className="max-w-xs w-full md:w-auto mx-2 my-2 rounded-lg bg-white/20 backdrop-filter backdrop-blur-sm">
          <img src="hcthon-2.jpg" className="rounded-t-lg" alt="..." />
          <div className="p-6">
            <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              Card title
            </h5>
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hackathons;
