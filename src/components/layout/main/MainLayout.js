import React from "react";
import MainHeader from "./MainHeader";
import MainLandingHero from "./MainLandingHero";
import { useAuth } from "@/hooks/auth";

const MainLayout = ({ children, showHero = true }) => {
  const { data, isLoading } = useAuth();
  return (
    <div className="d-flex flex-column flex-root">
      <div className="mb-0">
        <div
          className="bgi-no-repeat bgi-size-contain bgi-position-x-center bgi-position-y-bottom landing-dark-bg"
          style={{ backgroundImage: "url(/media/landing.svg)" }}
          // style={{ backgroundImage: "url(/media/event-management.svg)" }}
        >
          <MainHeader />
          {showHero && <MainLandingHero />}
        </div>
      </div>
      {children}
    </div>
  );
};

export default MainLayout;
