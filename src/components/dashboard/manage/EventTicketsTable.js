import { getStatusColor } from "@/lib/status";
import React from "react";
import TicketDrawerForm from "./TicketDrawerForm";

const EventTicketsTable = ({ items }) => {
  return (
    <div className="card">
      <div className="card-body">
        <div class="table-responsive">
          <table class="table table-row-bordered ">
            <thead>
              <tr class="fw-bolder fs-6 text-gray-800">
                <th>Name</th>
                <th>Status</th>
                <th>Qty</th>
                <th>Price</th>
                <th>Registered</th>
                <th>Diff</th>
                <th>Actions </th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>
                      <span className={` badge ${getStatusColor(item.status).bgCss}`}>
                        {getStatusColor(item.status).label}
                      </span>
                    </td>
                    <td>{item.qty}</td>
                    <td>{item.price}</td>
                    <td>{item._qty}</td>
                    <td>{item.qty - item._qty}</td>
                    <td>
                      <TicketDrawerForm item={item} />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EventTicketsTable;
