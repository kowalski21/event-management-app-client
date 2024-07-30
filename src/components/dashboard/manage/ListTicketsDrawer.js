import { Ticket } from "lucide-react";
import React, { Fragment } from "react";
import { Drawer } from "rsuite";
import { useBoolean } from "usehooks-ts";

const ListTicketsDrawer = ({ assets }) => {
  const { value, setValue, setTrue, setFalse, toggle } = useBoolean(false);

  return (
    <Fragment>
      <button className="btn btn-dark btn-sm" onClick={toggle}>
        View Tickets
      </button>
      <Drawer open={value} onClose={toggle} backdrop="static" size={"xs"}>
        <Drawer.Header>
          <Drawer.Title className="fw-bolder">Ticket List</Drawer.Title>
        </Drawer.Header>
        <Drawer.Body className="px-0">
          <div className="card card-xl-stretch">
            <div className="card-body">
              {assets.map((item) => {
                return (
                  <div className="d-flex align-items-start bg-light-success rounded p-5 mb-7" key={item.id}>
                    <span className="svg-icon svg-icon-warning me-5">
                      <span className="svg-icon svg-icon-1">
                        <Ticket className="text-dark" strokeWidth={2.1} />
                      </span>
                    </span>

                    <div className="flex-grow-1 me-2">
                      <a href="#" className="fw-bolder text-gray-800 text-hover-primary fs-6">
                        {item.event_ticket.name}
                      </a>
                      <span className="text-dark fw-bolder d-block">GHS {item.event_ticket.price}</span>
                      <span className="text-dark fw-bold d-block">
                        {item.venue_name},{item.venue_city}
                      </span>
                    </div>

                    <span className="fw-bolder text-dark py-1">{item.ticket_code}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </Drawer.Body>
      </Drawer>
    </Fragment>
  );
};

export default ListTicketsDrawer;
