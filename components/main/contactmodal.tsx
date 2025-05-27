// components/ContactModal.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ContactModal = () => {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      <button
        onClick={() => setIsOpen(true)}
        className="bg-gradient-to-r from-purple-700 to-cyan-600 text-white font-semibold px-4 py-2 rounded-full shadow-md hover:scale-105 transition duration-300"
      >
        Contact Me
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed top-[150px] sm:top-[400px] left-0  w-full h-full bg-opacity-50 z-50 flex items-center justify-center"
          >
            <motion.div
              initial={{ y: "-100vh" }}
              animate={{ y: 0 }}
              exit={{ y: "100vh" }}
              className="bg-white rounded-xl p-4 w-[90%] sm:w-full max-w-md text-black relative"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-3 right-3 font-bold text-gray-600 hover:text-black"
              >
                &#10005;
              </button>

              <h2 className="text-xl font-serif tracking-widest font-bold mb-4">Contact Me</h2>

              <form className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="FullName"
                  className="border p-2 rounded"
                />
                <input
                  type="tel"
                  placeholder="Iphone number"
                  className="border p-2 rounded"
                />
                <input
                  type="email"
                  placeholder="Email address"
                  className="border p-2 rounded"
                />
                <textarea
                  placeholder="Message..."
                  className="border p-2 rounded resize-none border-gradient-to-r from-purple-600 to-cyan-500"
                  rows={4}
                ></textarea>

                <button
                  type="submit"
                  className="text-lg bg-gradient-to-r font-serif from-purple-700 to-cyan-600 text-white py-2 rounded transition tracking-[2px]  font-bold hover:scale-105 duration-300"
                >
                  SUBMIT
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactModal;
