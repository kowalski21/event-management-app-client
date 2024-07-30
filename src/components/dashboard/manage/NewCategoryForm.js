import SelectStatus from "@/components/forms/SelectStatus";
import { useForm } from "@/hooks/form";
import { useNotify } from "@/hooks/notify";
import { directus } from "@/lib";
import React, { Fragment } from "react";
import { FormLabel } from "react-bootstrap";
import { focusManager, useMutation } from "react-query";
import { Button, Drawer, Input } from "rsuite";
import { useBoolean } from "usehooks-ts";

const NewCategoryForm = () => {
  const { showError, showMsg } = useNotify();
  const { value, setValue, setTrue, setFalse, toggle } = useBoolean(false);
  const { form, handleSuite, handleExtra } = useForm({
    name: "",
    status: "draft",
  });
  const mutation = useMutation({
    mutationFn: async (payload) => {
      return await directus.items("event_category").createOne(payload);
    },
    onError: (e) => {
      showError(e.message);
      toggle();
    },
    onSuccess: (data) => {
      showMsg(`New Category added...`);
      focusManager.setFocused(true);
      toggle();
    },
  });

  const handleSubmit = () => {
    mutation.mutate(form);
  };
  return (
    <Fragment>
      <button className="btn btn-dark btn-sm" onClick={toggle}>
        New Category
      </button>
      <Drawer open={value} onClose={toggle} size={"xs"}>
        <Drawer.Header>
          <Drawer.Title className="fw-bolder">New Category</Drawer.Title>
        </Drawer.Header>
        <Drawer.Body className="container mt-5">
          <FormLabel className="required">Category Name</FormLabel>
          <Input value={form.name} onChange={handleSuite("name")} />

          <FormLabel className="required mt-5">Category Status</FormLabel>
          <SelectStatus defaultValue={form.status} onChange={handleExtra} keyName={"status"} />

          {form.name && (
            <Button className="btn-dark btn-sm mt-5" onClick={handleSubmit} loading={mutation.isLoading}>
              Save
            </Button>
          )}
        </Drawer.Body>
      </Drawer>
    </Fragment>
  );
};

export default NewCategoryForm;
