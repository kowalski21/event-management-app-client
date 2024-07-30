import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
const NavItemLink = ({ title = "Home", to = "/" }) => {
  const router = useRouter();
  return (
    <div className="menu-item">
      <Link href={to} legacyBehavior>
        <a className={`menu-link ${router.asPath === to && "active"} nav-link py-3 px-4 px-xxl-6 `}>{title}</a>
      </Link>
    </div>
  );
};

export default NavItemLink;
