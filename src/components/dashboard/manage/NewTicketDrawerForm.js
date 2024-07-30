import React, { Fragment } from "react";
import { useBoolean } from "usehooks-ts";
import { Button, Drawer, Input } from "rsuite";
import { FormLabel } from "react-bootstrap";
import { useForm } from "@/hooks/form";
import SelectStatus from "@/components/forms/SelectStatus";
import { Settings2, Settings } from "lucide-react";
import { focusManager, useMutation } from "react-query";
import { directus } from "@/lib";
import { useNotify } from "@/hooks/notify";
const NewTicketDrawerForm = ({ eventId }) => {
  const { showError, showMsg } = useNotify();
  const { value, setValue, setTrue, setFalse, toggle } = useBoolean(false);
  const { form, handleChange, handleExtra, handleSuite, resetForm } = useForm({
    name: "",
    status: "",
    qty: "",
    price: 0,
    _qty: 0,
  });

  const mutation = useMutation({
    mutationFn: async (payload) => {
      const res = await directus.items("event_ticket").createOne(payload);
      return res;
    },
    onError: (e) => {
      showError(e.message);
    },
    onSuccess: (data) => {
      showMsg(`New Ticket updated!!`);
      toggle();
      resetForm();
      focusManager.setFocused(true);
    },
  });

  const handleSubmit = () => {
    const payload = { ...form, eventz: eventId };
    mutation.mutate(payload);
  };

  return (
    <Fragment>
      <button className="btn btn-danger btn-sm" onClick={toggle}>
        New Event Ticket
      </button>
      <Drawer open={value} onClose={toggle} size={"xs"}>
        <Drawer.Header>
          <Drawer.Title className="fw-bolder">New Ticket</Drawer.Title>
        </Drawer.Header>
        <Drawer.Body>
          <div className="container-fluid mx-0 px-0">
            <div className="row">
              <div className="col-12">
                <FormLabel>Name</FormLabel>
                <Input value={form.name} onChange={handleSuite("name")} />
              </div>
              <div className="col-12 mt-5">
                <FormLabel>Status</FormLabel>
                <SelectStatus onChange={handleExtra} keyName={"status"} />
              </div>
              <div className="col-6 mt-5">
                <FormLabel>Price</FormLabel>
                <Input type="number" value={form.price} onChange={handleSuite("price")} />
              </div>
              <div className="col-6 mt-5">
                <FormLabel>Quantity</FormLabel>
                <Input type="number" value={form.qty} onChange={handleSuite("qty")} />
              </div>
              <div className="col- mt-5">
                <Button onClick={handleSubmit} className="btn btn-dark btn-sm" loading={mutation.isLoading}>
                  <Settings className="me-2" size={16} />
                  Save
                </Button>
              </div>
            </div>
          </div>
        </Drawer.Body>
      </Drawer>
    </Fragment>
  );
};

export default NewTicketDrawerForm;
