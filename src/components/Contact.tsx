"use client";

import React, { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { toast } from "sonner";

const Contact = () => {

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    try {
      const formData = new FormData(form);
      setIsLoading(true);
      const response = await fetch("https://formspree.io/f/mdopjqeb", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });
      setIsLoading(false);

      if (response.ok) {
        toast.success("Success! Your message has been sent.");

        form.reset(); // Clear form fields
      } else {
        toast.error("Oops! Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Oops! Something went wrong. Please try again.");
      setIsLoading(false);
    }
  };

  return (
    <section className="py-20 px-4 bg-gray-900" id="contact">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">
          Get In Touch
        </h2>
        <form
          onSubmit={handleSubmit}
          className="space-y-6"
          action="https://formspree.io/f/mdopjqeb"
          method="POST"
        >
          <div>
            <label className="block mb-2 text-white">Name</label>
            <input
              type="text"
              name="name"
              title="Name"
              placeholder="Your name"
              required
              className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none text-white"
            />
          </div>
          <div>
            <label className="block mb-2 text-white">Email</label>
            <input
              type="email"
              name="email"
              title="Email"
              placeholder="Your email"
              required
              className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none text-white"
            />
          </div>
          <div>
            <label className="block mb-2 text-white">Message</label>
            <textarea
              name="message"
              title="Message"
              placeholder="Your message"
              required
              className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none h-32 text-white"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded font-semibold transition-all text-white"
          >
            <div className="flex items-center justify-center gap-2">
              {isLoading && (
                <div className="w-5 h-5 border-2 border-t-transparent border-white rounded-full animate-spin"></div>
              )}
              <span>{isLoading ? "Sending..." : "Send Message"}</span>
            </div>
          </button>
        </form>



        <div className="mt-12 flex justify-center space-x-6 text-white">
          <a
            href="https://github.com/stanstancee"
            target="_blank"
            aria-label="GitHub"
            className="text-3xl hover:text-blue-400 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/stancee/"
            target="_blank"
            aria-label="LinkedIn"
            className="text-3xl hover:text-blue-400 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/luke_stancee"
            target="_blank"
            aria-label="Twitter"
            className="text-3xl hover:text-blue-400 transition-colors"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.facebook.com/Chekwubestanley"
            target="_blank"
            aria-label="Facebook"
            className="text-3xl hover:text-blue-400 transition-colors"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/stanstancee/"
            target="_blank"
            aria-label="Instagram"
            className="text-3xl hover:text-blue-400 transition-colors"
          >
            <FaInstagram />
          </a>
          <a
            href="https://wa.me/8149181923"
            target="_blank"
            aria-label="WhatsApp"
            className="text-3xl hover:text-blue-400 transition-colors"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
