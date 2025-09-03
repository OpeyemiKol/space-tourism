import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./navbar";

const Layout: React.FC = () => {
  const location = useLocation();
  const path = location.pathname;

  // ✅ Match route groups instead of exact paths
  let bgClass = "";

  if (path.startsWith("/destination")) {
    bgClass =
      "bg-[url('/src/assets/destination/background-destination-mobile.jpg')] md:bg-[url('/src/assets/destination/background-destination-tablet.jpg')] lg:bg-[url('/src/assets/destination/background-destination-desktop.jpg')]";
  } else if (path.startsWith("/crew")) {
    bgClass =
      "bg-[url('/src/assets/crew/background-crew-mobile.jpg')] md:bg-[url('/src/assets/crew/background-crew-tablet.jpg')] lg:bg-[url('/src/assets/crew/background-crew-desktop.jpg')]";
  } else if (path.startsWith("/technology")) {
    bgClass =
      "bg-[url('/src/assets/technology/background-technology-mobile.jpg')] md:bg-[url('/src/assets/technology/background-technology-tablet.jpg')] lg:bg-[url('/src/assets/technology/background-technology-desktop.jpg')]";
  } else {
    // default = home
    bgClass =
      "bg-[url('/src/assets/home/background-home-mobile.jpg')] md:bg-[url('/src/assets/home/background-home-tablet.jpg')] lg:bg-[url('/src/assets/home/background-home-desktop.jpg')]";
  }

  return (
    <div
      className={`w-full min-h-screen bg-cover bg-center bg-no-repeat ${bgClass}`}
    >
      <Navbar />
      <Outlet /> {/* 👈 Renders Homepage / Destination / Crew / Technology */}
    </div>
  );
};

export default Layout;
