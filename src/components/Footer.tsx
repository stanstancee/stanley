import React from "react";

const Footer = () => {
  return (
    <footer className="py-8 px-4 text-center bg-gray-900 border-t border-gray-300 text-white">
      <p>© {new Date().getFullYear()} Stanley Ifeoha. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
