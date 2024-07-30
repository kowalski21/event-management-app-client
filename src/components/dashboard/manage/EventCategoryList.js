import React from "react";
import CategoryUpdateForm from "./CategoryUpdateForm";

const EventCategoryList = ({ items = [] }) => {
  return (
    <div className="card">
      <div className="card-body">
        <div className="table-responsive">
          <table className="table table-row-dashed">
            <thead>
              <tr className="fw-bolder ">
                <th>#</th>
                <th>Name</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => {
                return (
                  <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td className="fw-bolder text-capitalize">{item.status}</td>
                    <td>
                      <CategoryUpdateForm item={item} />
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

export default EventCategoryList;
