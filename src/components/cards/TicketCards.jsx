import { Calendar } from "lucide-react";
import React from "react";

const TicketCards = ({ ticket, handleTicket }) => {
  return (
    <div>
      <div
        onClick={() => handleTicket(ticket)}
        class=" bg-white rounded-xl shadow p-5 border border-gray-200"
      >
        <div class="flex items-start justify-between">
          <div>
            <h2 class="text-lg font-semibold">{ticket.title}</h2>
          </div>
          <span
            className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${
              ticket.status === "In-Progress"
                ? "bg-yellow-100 text-yellow-500"
                : "bg-green-100 text-green-500"
            }`}
          >
            <span
              className={`w-2 h-2 rounded-full ${
                ticket.status === "In-Progress"
                  ? "bg-yellow-500"
                  : "bg-green-500"
              }`}
            ></span>

            {ticket.status}
          </span>
        </div>
        <p class="font-normal text-[#8996A1] text-[16px] mt-1 ">
          {ticket.description}
        </p>

        <div class="flex items-center justify-between mt-4 text-sm text-gray-700">
          <div class="flex items-center gap-3">
            <span class="font-medium">#{ticket.id}</span>

            <span
              className={`text-green-100 font-semibold ${
                ticket.priority == "HIGH PRIORITY"
                  ? "text-red-600 font-semibold "
                  : ticket.priority == "MEDIUM PRIORITY"
                  ? "text-yellow-500"
                  : "text-green-500 "
              }`}
            >
              {ticket.priority}
            </span>
          </div>

          <div class="flex items-center gap-3">
            <span>{ticket.customer}</span>
            <div class="flex items-center gap-1 text-gray-600">
              <span className="flex gap-1">
                <span>
                  <Calendar></Calendar>
                </span>
                <span>{ticket.createdAt}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketCards;
