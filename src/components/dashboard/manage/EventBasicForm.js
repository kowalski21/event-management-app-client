import SelectCategory from "@/components/forms/SelectCategory";
import SelectStatus from "@/components/forms/SelectStatus";
import { useForm } from "@/hooks/form";
import { useNotify } from "@/hooks/notify";
import { directus } from "@/lib";
import React from "react";
import { FormLabel } from "react-bootstrap";
import { useMutation } from "react-query";
import { InputPicker, Input, Button } from "rsuite";

const EventBasicForm = ({ item }) => {
  const { showError, showMsg } = useNotify();
  const { form, handleSuite, handleExtra, handleChange } = useForm({
    name: item.name,
    category: item.category,
    status: item.status,
    description: item.description,
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
        <div className="card-title fw-bolder">Event Information</div>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-md-12 mb-5">
            <FormLabel>Name</FormLabel>
            <Input value={form.name} onChange={handleSuite("name")} />
          </div>
          <div className="col-md-6 mb-5">
            <FormLabel>Status</FormLabel>
            <SelectStatus defaultValue={form.status} onChange={handleExtra} keyName={"status"} />
          </div>
          <div className="col-md-6 mb-5">
            <FormLabel>Category</FormLabel>
            <SelectCategory defaultValue={form.category} handleChange={handleExtra} keyName={"category"} size="md" />
          </div>
          <div className="col-md-12 mb-5">
            <FormLabel>Description</FormLabel>
            <Input value={form.description} onChange={handleSuite("description")} as={"textarea"} rows={3} />
          </div>
          <div className="col-md-12">
            <FormLabel>Upload Image</FormLabel>
            <input type="file" className="form-control" />
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

export default EventBasicForm;
