import { Outlet } from "react-router-dom";

import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/footer";

function PublicLayout() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="h-[72px]"></div>
      <div className="mt-12 min-h-screen">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default PublicLayout;
