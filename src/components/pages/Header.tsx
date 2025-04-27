import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-cyan-200 p-5 rounded-2xl shadow-md">
      <nav>
        <ul className="flex justify-center space-x-10">
          <li>
            <Link
              to="/"
              className="text-lg font-semibold text-gray-700 hover:text-cyan-800 transition-colors duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/report"
              className="text-lg font-semibold text-gray-700 hover:text-cyan-800 transition-colors duration-300"
            >
              Report Incident
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-lg font-semibold text-gray-700 hover:text-cyan-800 transition-colors duration-300"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
