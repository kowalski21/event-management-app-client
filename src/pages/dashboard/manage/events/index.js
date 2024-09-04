import MEventCard from "@/components/dashboard/manage/MEventCard";
import NewEventForm from "@/components/dashboard/manage/NewEventForm";
import AppLayout from "@/components/layout/dashboard/AppLayout";
import { useEventList } from "@/hooks/eventz";
import { useAuthUser } from "@/store/auth";
import React, { useEffect, useState } from "react";
import { Loader } from "rsuite";

const EventsMangementPage = () => {
  const [name, setName] = useState("");
  // const [query, setQuery] = useState({ fields: "*,category.id,category.name",filter: {} });
  const user = useAuthUser();

  const [query, setQuery] = useState({
    fields: "*,category.id,category.name",
    filter: {
      author: {
        _eq: user?.id,
      },
    },
  });

  const { data, isLoading } = useEventList(["MyEvents", user?.id, query], query, {
    enabled: user ? true : false,
    keepPreviousData: true,
  });

  useEffect(() => {
    if (name) {
      query.search = name;
    } else {
      delete query.search;
    }
    setQuery({ ...query });
  }, [name]);
  return (
    <AppLayout>
      <h3>Events Mangement Page</h3>
      <p>View and manage all your upcoming and past events</p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="search by event name"
        className="form-control form-control-lg w-50 mb-5"
      />
      {isLoading && <Loader vertical center />}
      <div className="row mb-5">
        <div className="col-md-4">
          <NewEventForm />
        </div>
      </div>
      <div className="row">
        {data &&
          data?.data.map((item) => {
            return (
              <div className="col-md-4 mb-5" key={item.id}>
                <MEventCard item={item} />
              </div>
            );
          })}
      </div>
    </AppLayout>
  );
};

export default EventsMangementPage;
