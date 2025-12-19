import React from "react";

const TaskCards = ({ ticket, handleResolvedItems }) => {
  return (
    <div>
      <div class="w-full max-w-sm mx-auto bg-white rounded-lg shadow p-5">
        <h2 class="text-lg font-semibold text-gray-800 mb-4">{ticket.title}</h2>

        <button
          onClick={() => handleResolvedItems(ticket)}
          class="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 rounded"
        >
          Complete
        </button>
      </div>
    </div>
  );
};

export default TaskCards;
