import React from "react";

const Home = () => {
  return (
    <div>
          <div className=''>
        <div className='container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-900'>
          <h1 className='text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-gray-900'>
            Welcome To Learning Platfrom
          </h1>
          <p className='mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-gray-900'>
          Good study habits include finding a quiet location to study, taking breaks, settings goals, and taking practice tests. Here's the full list, and the psychological reasons why they work.Studying can be hard. The good news is that anybody can develop good study habits to make studying more effective, efficient, and enjoyable.
          </p>
          <div className='flex flex-wrap justify-center'>
            <button
              type='button'
              className='px-8 py-3 m-2 text-lg font-semibold rounded bg-gray-800 hover:bg-gray-700 text-gray-50'
            >
              Visit Profile
            </button>

            <button
              type='button'
              className='px-8 py-3 m-2 text-lg font-semibold rounded bg-gray-800 hover:bg-gray-700 text-gray-50'
            >
              Login
            </button>

            <button
              type='button'
              className='px-8 py-3 m-2 text-lg border rounded border-gray-700 text-gray-900'
            >
              Register
            </button>
          </div>
        </div>
      </div>
            



    </div>
  );
};

export default Home;
