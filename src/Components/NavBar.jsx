import NavLink from "./NavLink";
import { RiMenu2Fill } from "react-icons/ri";
import { useState } from "react";
import { CgCloseR } from "react-icons/cg";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Contact", path: "/contact" },
    { id: 4, name: "Products", path: "/products" },
    { id: 5, name: "Dashboard", path: "/dashboard" },
  ];

  const handleMenu = () => {
    setOpen(!open);
  };
  return (
    <nav>
      <div className="lg:flex border items-center p-5 gap-6 bg-slate-300">
        <div onClick={handleMenu} className="lg:hidden">
          {open === true ? (
            <RiMenu2Fill className="text-2xl"></RiMenu2Fill>
          ) : (
            <CgCloseR className="text-2xl"></CgCloseR>
          )}
        </div>
        <div
          className={`lg:flex gap-6 text-lg font-bold mr-5 absolute bg-slate-300
            ${open ? " bg-yellow-400 p-5" : "hidden"}`}
        >
          {routes.map((na) => (
            <NavLink key={na.id} data={na}></NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
