import { Suspense } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TicketContainer from "./components/TicketContainer";
import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer";
const loadTickets = () => fetch("/ticket.json").then((res) => res.json());

function App() {
  const ticketsPromise = loadTickets();

  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <section>
        <Suspense fallback="Loadding....">
          <TicketContainer promise={ticketsPromise}></TicketContainer>
        </Suspense>
      </section>

      <Footer></Footer>

      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
