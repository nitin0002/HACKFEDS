const Meetups = () => {
    return (
      <div className="flex flex-wrap justify-center bg-gradient-to-b from-gray-800 via-gray-700 to-indigo-900">
        <div className="flex justify-center w-full mt-48">
          <h1 className="text-6xl font-bold antialiased underline underline-offset-20 decoration-indigo-500 ">Meetups</h1>
        </div>
        <div className="flex flex-row flex-wrap justify-center mt-32">
          <div class="max-w-xs w-full md:w-auto mx-2 my-2 rounded-lg  bg-white/20 backdrop-filter backdrop-blur-sm">
            <img src="hcthon-1.jpg" class="rounded-t-lg" alt="..." />
            <div class="p-6">
              <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                Card title
              </h5>
              <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </p>
            </div>
          </div>
          <div class="max-w-xs w-full md:w-auto mx-2 my-2 rounded-lg bg-white/20 backdrop-filter backdrop-blur-sm">
            <img src="hcthon-3.jpg" class="rounded-t-lg" alt="..." />
            <div class="p-6">
              <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                Card title
              </h5>
              <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </p>
            </div>
          </div>
          <div class="max-w-xs w-full md:w-auto mx-2 my-2 rounded-lg bg-white/20 backdrop-filter backdrop-blur-sm">
            <img src="hcthon-2.jpg" class="rounded-t-lg" alt="..." />
            <div class="p-6">
              <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                Card title
              </h5>
              <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Meetups;
  