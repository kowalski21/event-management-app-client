import AttendeesTable from "@/components/dashboard/manage/AttendeesTable";
import AppLayout from "@/components/layout/dashboard/AppLayout";
import { useEventOrders } from "@/hooks/event_order";
import { useRouter } from "next/router";
import React from "react";
import { Loader } from "rsuite";

const EventAttendeesPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const query = {
    fields: "*,ticket_assets.*,ticket_assets.event_ticket.price,ticket_assets.event_ticket.name",
    filter: { eventz: id },
  };
  const { data, isLoading } = useEventOrders(["EventAttendees", id, query], query, { enabled: id ? true : false });
  return (
    <AppLayout id={id}>
      <h3>Attendees List (list of orders made so far)</h3>
      {isLoading && <Loader center vertical />}
      <div className="row">
        <div className="col-md-12">
          <AttendeesTable items={data?.data ? data?.data : []} />
        </div>
      </div>
    </AppLayout>
  );
};

export default EventAttendeesPage;
