import { useNotify } from "@/hooks/notify";
import { directus } from "@/lib";

import { useRouter } from "next/router";
import React, { Fragment, useState } from "react";
import { FormLabel } from "react-bootstrap";
import { useMutation } from "react-query";
import { Drawer, Input } from "rsuite";
import { useBoolean } from "usehooks-ts";

const NewEventForm = () => {
  const { showError, showMsg } = useNotify();
  const router = useRouter();
  const { value, setValue, setTrue, setFalse, toggle } = useBoolean(false);
  const [name, setName] = useState("");
  const mutation = useMutation({
    mutationFn: async (payload) => {
      const res = await directus.items("eventz").createOne(payload);
      return res;
    },
    onSuccess: (data) => {
      showMsg(`New event added`);
      router.push(`/dashboard/manage/events/${data.id}`);
    },
    onError: (e) => {
      toggle();
      showError(e.message);
    },
  });

  const handleSubmit = () => {
    let payload = { name };
    mutation.mutate(payload);
  };
  return (
    <Fragment>
      <button className="btn btn-dark btn-sm" onClick={toggle}>
        New Event
      </button>
      <Drawer open={value} onClose={toggle} size={"xs"}>
        <Drawer.Header>
          <Drawer.Title className="fw-bolder">New Event Ticket</Drawer.Title>
        </Drawer.Header>
        <Drawer.Body className="">
          <FormLabel className="required">Ticket Name </FormLabel>
          <p className="text-small text-muted fs-9">(Ticket Name should be unique)</p>
          <Input value={name} onChange={(val) => setName(val)} />

          {name && name.length > 3 && (
            <button className="btn btn-dark btn-sm btn-block mt-5" onClick={handleSubmit}>
              Save
            </button>
          )}
        </Drawer.Body>
      </Drawer>
    </Fragment>
  );
};

export default NewEventForm;
