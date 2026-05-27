import { useState } from "react";

const navLinks = [
  "Dashboard",
  "Branch Performance",
  "Customers",
  "Transactions",
  "Risk",
  "Reports",
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-6">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-700 whitespace-nowrap">
          Bank<span className="text-gray-900">Ops</span>
        </h1>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-7 text-gray-700 font-medium whitespace-nowrap">
          {navLinks.map((link) => (
            <li key={link}>
              <a href="#" className="hover:text-blue-600 transition">
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <button className="hidden lg:block bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition whitespace-nowrap">
          Launch Dashboard
        </button>

        {/* Mobile Menu Icon */}
        <button
          className="lg:hidden text-3xl cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden fixed top-20 left-0 w-full bg-white/90 backdrop-blur-md shadow-lg px-6 py-5 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="block text-gray-700 hover:text-blue-600 focus:text-blue-600 transition"
            >
              {link}
            </a>
          ))}

          <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 transition">
            Launch Dashboard
          </button>
        </div>
      )}
      
    </nav>
  );
}