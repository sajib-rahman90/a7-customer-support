import React, { use, useState } from "react";
import States from "./States";
import TicketCards from "./cards/TicketCards";
import TaskCards from "./cards/TaskCards";
import ResolveCard from "./cards/ResolveCard";
import { toast } from "react-toastify";

const TicketContainer = ({ promise }) => {
  const data = use(promise);
  // console.log(tickets);
  const [tickets, setTickes] = useState(data);

  const [taskItems, setTaskItems] = useState([]);
  const [resolvedItems, setResolvedItems] = useState([]);

  const handleTicket = (ticket) => {
    // console.log(ticket);
    // alert("");
    toast.success("In-Progress!");

    const isExist = taskItems.find((item) => item.id == ticket.id);

    if (isExist) {
      // alert("Allready have to Task Status!");
      // toast("Allready have to Task Status!");
      return;
    }
    const newTaskItems = [...taskItems, ticket];
    setTaskItems(newTaskItems);
  };

  const handleResolvedItems = (ticket) => {
    // alert("Completed!");
    toast.success("Completed!");
    const newresolvedItems = [...resolvedItems, ticket];
    setResolvedItems(newresolvedItems);

    const remaining = taskItems.filter((item) => item.id !== ticket.id);
    // console.log(remaining);
    setTaskItems(remaining);

    const remainingTickets = tickets.filter((item) => item.id !== ticket.id);
    setTickes(remainingTickets);
  };

  console.log(taskItems);
  return (
    <div className="bg-[#F5F5F5]">
      <div className="w-11/12 mx-auto py-6">
        <States
          resolvedTotal={resolvedItems.length}
          ticketTotal={taskItems.length}
        ></States>

        <section className=" grid grid-cols-1 lg:grid-cols-12 gap-5 ">
          <div className="grid col-span-8">
            <h3 className="text-2xl font-semibold">Customer Tickets</h3>
            <div className="space-y-5 grid grid-cols-1 lg:grid-cols-2 gap-2.5">
              {tickets.map((ticket) => (
                <TicketCards
                  handleTicket={handleTicket}
                  key={ticket.id}
                  ticket={ticket}
                ></TicketCards>
              ))}
            </div>
          </div>
          <div className="grid col-span-4 ">
            <div className="space-y-5">
              <h3 className="text-2xl font-semibold">Task Status</h3>
              <div className=" shadow p-5 rounded-s-sm space-y-5">
                {taskItems.map((ticket) => (
                  <TaskCards
                    handleResolvedItems={handleResolvedItems}
                    key={ticket.id}
                    ticket={ticket}
                  ></TaskCards>
                ))}
              </div>
              <h3 className="text-2xl font-semibold">Resolved Task</h3>
              <div className="shadow p-5 rounded-s-sm space-y-5">
                {resolvedItems.map((item) => (
                  // <h2>{item.title}</h2>
                  <ResolveCard key={item.id} item={item}></ResolveCard>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TicketContainer;
