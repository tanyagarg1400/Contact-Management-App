import contact from "../utils/contact-book.png";
import bar from "../utils/bar-chart.png";
import { NavLink } from "react-router-dom";
export default function Sidebar() {
  return (
    <div className="flex border-r-2">
      <div className="flex pt-16 flex-col h-screen p-3 bg-gray-600 shadow w-60">
        <div className="space-y-3">
          <div className="flex items-center">
            <h2 className="text-xl mt-4 font-bold">Dashboard</h2>
          </div>
          <div className="flex-1">
            <ul className="pt-2 pb-4 space-y-1 text-sm">
              <li className="rounded-sm">
                <NavLink
                  to="/"
                  className="flex items-center p-2 space-x-3 rounded-md"
                  style={({ isActive }) => ({
                    backgroundColor: isActive ? "white" : "",
                  })}
                >
                  <img src={contact} />
                  <span>Contacts</span>
                </NavLink>
              </li>
              <li className="rounded-sm">
                <NavLink
                  to="/dashboard"
                  className="flex items-center p-2 space-x-3 rounded-md"
                  style={({ isActive }) => ({
                    backgroundColor: isActive ? "white" : "",
                  })}
                >
                  <img src={bar} alt="" />
                  <span>Charts And Maps</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
