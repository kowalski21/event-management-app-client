import React from "react";
import QRCode from "react-qr-code";
const TicketCard = ({ ticket }) => {
  const eventInfo = ticket.event_ticket.eventz;
  const ticketInfo = ticket.event_ticket;
  return (
    <div class="card card-flush bg-gray-200 h-xl-100">
      <div class="card-header flex-nowrap pt-5">
        <h3 class="card-title align-items-start flex-column">
          <span class="card-label fw-bolder fs-2 text-gray-800">{eventInfo.name}</span>
          <span class="mt-1 fw-bold fs-7">Venue Name: {ticket.venue_name}</span>
          <span class="mt-1 fw-bold fs-7">
            {ticket.venue_address},{ticket.event_city}
          </span>
          <span class="mt-1 fw-bolder fs-7">
            {ticket.start_date} - {ticket.end_date}
          </span>
        </h3>
      </div>

      <div class="card-body text-center pt-5">
        <QRCode value={ticket.ticket_code} size={256} style={{ height: "auto", maxWidth: "100%", width: "100%" }} />
        {/* <img src="/media/svg/shapes/dogecoin.svg" class="h-125px mb-5" alt="" /> */}
        <div className="separator separator-dashed my-5"></div>
        <div class="text-start">
          <span class="d-block fw-bolder fs-5 text-gray-800">Owner: {ticket.owner_name}</span>
          <span class="mt-1 fw-bolder fs-7">#Phone: {ticket.owner_phone}</span>
          <br />
          <span class="mt-1 fw-bolder fs-7">#Email: {ticket.owner_email}</span>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
