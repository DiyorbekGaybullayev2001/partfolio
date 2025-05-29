// components/ContactModal.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const ContactModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const [loading, setloading] = useState(false);
    const SendMessage = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setloading(true);
    
      const token = "7825701840:AAE72IU_urEQ3B-AvXaFNeLw0ytyGwywWqM";
      const chatId = 6079644484;
      const url = `https://api.telegram.org/bot${token}/sendMessage`;
    
      const nameInput = document.getElementById("name") as HTMLInputElement;
      const telInput = document.getElementById("tel") as HTMLInputElement;
      const emailInput = document.getElementById("email") as HTMLInputElement;
      const textsInput = document.getElementById("texts") as HTMLInputElement;
    
      const name = nameInput?.value;
      const tel = telInput?.value;
      const email = emailInput?.value;
      const texts = textsInput?.value;
    
      const message = `Name: ${name} \n  Tel: ${tel} \n  Email: ${email} \n  Texts: ${texts}`;
    
      axios
        .post(url, {
          chat_id: chatId,
          text: message,
        })
        .then(() => {
          const form = document.getElementById("formID") as HTMLFormElement;
          form?.reset();
          setIsOpen(false);
          toast.success("Successfully sent");
        })
        .catch(() => {
          toast.error("Error");
        })
        .finally(() => {
          setloading(false);
        });
    };

  return (
    <div className="">
      <button
        onClick={() => setIsOpen(true)}
        className="bg-gradient-to-r from-purple-700 to-cyan-600 text-white font-semibold px-4 py-2 rounded-full shadow-md hover:scale-105 transition duration-300"
      >
        Contact Me
      </button>
      <ToastContainer/> 

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed left-0 top-0  w-full h-[100vh] bg-[#000000be]  z-50 flex items-center justify-center"
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

              <h2 className="text-2xl font-serif tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-bold mb-4">Contact Me</h2>

              <form
                  className="flex flex-col gap-4" 
                  onSubmit={SendMessage}
                  id="formID">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent border-gradient-to-r from-purple-700 to-cyan-600"
                  required
                  id="name"
                />
                <input
                  type="tel"
                  placeholder="Iphone number"
                  className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent border-gradient-to-r from-purple-700 to-cyan-600"
                  required
                  id="tel"
                />
                <input
                  type="email"
                  placeholder="Email address"
                  className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent border-gradient-to-r from-purple-700 to-cyan-600"
                  id="email"
                />
                <textarea
                  placeholder="Message..."
                  className="border p-2 rounded resize-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent border-gradient-to-r from-purple-700 to-cyan-600"
                  rows={4}
                  required
                  id="texts"
                ></textarea>

                <button
                  type="submit"
                  className="text-lg bg-gradient-to-r font-serif from-purple-700 to-cyan-600 text-white py-2 rounded transition tracking-[2px]  font-bold hover:scale-105 duration-300"
                >
                  {loading ? "Sending..." : "Send Message"}
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
