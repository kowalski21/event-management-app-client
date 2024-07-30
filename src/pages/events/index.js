import MainLayout from "@/components/layout/main/MainLayout";
import React, { useEffect, useState } from "react";
import { DatePicker, DateRangePicker, Input, InputGroup, Loader } from "rsuite";
import SearchIcon from "@rsuite/icons/Search";
import SelectCategory from "@/components/forms/SelectCategory";
import { FormLabel } from "react-bootstrap";
import EventCard from "@/components/events/EventCard";
import { useEventList } from "@/hooks/eventz";
import { formatJSDate, getWeekDate } from "@/lib/date";
const EventsPage = () => {
  const [form, setForm] = useState({ name: "", category: "", dt: getWeekDate() });
  const [query, setQuery] = useState({
    fields: "*,category.id,category.name",
    filter: { status: { _in: "published" } },
  });
  const { data, isLoading } = useEventList(["EventsSearch", query], query, { keepPreviousData: true });
  const handleForm = (keyName, value) => {
    setForm({ ...form, [keyName]: value });
  };

  useEffect(() => {
    let oldQuery = {};
    let payload = [];
    if (form.name) {
      oldQuery.search = form.name;
    }
    if (form.category) {
      payload.push({ category: form.category });
    }
    if (form.dt && form.dt.length >= 2) {
      let tmp = formatJSDate(form.dt);
      payload.push({
        start_date: {
          _gte: tmp[0],
        },
      });
      payload.push({
        end_date: {
          _lte: tmp[1],
        },
      });
    }

    oldQuery.filter = { _and: payload };

    setQuery({ ...query, ...oldQuery });
  }, [form]);
  return (
    <MainLayout showHero={false}>
      <div className="container mt-5">
        {/* {JSON.stringify({ form })} */}
        <div className="row">
          <div className="col-md-4">
            <FormLabel>Filter By Name</FormLabel>
            <InputGroup inside>
              <Input value={form.name} onChange={(val) => handleForm("name", val)} size="lg" />
              <InputGroup.Button size="lg">
                <SearchIcon />
              </InputGroup.Button>
            </InputGroup>
          </div>
          <div className="col-md-8">
            <div className="row">
              <div className="col">
                <FormLabel>Filter By Category</FormLabel>
                <SelectCategory defaultValue={form.category} handleChange={handleForm} keyName="category" />
              </div>
              <div className="col">
                <FormLabel>Filter By Date</FormLabel>
                <DateRangePicker onChange={(val) => handleForm("dt", val)} value={form.dt} size="lg" block />
              </div>
            </div>
          </div>
        </div>
        {isLoading && <Loader vertical center />}
        <div className="row mt-5">
          {data &&
            data?.data.map((item) => {
              return (
                <div className="col-md-4 col-sm-6 col-lg-3" key={item.id}>
                  <EventCard eventItem={item} />
                </div>
              );
            })}
        </div>
      </div>
    </MainLayout>
  );
};

export default EventsPage;
