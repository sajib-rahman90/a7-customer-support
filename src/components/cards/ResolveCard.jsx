import React from "react";

const ResolveCard = ({ item }) => {
  return (
    <div>
      <div class="w-full max-w-xl mx-auto bg-white shadow rounded-md p-4">
        <h3 class="text-gray-800 font-medium mb-1">{item.title}</h3>

        <div class="flex items-center gap-1 text-green-600 text-sm font-medium">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeLidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
          Completed
        </div>
      </div>
    </div>
  );
};

export default ResolveCard;
