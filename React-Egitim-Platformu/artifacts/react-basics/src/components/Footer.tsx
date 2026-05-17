import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center p-6">
        <p className="text-sm">
          © 2026 React Eğitim Sitesi. Tüm hakları saklıdır.
        </p>

        <div className="flex gap-4 mt-4 md:mt-0">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://react.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            React Docs
          </a>
          <a
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Tailwind
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
