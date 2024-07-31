import React from "react";
import { Calendar, LocateFixed, MapPin } from "lucide-react";
import { assetUrl } from "@/lib/asset";
const imageUrl = "/media/img-44.jpg";
const EventInfoCard = ({ item }) => {
  return (
    <div className="card " style={{ minHeight: "200px" }}>
      <div className="card-body">
        <div className="row">
          <div className="col-md-8">
            <h3 className="fw-bolder" style={{ fontSize: "25px" }}>
              {item.name}
            </h3>
            <p>{item.organize_name}</p>
            <div className="d-flex flex-column gap-5">
              <div className="d-flex gap-5">
                <Calendar className="text-dark fw-bolder" />
                <span className="fs-6 fw-bolder">
                  {item.start_date} - {item.end_date} 10AM - 5:30PM
                </span>
              </div>
              <div className="d-flex gap-5">
                <MapPin />

                <span className="fs-6 fw-bolder">
                  {item.venue_name}, {item.venue_city}
                </span>
              </div>
            </div>

            <h3 className="mt-4">About</h3>
            <p>{item.description}</p>
          </div>
          <div className="col-md-4">
            <img
              src={item?.thumbnail ? assetUrl(item.thumbnail) : imageUrl}
              className="img-fluid mt-5"
              style={{ borderRadius: "20px", height: "200px", width: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventInfoCard;
