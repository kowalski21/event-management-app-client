import TicketCard from "@/components/events/TicketCard";
import MainLayout from "@/components/layout/main/MainLayout";
import { useTickets } from "@/hooks/tickets";
import { useRouter } from "next/router";
import React from "react";
import { Loader } from "rsuite";

const TicketsAssetsPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const query = { fields: "*,event_ticket.id,event_ticket.name,event_ticket.eventz.name", filter: { event_order: id } };

  const { isLoading, data } = useTickets(["TicketAssets", id, query], query, { enabled: id ? true : false });
  return (
    <MainLayout showHero={false}>
      {isLoading && <Loader center vertical />}

      <div className="container mt-5">
        <h3 className="text-center fs-2 fw-bolder">Your Tickets</h3>
        <div className="separator separator-dashed my-10"></div>

        <div className="row mt-5 justify-content-center">
          {data &&
            data?.data.map((item) => {
              return (
                <div className="col-md-3" key={item.id}>
                  <TicketCard ticket={item} />
                </div>
              );
            })}
        </div>
      </div>
    </MainLayout>
  );
};

export default TicketsAssetsPage;
