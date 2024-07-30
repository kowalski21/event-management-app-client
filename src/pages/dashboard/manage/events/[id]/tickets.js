import EventTicketsTable from "@/components/dashboard/manage/EventTicketsTable";
import AppLayout from "@/components/layout/dashboard/AppLayout";
import { useEventTickets } from "@/hooks/event_ticket";
import { useTickets } from "@/hooks/tickets";
import { useRouter } from "next/router";
import React from "react";

const EventTicketsPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const query = { fields: "*", filter: { eventz: id } };
  const { data, isLoading } = useEventTickets(["MyTickets", query], query, { enabled: id ? true : false });
  return (
    <AppLayout id={id}>
      <h3>Tickets Management Page</h3>

      <div className="row">
        <div className="col-md-12">{data && data?.data && <EventTicketsTable items={data?.data} />}</div>
      </div>
    </AppLayout>
  );
};

export default EventTicketsPage;
