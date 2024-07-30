import { getStatusColor, wordSlice } from "@/lib/status";
import React from "react";
import Link from "next/link";
const MEventCard = ({ item }) => {
  return (
    <Link href={`/dashboard/manage/events/${item.id}`} legacyBehavior>
      <a className="card border-hover-primary">
        <div className="card-header border-0 pt-9">
          <div className="card-title m-0">
            <div className="symbol symbol-50px w-50px bg-light">
              <img src="/media/svg/brand-logos/disqus.svg" alt="image" className="p-3" />
            </div>
          </div>

          <div className="card-toolbar">
            <span className={`badge ${getStatusColor(item.status).bgCss} fw-bolder me-auto px-4 py-3`}>
              {getStatusColor(item.status).label}
            </span>
          </div>
        </div>

        <div className="card-body p-9">
          <div className="fs-3 fw-bolder text-dark">{item.name}</div>

          <p className="text-gray-400 fw-bold fs-5 mt-1 mb-3">{wordSlice(item.description)}</p>
          <span className={`badge badge-secondary fw-bolder me-auto px-4 mb-3 py-3`}>{item.category.name}</span>
          <div className="d-flex flex-wrap mb-5">
            <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-7 mb-3">
              <div className="fs-6 text-gray-800 fw-bolder">{item.start_date}</div>
              <div className="fw-bold text-gray-400">Start Date</div>
            </div>
            <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-7 mb-3">
              <div className="fs-6 text-gray-800 fw-bolder">{item.end_date}</div>
              <div className="fw-bold text-gray-400">End Date</div>
            </div>
          </div>

          {/* <div className="h-4px w-100 bg-light mb-5">
          <div
            className="bg-info rounded h-4px"
            role="progressbar"
            style={{ width: "30%" }}
            aria-valuenow="30"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div> */}
        </div>
      </a>
    </Link>
  );
};

export default MEventCard;
