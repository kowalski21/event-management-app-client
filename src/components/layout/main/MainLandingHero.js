import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
const MainLandingHero = () => {
  return (
    <div className="d-flex flex-column flex-center w-100 min-h-350px min-h-lg-500px px-9">
      {/*begin::Heading*/}
      <div className="text-center mb-5 mb-lg-10 py-10 py-lg-20">
        {/*begin::Title*/}
        <h1 className="text-white lh-base fw-bolder fs-2x fs-lg-3x mb-15">
          Events and Ticketing Management
          <br />
          <span
            style={{
              background: "linear-gradient(to right, #12CE5D 0%, #FFD80C 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            <span id="kt_landing_hero_text">never Got Easier</span>
          </span>
        </h1>
        {/*end::Title*/}
        {/*begin::Action*/}

        <Link href={`/events`} legacyBehavior>
          <a className="btn btn-primary btn-sm">
            View Events
            <ArrowRight className="mx-2" size={15} />
          </a>
        </Link>

        {/*end::Action*/}
      </div>
      {/*end::Heading*/}
    </div>
  );
};

export default MainLandingHero;
