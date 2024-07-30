import EventCheckoutCard from "@/components/events/EventCheckoutCard";
import MainLayout from "@/components/layout/main/MainLayout";
import { useEventOrder } from "@/hooks/event_order";
import { useRouter } from "next/router";
import React from "react";
import { Loader } from "rsuite";

const CheckoutPage = () => {
  const query = { fields: "*,eventz.id,eventz.name,lines.*,lines.ticket.id,lines.ticket.name" };
  const router = useRouter();
  const { order_id } = router.query;
  const { data, isLoading } = useEventOrder(order_id, ["CheckoutOrder", order_id, query], query, {
    enabled: order_id ? true : false,
  });
  return (
    <MainLayout showHero={false}>
      <div className="container mt-5">
        <div className="row d-flex justify-content-center">
          <div className="col-md-6 ">
            <h3 className="my-5">Checkout Information - {order_id}</h3>
            {isLoading && <Loader vertical style={{ zIndex: 99 }} center />}

            {data && <EventCheckoutCard item={data} lines={data.lines} event_item={data.eventz} />}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default CheckoutPage;
