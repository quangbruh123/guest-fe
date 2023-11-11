import { Outlet } from "react-router-dom";

import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/footer";

function PublicLayout() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="h-[72px]"></div>
      <div className="min-h-screen bg-slate-100 pt-12">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default PublicLayout;
