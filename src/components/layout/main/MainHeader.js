import React from "react";
import MainNavItems from "./MainNavItems";
import { TicketCheck } from "lucide-react";
import Link from "next/link";
import { assetUrl } from "@/lib/asset";
import MainAvatarMenu from "./MainAvatarMenu";
import { useAuthUser } from "@/store/auth";
const MainHeader = () => {
  const user = useAuthUser();
  return (
    <div className="landing-header">
      {/*begin::Container*/}
      <div className="container">
        {/*begin::Wrapper*/}
        <div className="d-flex align-items-center justify-content-between">
          {/*begin::Logo*/}
          <div className="d-flex align-items-center flex-equal">
            {/*begin::Mobile menu toggle*/}
            <button className="btn btn-icon btn-active-color-primary me-3 d-flex d-lg-none">
              {/*begin::Svg Icon | path: icons/duotune/abstract/abs015.svg*/}
              <span className="svg-icon svg-icon-2hx">
                <TicketCheck />
              </span>
              {/*end::Svg Icon*/}
            </button>
            {/*end::Mobile menu toggle*/}
            {/*begin::Logo image*/}
            <Link href={`/`} legacyBehavior>
              <a>
                <img alt="Logo" src="/media/landing-1.svg" className="logo-default h-25px h-lg-30px" />
              </a>
            </Link>

            {/*end::Logo image*/}
          </div>
          {/*end::Logo*/}
          {/*begin::Menu wrapper*/}
          {/* <div className="d-lg-block" id="kt_header_nav_wrapper"></div> */}
          <MainNavItems />
          {/*end::Menu wrapper*/}
          {/*begin::Toolbar*/}
          <div className="flex-equal text-end ms-1">
            {user ? (
              <MainAvatarMenu user={user} />
            ) : (
              <Link href={`/auth/login`} legacyBehavior>
                <a className="btn btn-success">Sign In</a>
              </Link>
            )}
          </div>
          {/*end::Toolbar*/}
        </div>
        {/*end::Wrapper*/}
      </div>
      {/*end::Container*/}
    </div>
  );
};

export default MainHeader;
