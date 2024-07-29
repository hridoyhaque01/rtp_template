import { Outlet } from "react-router-dom";
function Layout() {
  return (
    <Outlet></Outlet>

    // <div className="bg-bg bg-cover object-cover bg-center text-white h-screen w-full overflow-hidden">
    //   <div className="h-full flex gap-10">
    //     <div className="">
    //       <Sidebar></Sidebar>
    //     </div>
    //     <div className="w-full">
    //       {/* <Navbar></Navbar> */}
    //       <div className="h-full w-full overflow-auto">
    //         <Outlet></Outlet>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Layout;
