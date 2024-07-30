import { SearchIcon } from "lucide-react";
import React from "react";

const EventSummaryWidget = () => {
  return (
    <div className="card card-flush h-md-100">
      <div className="card-header py-7 fw-bolder fs-4">Summary Stats</div>
      <div className="card-body pt-0">
        <div className="mb-0">
          <div className="d-flex flex-stack">
            <div className="d-flex align-items-center me-5">
              <div className="symbol symbol-30px me-5">
                <span className="symbol-label">
                  <span className="svg-icon svg-icon-3 svg-icon-gray-600">
                    <SearchIcon />
                  </span>
                </span>
              </div>

              <div className="me-5">
                <a href="#" className="text-gray-800 fw-bolder text-hover-primary fs-6">
                  Search Retargeting
                </a>

                <span className="text-gray-400 fw-bold fs-7 d-block text-start ps-0">Direct link clicks</span>
              </div>
            </div>

            <div className="d-flex align-items-center">
              <span className="text-gray-800 fw-bolder fs-6 me-3">0.24%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventSummaryWidget;
