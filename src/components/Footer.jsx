import { Facebook, Linkedin, Mail, Twitter } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-black text-gray-300 p-20">
        <div className="w-11/12 mx-auto grid md:grid-cols-5 gap-8">
          <div>
            <h3 className="text-white text-xl font-bold mb-2">
              CS — Ticket System
            </h3>
            <p className=" space-y-1 text-sm text-[#a1a1aa]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div>
            <h4 className="text-white text-xl font-medium mb-2">Company</h4>
            <ul className="space-y-4 text-sm text-[#a1a1aa]">
              <li>About Us</li>
              <li>Our Mission</li>
              <li>Contact Saled</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-xl font-medium mb-2">Services</h4>
            <ul className="space-y-4 text-sm text-[#a1a1aa]">
              <li>Products & Services</li>
              <li>Coustomer Stories</li>
              <li>Download Apps</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-xl font-medium mb-2">Information</h4>
            <ul className="space-y-4 text-sm text-[#a1a1aa]">
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Join Us</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-xl font-medium mb-2">
              Social Links
            </h4>
            <ul className="space-y-4 text-sm text-[#a1a1aa] ">
              <li className="inline-flex">
                <Twitter></Twitter>
                @CS — Ticket System
              </li>
              <li className="inline-flex">
                <Linkedin></Linkedin> @CS — Ticket System
              </li>
              <li className="inline-flex">
                <Facebook></Facebook>@CS — Ticket System
              </li>
              <li className="inline-flex">
                <Mail></Mail> support@cst.com
              </li>
            </ul>
          </div>
        </div>
        <div className="text-left md:text-center text-[#fafafa] text-sm font-normal py-4 mt-8 border-t-2 border-[#e5e7eb5d]">
          © 2025 CS — Ticket System.
          <br className="block md:hidden" /> All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
