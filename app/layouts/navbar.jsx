import { Link, NavLink } from "@remix-run/react";
import { BiShoppingBag } from "react-icons/bi";

export default function Navbar() {
  const links = [
    {
      label: "Home",
      url: "/",
    },
    {
      label: "Products",
      url: "/products",
    },
    {
      label: "About",
      url: "/about",
    },
  ];

  return (
    <nav className="flex items-center justify-between px-8 pt-2">
      {/* Site Logo */}
      <div className="font-mono text-3xl font-extrabold uppercase">
        <Link to="/">
          <img className="w-28" src="/logo.svg" alt="Medusa" />
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="space-x-4">
        {links.map((link, index) => (
          <NavLink key={index} to={link.url} className="navlink">
            {link.label}
          </NavLink>
        ))}
      </div>

      {/* Shopping Cart Indicator/Checkout Link */}
      <div className="font-semibold text-gray-600 hover:text-emerald-500">
        <NavLink
          to="/checkout"
          className="inline-flex items-center space-x-1 transition-colors duration-300"
        >
          <BiShoppingBag className="text-xl" /> <span>0</span>
        </NavLink>
      </div>
    </nav>
  );
}
