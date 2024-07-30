import React from "react";

const MainSectionStats = () => {
  return (
    <div className="pb-15 pt-18 landing-dark-bg">
      {/*begin::Container*/}
      <div className="container">
        {/*begin::Heading*/}
        <div className="text-center mt-15 mb-18" id="achievements" data-kt-scroll-offset="{default: 100, lg: 150}">
          {/*begin::Title*/}
          <h3 className="fs-2hx text-white fw-bolder mb-5">We Make Things Better</h3>
          {/*end::Title*/}
          {/*begin::Description*/}
          <div className="fs-5 text-gray-700 fw-bold">
            Save thousands to millions of bucks by using single tool
            <br />
            for different amazing and great useful admin
          </div>
          {/*end::Description*/}
        </div>
        {/*end::Heading*/}
        {/*begin::Statistics*/}
        <div className="d-flex flex-center">
          {/*begin::Items*/}
          <div className="d-flex flex-wrap flex-center justify-content-lg-between mb-15 mx-auto w-xl-900px">
            {/*begin::Item*/}
            <div
              className="d-flex flex-column flex-center h-200px w-200px h-lg-250px w-lg-250px m-3 bgi-no-repeat bgi-position-center bgi-size-contain"
              style={{ backgroundImage: "url('assets/media/svg/misc/octagon.svg')" }}
            >
              {/*begin::Symbol*/}
              {/*begin::Svg Icon | path: icons/duotune/general/gen025.svg*/}
              <span className="svg-icon svg-icon-2tx svg-icon-white mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <rect x="2" y="2" width="9" height="9" rx="2" fill="currentColor" />
                  <rect opacity="0.3" x="13" y="2" width="9" height="9" rx="2" fill="currentColor" />
                  <rect opacity="0.3" x="13" y="13" width="9" height="9" rx="2" fill="currentColor" />
                  <rect opacity="0.3" x="2" y="13" width="9" height="9" rx="2" fill="currentColor" />
                </svg>
              </span>
              {/*end::Svg Icon*/}
              {/*end::Symbol*/}
              {/*begin::Info*/}
              <div className="mb-0">
                {/*begin::Value*/}
                <div className="fs-lg-2hx fs-2x fw-bolder text-white d-flex flex-center">
                  <div
                    className="min-w-70px counted"
                    data-kt-countup="true"
                    data-kt-countup-value="700"
                    data-kt-countup-suffix="+"
                  >
                    700+
                  </div>
                </div>
                {/*end::Value*/}
                {/*begin::Label*/}
                <span className="text-gray-600 fw-bold fs-5 lh-0">Known Companies</span>
                {/*end::Label*/}
              </div>
              {/*end::Info*/}
            </div>
            {/*end::Item*/}
            {/*begin::Item*/}
            <div
              className="d-flex flex-column flex-center h-200px w-200px h-lg-250px w-lg-250px m-3 bgi-no-repeat bgi-position-center bgi-size-contain"
              style={{ backgroundImage: "url('assets/media/svg/misc/octagon.svg')" }}
            >
              {/*begin::Symbol*/}
              {/*begin::Svg Icon | path: icons/duotune/graphs/gra008.svg*/}
              <span className="svg-icon svg-icon-2tx svg-icon-white mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M13 10.9128V3.01281C13 2.41281 13.5 1.91281 14.1 2.01281C16.1 2.21281 17.9 3.11284 19.3 4.61284C20.7 6.01284 21.6 7.91285 21.9 9.81285C22 10.4129 21.5 10.9128 20.9 10.9128H13Z"
                    fill="currentColor"
                  />
                  <path
                    opacity="0.3"
                    d="M13 12.9128V20.8129C13 21.4129 13.5 21.9129 14.1 21.8129C16.1 21.6129 17.9 20.7128 19.3 19.2128C20.7 17.8128 21.6 15.9128 21.9 14.0128C22 13.4128 21.5 12.9128 20.9 12.9128H13Z"
                    fill="currentColor"
                  />
                  <path
                    opacity="0.3"
                    d="M11 19.8129C11 20.4129 10.5 20.9129 9.89999 20.8129C5.49999 20.2129 2 16.5128 2 11.9128C2 7.31283 5.39999 3.51281 9.89999 3.01281C10.5 2.91281 11 3.41281 11 4.01281V19.8129Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              {/*end::Svg Icon*/}
              {/*end::Symbol*/}
              {/*begin::Info*/}
              <div className="mb-0">
                {/*begin::Value*/}
                <div className="fs-lg-2hx fs-2x fw-bolder text-white d-flex flex-center">
                  <div
                    className="min-w-70px counted"
                    data-kt-countup="true"
                    data-kt-countup-value="80"
                    data-kt-countup-suffix="K+"
                  >
                    80K+
                  </div>
                </div>
                {/*end::Value*/}
                {/*begin::Label*/}
                <span className="text-gray-600 fw-bold fs-5 lh-0">Statistic Reports</span>
                {/*end::Label*/}
              </div>
              {/*end::Info*/}
            </div>
            {/*end::Item*/}
            {/*begin::Item*/}
            <div
              className="d-flex flex-column flex-center h-200px w-200px h-lg-250px w-lg-250px m-3 bgi-no-repeat bgi-position-center bgi-size-contain"
              style={{ backgroundImage: "url('assets/media/svg/misc/octagon.svg')" }}
            >
              {/*begin::Symbol*/}
              {/*begin::Svg Icon | path: icons/duotune/ecommerce/ecm002.svg*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSectionStats;
