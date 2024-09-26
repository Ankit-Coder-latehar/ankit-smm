import React from 'react';

const DevelopmentLifecycle = () => {
  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        {/* Title Section */}
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Offering Exclusive Edge Following Custom Software Development Lifecycle
        </h2>
        <p className="mt-4 text-lg text-gray-500">
          Customizing and delivering cutting-edge solutions employing the custom software development lifecycle to help businesses meet their future demands.
        </p>
      </div>

      {/* Lifecycle Steps Section */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {/* Step 1: Ideation */}
        <div className="flex flex-col items-center text-center">
          <div className="text-red-600 text-2xl font-bold">01</div>
          <h3 className="mt-4 text-xl font-bold text-gray-900">Ideation</h3>
          <p className="mt-2 text-gray-500">
            Brainstorm creative ideas to ideate them and come up with a plan to turn them into a successful smart solution.
          </p>
        </div>

        {/* Step 2: Plan */}
        <div className="relative flex flex-col items-center text-center bg-cover bg-center" 
          style={{ backgroundImage: `url('https://img.freepik.com/free-photo/bottom-view-plan-written-black-notepad-lupa-keyboard-binder-clip-pen-black-background_140725-112178.jpg')` }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 p-8">
            <div className="text-red-600 text-2xl font-bold">02</div>
            <h3 className="mt-4 text-xl font-bold text-white">Plan</h3>
            <p className="mt-2 text-white">
              Define the project goals, create a timeline & milestones, and build a team based on your development requirements.
            </p>
          </div>
        </div>

        {/* Step 3: Design */}
        <div className="flex flex-col items-center text-center">
          <div className="text-red-600 text-2xl font-bold">03</div>
          <h3 className="mt-4 text-xl font-bold text-gray-900">Design</h3>
          <p className="mt-2 text-gray-500">
            Build interactive prototypes based on sketches and wireframes to illustrate and visualize the interface of the solution.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DevelopmentLifecycle;
