import SelectCategory from "@/components/forms/SelectCategory";
import SelectStatus from "@/components/forms/SelectStatus";
import { useForm } from "@/hooks/form";
import { useNotify } from "@/hooks/notify";
import { directus } from "@/lib";
import React from "react";
import { FormLabel } from "react-bootstrap";
import { useMutation } from "react-query";
import { InputPicker, Input, Button } from "rsuite";

const EventVenueForm = ({ item }) => {
  const { showError, showMsg } = useNotify();
  const { form, handleSuite, handleExtra, handleChange } = useForm({
    venue_name: item.venue_name,
    venue_city: item.venue_city,
    venue_address: item.venue_address,
    organize_name: item.organize_name,
    organize_phone: item.organize_phone,
    organize_email: item.organize_email,
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
        <div className="card-title fw-bolder">Venue & Organizer Information</div>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-md-12 mb-5">
            <FormLabel>Venue Name</FormLabel>
            <Input value={form.venue_name} onChange={handleSuite("venue_name")} />
          </div>
          <div className="col-md-6 mb-5">
            <FormLabel>Venue Address</FormLabel>
            <Input value={form.venue_address} onChange={handleSuite("venue_address")} />
          </div>
          <div className="col-md-6 mb-5">
            <FormLabel>Venue City</FormLabel>
            <Input value={form.venue_city} onChange={handleSuite("venue_city")} />
          </div>
          <div className="col-md-12 mb-5">
            <FormLabel>Organizer Name</FormLabel>
            <Input value={form.organize_name} onChange={handleSuite("organize_name")} />
          </div>
          <div className="col-md-12 mb-5">
            <FormLabel>Organizer Email</FormLabel>
            <Input value={form.organize_email} onChange={handleSuite("organize_email")} />
          </div>
          <div className="col-md-12 mb-5">
            <FormLabel>Organizer Phone Number</FormLabel>
            <Input value={form.organize_phone} onChange={handleSuite("organize_phone")} />
          </div>
        </div>
      </div>
      <div className="card-footer">
        <Button className="btn btn-dark btn-sm" onClick={handleSubmit} loading={mutation.isLoading}>
          Update
        </Button>
      </div>
    </div>
  );
};

export default EventVenueForm;
