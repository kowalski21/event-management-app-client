import { useForm } from "@/hooks/form";
import { useNotify } from "@/hooks/notify";
import { directus } from "@/lib";
import React from "react";
import { FormLabel } from "react-bootstrap";
import { focusManager, useMutation } from "react-query";
import { Button, Input } from "rsuite";
import Link from "next/link";
import { useRouter } from "next/router";
const EventCheckoutCard = ({ lines = [], item, event_item }) => {
  const router = useRouter();
  const { showError, showMsg } = useNotify();
  const { handleSuite, form } = useForm({
    contact_firstname: item.contact_firstname,
    contact_lastname: item.contact_lastname,
    contact_phone: item.contact_phone,
    contact_email: item.contact_email,
  });

  // mutation
  const mutation = useMutation({
    mutationFn: async (payload) => {
      const res = await directus.items("event_order").updateOne(item.id, payload);
      return res;
    },
    onSuccess: (data) => {
      showMsg(`Checkout completed, check email and phone for your tickets`);
      // focusManager.setFocused();
      router.reload();
    },
    onError: (e) => showError(e.message),
  });

  const handleSubmit = () => {
    let payload = { ...form, status: "published", paid: true };
    mutation.mutate(payload);
  };

  return (
    <div className="card">
      <div className="card-header">
        <div className="card-title fw-bolder">
          {event_item.name}
          <br />
        </div>
      </div>
      <div className="card-body">
        <div className="table-responsive">
          <span className="text-muted fs-8">All amount are in Ghana Cedis</span>
          <table className="table table-row-dashed">
            <thead>
              <tr className="fw-bolder fs-6 text-gray-800 border-bottom border-gray-200">
                <th>Ticket</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {lines.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.ticket.name}</td>
                    <td>{item.price > 0 ? item.price : "Free"}</td>
                    <td>{item.qty}</td>
                    <td>{Number(Number(item.price) * Number(item.qty)).toFixed(2)}</td>
                  </tr>
                );
              })}

              <tr key={"orderTotal"}>
                <td colSpan={3} className="fw-bolder fs-5 col-span-4">
                  Total
                </td>
                <td>{item.total_amount}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="separator separator-dashed my-5"></div>
        <h3>Contact Information</h3>
        {/* {JSON.stringify({ form })} */}

        <div className="row">
          <div className="col-md-6 mb-5">
            <FormLabel className="required">FirstName</FormLabel>
            <Input
              className="border-dark"
              disabled={item.paid}
              //   onChange={(val) => console.log(val)}
              onChange={handleSuite("contact_firstname")}
              value={form.contact_firstname}
            />
          </div>
          <div className="col-md-6 mb-5">
            <FormLabel className="required">LastName</FormLabel>
            <Input
              className="border-dark"
              disabled={item.paid}
              onChange={handleSuite("contact_lastname")}
              value={form.contact_lastname}
            />
          </div>

          <div className="col-md-6">
            <FormLabel className="required">Phone Number</FormLabel>
            <Input
              disabled={item.paid}
              className="border-dark"
              onChange={handleSuite("contact_phone")}
              value={form.contact_phone}
            />
          </div>
          <div className="col-md-6">
            <FormLabel className="required">Email</FormLabel>
            <Input
              disabled={item.paid}
              className="border-dark"
              onChange={handleSuite("contact_email")}
              value={form.contact_email}
            />
          </div>
        </div>
      </div>
      {form.contact_email && form.contact_firstname && form.contact_email && form.contact_phone && (
        <div className="card-footer">
          {/* <button className="btn btn-dark btn-sm">Register</button> */}
          {item.paid ? (
            <Link href={`/tickets/${item.id}`}>
              <Button className="btn btn-dark btn-sm">View Tickets</Button>
            </Link>
          ) : (
            <Button className="btn btn-dark btn-sm" onClick={handleSubmit} loading={mutation.isLoading}>
              Initiate Payment
            </Button>
          )}
        </div>
      )}
    </div>
  );
};

export default EventCheckoutCard;
