import NavItemLink from "@/components/reusable/NavItemLink";
import React from "react";

const MainNavItems = () => {
  return (
    <div className="d-lg-block" id="kt_header_nav_wrapper">
      <div className="d-lg-block p-5 p-lg-0">
        <div className="menu menu-column flex-nowrap menu-rounded menu-lg-row menu-title-gray-500 menu-state-title-primary nav nav-flush fs-5 fw-bold">
          <NavItemLink />
          <NavItemLink title="Events" to={`/events`} />
        </div>
      </div>
    </div>
  );
};

export default MainNavItems;
