import { assetUrl } from "@/lib/asset";
import { prettyDate } from "@/lib/date";
import React, { useState } from "react";
import Link from "next/link";
const imageUrl = "/media/img-44.jpg";
const EventCard = ({ eventItem }) => {
  return (
    <Link href={`/events/${eventItem.id}`}>
      <div className="card border-0">
        <div className="card-body text-center pb-5">
          <a
            className="d-block overlay"
            data-fslightbox="lightbox-hot-sales"
            href={`${eventItem?.thumbnail ? assetUrl(eventItem?.thumbnail) : imageUrl}`}
          >
            <div
              className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded mb-7"
              style={{
                height: "266px",
                backgroundImage: `url(${eventItem?.thumbnail ? assetUrl(eventItem?.thumbnail) : imageUrl})`,
              }}
            ></div>

            <div className="overlay-layer card-rounded bg-dark bg-opacity-25">
              <i className="bi bi-eye-fill fs-2x text-white"></i>
            </div>
          </a>

          <div className="d-flex align-items-end flex-stack mb-1">
            <div className="text-start">
              <span className="fw-bolder text-dark cursor-pointer text-hover-primary fs-4 d-block">
                {eventItem.name}
              </span>
              <span className="badge badge-light fw-bolder fs-8 px-2  py-1">{eventItem?.category?.name}</span> <br />
              <span className="text-gray-700 mt-1 fw-bolder fs-6">{eventItem.organize_name}</span>
            </div>

            {/* <span className="text-gray-600 text-end fw-bolder fs-6">$2,630</span> */}
          </div>

          <div class="d-flex flex-stack mt-auto bd-highlight">
            {/* <div class="symbol symbol-40px me-4"> */}
            <div class="symbol-label px-2 rounded fs-6 fw-bold bg-dark text-inverse-danger">
              {prettyDate(eventItem.start_date)} - {prettyDate(eventItem.end_date)}
            </div>
            {/* </div> */}
            {/* <a
            href="#"
            class="btn btn-primary btn-sm flex-shrink-0 me-3"
            data-bs-toggle="modal"
            data-bs-target="#kt_modal_bidding"
          >
            Place a Bid
          </a> */}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
