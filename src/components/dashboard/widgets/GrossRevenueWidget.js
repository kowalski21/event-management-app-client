import React from "react";

const GrossRevenueWidget = () => {
  return (
    <a href="#" className="card bg-body hoverable card-xl-stretch mb-xl-8">
      {" "}
      <div className="card-body">
        <span className="svg-icon svg-icon-primary svg-icon-3x ms-n1">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <rect x="8" y="9" width="3" height="10" rx="1.5" fill="currentColor"></rect>
            <rect opacity="0.5" x="13" y="5" width="3" height="14" rx="1.5" fill="currentColor"></rect>
            <rect x="18" y="11" width="3" height="8" rx="1.5" fill="currentColor"></rect>
            <rect x="3" y="13" width="3" height="6" rx="1.5" fill="currentColor"></rect>
          </svg>
        </span>

        <div className="text-gray-900 fw-bolder fs-2 mb-2 mt-5">500M$</div>
        <div className="fw-bolder text-gray-800">Gross Revenue</div>
      </div>
    </a>
  );
};

export default GrossRevenueWidget;
