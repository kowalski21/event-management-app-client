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
      {/*begin::Clients*/}
      <div className="d-flex flex-center flex-wrap position-relative px-5">
        {/*begin::Client*/}
        <div className="d-flex flex-center m-3 m-md-6" data-bs-toggle="tooltip" title="Fujifilm">
          <img src="assets/media/svg/brand-logos/fujifilm.svg" className="mh-30px mh-lg-40px" alt="" />
        </div>
        {/*end::Client*/}
        {/*begin::Client*/}
        <div className="d-flex flex-center m-3 m-md-6" data-bs-toggle="tooltip" title="Vodafone">
          <img src="/media/svg/brand-logos/vodafone.svg" className="mh-30px mh-lg-40px" alt="" />
        </div>
        {/*end::Client*/}
        {/*begin::Client*/}
        <div className="d-flex flex-center m-3 m-md-6" data-bs-toggle="tooltip" title="KPMG International">
          <img src="/media/svg/brand-logos/kpmg.svg" className="mh-30px mh-lg-40px" alt="" />
        </div>
        {/*end::Client*/}
        {/*begin::Client*/}
        <div className="d-flex flex-center m-3 m-md-6" data-bs-toggle="tooltip" title="Nasa">
          <img src="/media/svg/brand-logos/nasa.svg" className="mh-30px mh-lg-40px" alt="" />
        </div>
        {/*end::Client*/}
        {/*begin::Client*/}
        <div className="d-flex flex-center m-3 m-md-6" data-bs-toggle="tooltip" title="Aspnetzero">
          <img src="/media/svg/brand-logos/aspnetzero.svg" className="mh-30px mh-lg-40px" alt="" />
        </div>
        {/*end::Client*/}
        {/*begin::Client*/}
        <div className="d-flex flex-center m-3 m-md-6" data-bs-toggle="tooltip" title="AON - Empower Results">
          <img src="/media/svg/brand-logos/aon.svg" className="mh-30px mh-lg-40px" alt="" />
        </div>
        {/*end::Client*/}
        {/*begin::Client*/}
        <div className="d-flex flex-center m-3 m-md-6" data-bs-toggle="tooltip" title="Hewlett-Packard">
          <img src="/media/svg/brand-logos/hp-3.svg" className="mh-30px mh-lg-40px" alt="" />
        </div>
        {/*end::Client*/}
        {/*begin::Client*/}
        <div className="d-flex flex-center m-3 m-md-6" data-bs-toggle="tooltip" title="Truman">
          <img src="/media/svg/brand-logos/truman.svg" className="mh-30px mh-lg-40px" alt="" />
        </div>
        {/*end::Client*/}
      </div>
      {/*end::Clients*/}
    </div>
  );
};

export default MainLandingHero;
