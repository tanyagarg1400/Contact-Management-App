import { useLocation } from "react-router-dom";
import "./App.css";
import SideBar from "./Components/SideBar";
import AllRoutes from "./Pages/AllRoutes";

function App() {
  const location = useLocation();
  const currentRoute = location.pathname;

  return (
    <div className="App">
      <h1 className="z-50 w-full fixed shadow-sm shadow-slate-700 top-0 text-2xl text-white bg-gray-800 font-bold p-4">
        {currentRoute == "/" || "/contact_form" || "/edit/:id"
          ? " CONTACT MANAGEMENT APP"
          : "CHARTS AND MAPS"}
      </h1>
      <div className="flex w-full ">
        <div className="sticky  top-0 h-screen">
          <SideBar />
        </div>
        <div className="w-full">
          <AllRoutes />
        </div>
      </div>
    </div>
  );
}

export default App;
