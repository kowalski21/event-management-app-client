import React, { Children } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import NewTicketDrawerForm from "./NewTicketDrawerForm";
const ToolBarLinks = ({ id = 1 }) => {
  return (
    <div className="d-flex flex-end">
      <BarLink to={`/dashboard/manage/events/${id}`}>Dashboard</BarLink>
      <BarLink to={`/dashboard/manage/events/${id}/edit`}>Update</BarLink>
      <BarLink to={`/dashboard/manage/events/${id}/tickets`}>Tickets</BarLink>
      <BarLink to={`/dashboard/manage/events/${id}/attendees`}>Attendees</BarLink>
      <NewTicketDrawerForm eventId={id} />
    </div>
  );
};

const BarLink = ({ children, to = "/" }) => {
  const router = useRouter();

  return (
    <Link href={to}>
      <button className={`btn ${router.asPath === to ? "btn-dark" : "btn-secondary"} btn-sm me-2`}>{children}</button>
    </Link>
  );
};
export default ToolBarLinks;
