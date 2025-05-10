"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { usePathname } from "next/navigation";

export function CourseDate() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const courses = [
    {
      level: 1,
      title: "Hijama Practitioner Launchpad",
      dates: ["June 5, 2025", "June 15, 2025", "July 5, 2025"],
    },
    {
      level: 2,
      title: "Hijama Practitioner Pro",
      dates: ["July 10, 2025", "July 20, 2025", "August 5, 2025"],
    },
    {
      level: 3,
      title: "Hijama Pro Plus",
      isWhatsApp: true,
      whatsappText: "Click to contact us on WhatsApp",
      whatsappUrl: "https://wa.me/+918009944335",
    },
  ];

  const buttonTopPosition = isMounted
    ? pathname === "/"
      ? "top-[155px]"
      : "top-[265px]"
    : "top-[155px]";

  if (!isMounted) return null;

  return (
    <>
      {!isOpen && (
        <button
          className={`fixed right-0 ${buttonTopPosition} mt-[-115px] md:mt-0 md:top-[330px] z-40 btn_hotline`}
          onClick={() => setIsOpen(true)}
        >
          <div className="px-5 py-3 bg-blackshed border border-gray-400 hover:bg-primary/80 text-white uppercase font-semibold rounded-l-3xl">
            View Course Dates
          </div>
        </button>
      )}

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="fixed z-20 inset-0 bg-black/80 cursor-pointer"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ y: -60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -60, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="fixed z-50 inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
            >
              <div className="relative bg-white mt-40 border border-gray-200 rounded-xl w-full max-w-3xl shadow-2xl px-8 py-10">
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 p-1 rounded-full bg-gray-100 hover:bg-gray-200 transition"
                  aria-label="Close"
                >
                  <X className="w-5 h-5 text-gray-800" />
                </button>

                <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-4 md:mb-8">
                  Upcoming Course Dates
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-6 max-h-[350px] overflow-y-auto pr-2">
                  {courses.map((course, index) => {
                    return (
                      <div
                        key={index}
                        className="group p-4 md:p-5 rounded-lg bg-gray-300 hover:bg-primary text-gray-800 hover:text-white shadow-sm hover:shadow-md transition-all block"
                      >
                        <h2 className="text-lg font-semibold mb-1">
                          Level <span className="font-sans font-medium">{course.level}</span>
                        </h2>
                        <h3 className="text-xl font-bold text-green-700 group-hover:text-white mb-2">
                          {course.title}
                        </h3>

                        {course.isWhatsApp ? (
                          <a
                            href={course.whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setIsOpen(false)}
                            className="underline text-sm group-hover:text-white"
                          >
                            {course.whatsappText}
                          </a>
                        ) : (
                          course.dates && (
                            <div className="relative">
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  e.preventDefault();
                                  setOpenDropdown(
                                    openDropdown === course.title ? null : course.title
                                  );
                                }}
                                className="text-md font-medium underline group-hover:text-white"
                              >
                                {openDropdown === course.title ? "Hide Dates" : "View Dates"}
                              </button>

                              {openDropdown === course.title && (
                                <div className="absolute left-0 mt-2 w-56 bg-white border border-gray-300 shadow-lg rounded-lg z-50">
                                  <ul className="py-2 px-3 space-y-1 text-sm text-gray-800">
                                    {course.dates.map((date, idx) => (
                                      <li
                                        key={idx}
                                        className="hover:text-primary transition"
                                      >
                                        {date}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                            </div>
                          )
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
