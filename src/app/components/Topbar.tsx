import {  Instagram, Youtube } from "lucide-react";
import { FaLocationDot, FaUserDoctor } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";
import { memo } from "react";

const socialLinks = [
  
  {
    href: "https://www.instagram.com/i.revive_hyd?igsh=MXB3aXllMmk2ZXFzZQ==",
    icon: <Instagram size={22} />,
    label: "Instagram",
  },
  {
    href: "https://youtube.com/@i-revive4714?si=jG9xuzmtJMG8GmCu",
    icon: <Youtube size={22} />,
    label: "YouTube",
  },
 
];

const Topbar = () => {
  return (
    <div className="bg-blackshed text-white px-2 md:px-4 py-2 text-sm">
      <div className="container mx-auto flex flex-col md:flex-row justify-between md:justify-between items-center">
        {/* Location & Phone - Desktop Only */}
        <div className="items-center space-x-4 ml-3 hidden md:flex">
          <span className="flex items-center text-lg">
            <FaLocationDot size={16} className="text-primary mr-1" />
            Mehdipatnam, Hyderabad, Telangana
          </span>
        </div>
       <div className="text-center text-lg hidden lg:flex items-center justify-center space-x-2">
          <span>Saturday to Thursday 9am to 6pm</span>
          <FaUserDoctor
            className="text-blue-600"
            size={24}
          />
          <FaUserDoctor
            className="text-pink-500"
            size={24}
            style={{ transform: "scaleX(-1)" }}
          />
        </div>
        <div className="flex space-x-4 justify-center items-center lg:pr-5">
          <Link href="tel:+918009944335" className="lg:flex items-center text-lg hidden mr-2">
            <FaPhoneAlt size={16} className="text-primary mr-1" />
            800-9944-335
          </Link>
          {socialLinks.map(({ href, icon, label }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-primary bg-white hover:bg-primary hover:text-white border rounded-full p-1 transition-colors duration-200"
            >
              {icon}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(Topbar); 
