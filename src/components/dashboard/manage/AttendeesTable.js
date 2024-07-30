import { getIsoDate } from "@/lib/date";
import React from "react";
import ListTicketsDrawer from "./ListTicketsDrawer";

const AttendeesTable = ({ items = [] }) => {
  return (
    <div className="card">
      <div className="card-body">
        <div class="table-responsive">
          <table class="table table-row-bordered ">
            <thead>
              <tr class="fw-bolder fs-6 text-gray-800">
                <th>Date</th>
                <th>Channel</th>
                <th>Name</th>
                <th>Phone Number</th>
                <th>Email</th>
                <th>Qty </th>
                <th>Amount (GHS)</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{getIsoDate(item.date_created)}</td>
                    <td className="fw-bolder text-capitalize">{item.channel}</td>
                    <td>
                      {item.contact_firstname} {item.contact_lastname}
                    </td>
                    <td>{item.contact_phone}</td>
                    <td>{item.contact_email}</td>
                    <td>{item.ticket_assets.length}</td>
                    <td>{item.total_amount}</td>
                    <td>
                      <ListTicketsDrawer assets={item.ticket_assets} />
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

export default AttendeesTable;
