import useCart from "@/hooks/cart";
import { directus } from "@/lib";
import { useRouter } from "next/router";
import React from "react";
import { useMutation } from "react-query";
import { Button, Input } from "rsuite";

const EventOrderForm = ({ tickets, item }) => {
  const router = useRouter();
  const { cart, updateCart, prepCart, calculateCartTotal } = useCart(
    tickets.map((item) => ({ id: item.id, qty: 0, price: item.price }))
  );

  const handleRegister = () => {
    const total = calculateCartTotal();
    const newOrder = {
      status: "draft",
      lines: prepCart().map((item) => ({ qty: item.qty, ticket: item.id, price: item.price })),
      total_amount: total,
      eventz: item.id,
    };
    mutation.mutate(newOrder);
    // console.log(newOrder);
  };

  const mutation = useMutation({
    mutationFn: async (payload) => {
      return await directus.items("event_order").createOne(payload);
      // create order
      // create order with orderlines
    },
    onSuccess: (data) => {
      console.log(data);
      router.push(`/checkout?order_id=${data.id}`);
    },
    onError: (e) => {
      console.log(e.message);
    },
  });
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-title fw-bolder">Ticket Ordering Form</div>
      </div>
      <div className="card-body">
        {JSON.stringify({ cart })}
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr className="fw-bolder fs-6 text-gray-800 border-bottom border-gray-200">
                <th>Ticket</th>
                <th>Price</th>
                <th>Qty</th>
              </tr>
            </thead>
            <tbody>
              {tickets.map((ticket) => {
                return (
                  <tr key={ticket.id}>
                    <td>{ticket.name}</td>
                    <td>{ticket.price > 0 ? ticket.price : "Free"}</td>
                    <td>
                      {/* {ticket.qty} */}
                      <Input
                        onChange={(val) => updateCart(ticket.id, val)}
                        style={{ width: "70px" }}
                        min={0}
                        max={ticket.qty - ticket._qty}
                        type="number"
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      {prepCart().length > 0 && (
        <div className="card-footer">
          <Button className="btn btn-dark btn-sm" onClick={handleRegister}>
            Register
          </Button>
        </div>
      )}
    </div>
  );
};

export default EventOrderForm;
