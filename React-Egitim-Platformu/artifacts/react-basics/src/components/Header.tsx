import React, { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

const navItems = [
  { label: "Giriş", topicId: "react-giris", groupId: "temel" },
  { label: "Props", topicId: "props-temel", groupId: "props" },
  { label: "State", topicId: "state-yonetimi", groupId: "props" },
  { label: "Hooks", topicId: "usestate", groupId: "temel-hooks" },
  { label: "useRef", topicId: "useref", groupId: "temel-hooks" },
];

const Header: React.FC = () => {
  const [menuAcik, setMenuAcik] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark" || 
             (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
    return false;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  const navigate = (topicId: string, groupId: string) => {
    window.dispatchEvent(
      new CustomEvent("navigate-topic", { detail: { topicId, groupId } })
    );
    setMenuAcik(false); // Mobilde seçim sonrası menüyü kapat
  };

  return (
    <header className="bg-blue-600 dark:bg-slate-950 text-white shadow-md border-b dark:border-slate-800 transition-colors duration-200">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold tracking-tight">React Eğitim Sitesi</h1>

        <div className="flex items-center gap-6">
          {/* Masaüstü navigasyon */}
          <nav className="hidden md:flex gap-6" aria-label="Ana navigasyon">
            {navItems.map((item) => (
              <button
                key={item.topicId}
                onClick={() => navigate(item.topicId, item.groupId)}
                className="hover:text-yellow-300 dark:hover:text-blue-400 transition-colors font-medium text-sm"
              >
                {item.label}
              </button>
            ))}
          </nav>
          
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-white/10 dark:hover:bg-slate-800 transition-colors"
            aria-label={isDarkMode ? "Aydınlık Moda Geç" : "Karanlık Moda Geç"}
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Hamburger butonu — sadece mobilde görünür */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-300 dark:focus:ring-blue-400"
            onClick={() => setMenuAcik((prev) => !prev)}
            aria-label={menuAcik ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={menuAcik}
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
                menuAcik ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${
                menuAcik ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
                menuAcik ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobil açılır menü */}
      {menuAcik && (
        <nav
          className="md:hidden bg-blue-700 dark:bg-slate-900 px-4 pb-4 flex flex-col gap-2 border-t dark:border-slate-800 transition-colors"
          aria-label="Mobil navigasyon"
        >
          {navItems.map((item) => (
            <button
              key={item.topicId}
              onClick={() => navigate(item.topicId, item.groupId)}
              className="text-left py-2 px-3 rounded hover:bg-blue-500 dark:hover:bg-slate-800 hover:text-yellow-300 dark:hover:text-blue-400 transition-colors font-medium text-sm"
            >
              {item.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
