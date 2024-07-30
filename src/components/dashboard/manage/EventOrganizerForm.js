import SelectCategory from "@/components/forms/SelectCategory";
import SelectStatus from "@/components/forms/SelectStatus";
import { useForm } from "@/hooks/form";
import { useNotify } from "@/hooks/notify";
import { directus } from "@/lib";
import React from "react";
import { FormLabel } from "react-bootstrap";
import { useMutation } from "react-query";
import { InputPicker, Input, Button } from "rsuite";

const EventOrganizerForm = ({ item }) => {
  const { showError, showMsg } = useNotify();
  const { form, handleSuite, handleExtra, handleChange } = useForm({
    start_date: item.start_date,
    end_date: item.end_date,
    start_time: item.start_time,
    end_time: item.end_time,
  });
  const mutation = useMutation({
    mutationFn: async (payload) => {
      const res = await directus.items("eventz").updateOne(item.id, payload);
      return res;
    },
    onError: (e) => {
      showError(e.message);
    },
    onSuccess: (data) => {
      showMsg(`Event information updated!!`);
    },
  });

  const handleSubmit = () => {
    const payload = { ...form };
    mutation.mutate(payload);
  };
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-title fw-bolder">Event Date & Time</div>
      </div>
      <div className="card-body">
        {/* {JSON.stringify(form)} */}
        <div className="row">
          <div className="col-md-6 mb-5">
            <FormLabel>Event Start Date</FormLabel>
            <input type="date" value={form.start_date} onChange={handleChange("start_date")} className="form-control" />
          </div>
          <div className="col-md-6 mb-5">
            <FormLabel>Event Start Time</FormLabel>
            <input type="time" value={form.start_time} onChange={handleChange("start_time")} className="form-control" />
          </div>

          <div className="col-md-6 mb-5">
            <FormLabel>Event Ending Date</FormLabel>
            <input type="date" value={form.end_date} onChange={handleChange("end_date")} className="form-control" />
          </div>
          <div className="col-md-6 mb-5">
            <FormLabel>Event Ending Time</FormLabel>
            <input type="time" value={form.end_time} onChange={handleChange("end_time")} className="form-control" />
          </div>
        </div>
      </div>
      <div className="card-footer">
        {form.start_date && form.start_time && form.end_date && form.end_time && (
          <Button className="btn btn-dark btn-sm" onClick={handleSubmit} loading={mutation.isLoading}>
            Update
          </Button>
        )}
      </div>
    </div>
  );
};

export default EventOrganizerForm;
