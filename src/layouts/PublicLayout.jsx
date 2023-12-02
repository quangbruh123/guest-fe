import { Outlet } from "react-router-dom";

import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/footer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, getStaticData } from "../store/staticData";

function PublicLayout() {
  const dispatch = useDispatch();
  useEffect(() => {
    let ignore = false;

    async function startFetching() {
      if (!ignore) {
        await dispatch(fetchData());
      }
    }
    startFetching();

    return () => {
      ignore = true;
    };
  }, [dispatch]);

  return (
    <div>
      <Navbar></Navbar>
      <div className="h-[72px]"></div>
      <div className="mt-12 min-h-screen bg-bg-xam-nhat">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default PublicLayout;
