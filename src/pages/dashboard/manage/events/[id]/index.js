import ComissionWidget from "@/components/dashboard/widgets/ComissionWidget";
import EventSummaryWidget from "@/components/dashboard/widgets/EventSummaryWidget";
import GrossRevenueWidget from "@/components/dashboard/widgets/GrossRevenueWidget";
import NetReveueWidget from "@/components/dashboard/widgets/NetReveueWidget";
import TicketsSoldWidget from "@/components/dashboard/widgets/TicketsSoldWidget";
import AppLayout from "@/components/layout/dashboard/AppLayout";
import { useEventDetail } from "@/hooks/eventz";
import { useRouter } from "next/router";
import React from "react";
import { Loader } from "rsuite";

const EventDetailManagement = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading } = useEventDetail(id, ["EventDetailPage", { fields: "id,name" }, id], {
    enabled: id ? true : false,
  });
  return (
    <AppLayout id={id}>
      <h3>Dashboard - {data && data.name} </h3>

      {isLoading && <Loader center vertical />}

      {data && (
        <div className="row">
          <div className="col-md-3">
            <TicketsSoldWidget eventId={data.id} />
          </div>
          <div className="col-md-3">
            <GrossRevenueWidget eventId={data.id} />
          </div>
          <div className="col-md-3">
            <ComissionWidget />
          </div>
          <div className="col-md-3">
            <NetReveueWidget eventId={data.id} />
          </div>
        </div>
      )}
      {/* <div className="row mt-5">
        <div className="col-md-6">
          <EventSummaryWidget />
        </div>
      </div> */}
    </AppLayout>
  );
};

export default EventDetailManagement;
