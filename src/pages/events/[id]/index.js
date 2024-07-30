import EventInfoCard from "@/components/events/EventInfoCard";
import EventOrderForm from "@/components/events/EventOrderForm";
import AppLayout from "@/components/layout/dashboard/AppLayout";
import MainLayout from "@/components/layout/main/MainLayout";
import BackButton from "@/components/reusable/BackButton";
import { useEventDetail } from "@/hooks/eventz";
import { Calendar, LocateFixed, MapPin } from "lucide-react";
import { useRouter } from "next/router";
import React from "react";
import { Loader } from "rsuite";

const imageUrl = "/media/stock/600x600/img-39.jpg";
const EventDetailPage = () => {
  const query = { fields: "*,event_tickets.*" };
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading } = useEventDetail(id, ["EventDetail", id, query], query, { enabled: id ? true : false });
  return (
    <MainLayout showHero={false}>
      <div className="container  mb-5 mt-5">
        <h3>Event Detail Page</h3>
        <BackButton />
      </div>

      {isLoading && (
        <div className="row">
          <div className="col">
            <Loader center vertical />
          </div>
        </div>
      )}

      <div className="container">
        {data && (
          <div className="row">
            <div className="col-12">
              <EventInfoCard item={data} />
            </div>
            <div className="col-md-6 mt-5">
              <EventOrderForm item={data} tickets={data.event_tickets} />
            </div>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default EventDetailPage;
