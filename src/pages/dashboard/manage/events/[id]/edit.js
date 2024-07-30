import EventBasicForm from "@/components/dashboard/manage/EventBasicForm";
import EventOrganizerForm from "@/components/dashboard/manage/EventOrganizerForm";
import EventVenueForm from "@/components/dashboard/manage/EventVenueForm";
import AppLayout from "@/components/layout/dashboard/AppLayout";
import { useEventDetail } from "@/hooks/eventz";
import { useRouter } from "next/router";
import React from "react";

const UpdateEventInformationPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const query = { fields: "*" };
  const { data, isLoading } = useEventDetail(id, ["MyEventInfo", id, query], query, { enabled: id ? true : false });
  return (
    <AppLayout id={id}>
      <h3>Update</h3>

      {data && (
        <div className="row mt-5">
          <div className="col-md-4">
            <EventBasicForm item={data} />
          </div>
          <div className="col-md-4">
            <EventVenueForm item={data} />
          </div>
          <div className="col-md-4">
            <EventOrganizerForm item={data} />
          </div>
        </div>
      )}
    </AppLayout>
  );
};

export default UpdateEventInformationPage;
