import ComissionWidget from "@/components/dashboard/widgets/ComissionWidget";
import EventSummaryWidget from "@/components/dashboard/widgets/EventSummaryWidget";
import GrossRevenueWidget from "@/components/dashboard/widgets/GrossRevenueWidget";
import NetReveueWidget from "@/components/dashboard/widgets/NetReveueWidget";
import TicketsSoldWidget from "@/components/dashboard/widgets/TicketsSoldWidget";
import AppLayout from "@/components/layout/dashboard/AppLayout";
import { useRouter } from "next/router";
import React from "react";

const EventDetailManagement = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <AppLayout id={id}>
      <h3>Dashboard</h3>

      {id && (
        <div className="row">
          <div className="col-md-3">
            <TicketsSoldWidget eventId={id} />
          </div>
          <div className="col-md-3">
            <GrossRevenueWidget />
          </div>
          <div className="col-md-3">
            <ComissionWidget />
          </div>
          <div className="col-md-3">
            <NetReveueWidget />
          </div>
        </div>
      )}
      <div className="row mt-5">
        <div className="col-md-6">
          <EventSummaryWidget />
        </div>
      </div>
    </AppLayout>
  );
};

export default EventDetailManagement;
