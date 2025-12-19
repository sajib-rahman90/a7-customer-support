import React from "react";

const States = ({ ticketTotal, resolvedTotal }) => {
  return (
    <div className="flex justify-between items-center lg:flex-row flex-col gap-4 my-8">
      {/* card1 */}

      <div className="relative bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1))] w-1/2 px-10 py-14 text-center rounded-lg overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-no-repeat bg-contain bg-[url('/vector1.png')]"></div>

        <div className="absolute bottom-0 right-0  w-full h-full transform scale-x-[-1]  bg-no-repeat bg-contain bg-[url('/vector2.png')]"></div>

        <div className="relative z-10">
          <p className="text-white font-normal text-[24px]">In-Progress</p>
          <h3 className="text-white font-semibold text-6xl">{ticketTotal}</h3>
        </div>
      </div>

      {/* card2 */}
      <div className="relative overflow-hidden bg-[linear-gradient(90deg,rgba(84,207,103.68,1),rgba(0,130,122.2,1))] w-1/2 px-10 py-14 text-center rounded-lg">
        <div className="absolute top-0 left-0 w-full h-full bg-no-repeat bg-contain bg-[url('/vector1.png')]"></div>

        <div className="absolute bottom-0 right-0  w-full h-full transform scale-x-[-1]  bg-no-repeat bg-contain bg-[url('/vector2.png')]"></div>
        <div>
          <p className="text-white font-normal text-[24px]">Resolved</p>
          <h3 className="text-white font-semibold text-6xl">{resolvedTotal}</h3>
        </div>
      </div>
    </div>
  );
};

export default States;
