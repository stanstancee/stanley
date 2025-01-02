import React from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = ({ show }: { show: boolean }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    show && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-blue-600 p-3 rounded-full hover:bg-blue-700 transition-all"
        title="Scroll to top"
      >
        <FaArrowUp />
      </button>
    )
  );
};

export default ScrollToTopButton;
