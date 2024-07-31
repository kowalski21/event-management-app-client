import React from "react";

const MainSectionOne = () => {
  return (
    <div className="mb-n10 mb-lg-n20 z-index-2 mt-10">
      {/*begin::Container*/}
      <div className="container">
        {/*begin::Heading*/}
        <div className="text-center mb-17">
          {/*begin::Title*/}
          <h3 className="fs-2hx text-dark mb-5" id="how-it-works" data-kt-scroll-offset="{default: 100, lg: 150}">
            How it Works
          </h3>
          {/*end::Title*/}
          {/*begin::Text*/}
          <div className="fs-5 text-muted fw-bold">
            Easily create events and tickets
            <br />
            in a simple and easy steps
          </div>
          {/*end::Text*/}
        </div>
        {/*end::Heading*/}
        {/*begin::Row*/}
        <div className="row w-100 gy-10 mb-md-20">
          {/*begin::Col*/}
          <div className="col-md-4 px-5">
            {/*begin::Story*/}
            <div className="text-center mb-10 mb-md-0">
              {/*begin::Illustration*/}
              <img src="media/2.png" className="mh-125px mb-9" alt="" />
              {/*end::Illustration*/}
              {/*begin::Heading*/}
              <div className="d-flex flex-center mb-5">
                {/*begin::Badge*/}
                <span className="badge badge-circle badge-light-success fw-bolder p-5 me-3 fs-3">1</span>
                {/*end::Badge*/}
                {/*begin::Title*/}
                <div className="fs-5 fs-lg-3 fw-bolder text-dark">Register</div>
                {/*end::Title*/}
              </div>
              {/*end::Heading*/}
              {/*begin::Description*/}
              <div className="fw-bold fs-6 fs-lg-4 text-muted">
                Save thousands to millions of bucks
                <br />
                by using single tool for different
                <br />
                amazing and great
              </div>
              {/*end::Description*/}
            </div>
            {/*end::Story*/}
          </div>
          {/*end::Col*/}
          {/*begin::Col*/}
          <div className="col-md-4 px-5">
            {/*begin::Story*/}
            <div className="text-center mb-10 mb-md-0">
              {/*begin::Illustration*/}
              <img src="/media/8.png" className="mh-125px mb-9" alt="" />
              {/*end::Illustration*/}
              {/*begin::Heading*/}
              <div className="d-flex flex-center mb-5">
                {/*begin::Badge*/}
                <span className="badge badge-circle badge-light-success fw-bolder p-5 me-3 fs-3">2</span>
                {/*end::Badge*/}
                {/*begin::Title*/}
                <div className="fs-5 fs-lg-3 fw-bolder text-dark">Create Event</div>
                {/*end::Title*/}
              </div>
              {/*end::Heading*/}
              {/*begin::Description*/}
              <div className="fw-bold fs-6 fs-lg-4 text-muted">
                Save thousands to millions of bucks
                <br />
                by using single tool for different
                <br />
                amazing and great
              </div>
              {/*end::Description*/}
            </div>
            {/*end::Story*/}
          </div>
          {/*end::Col*/}
          {/*begin::Col*/}
          <div className="col-md-4 px-5">
            {/*begin::Story*/}
            <div className="text-center mb-10 mb-md-0">
              {/*begin::Illustration*/}
              <img src="/media/12.png" className="mh-125px mb-9" alt="" />
              {/*end::Illustration*/}
              {/*begin::Heading*/}
              <div className="d-flex flex-center mb-5">
                {/*begin::Badge*/}
                <span className="badge badge-circle badge-light-success fw-bolder p-5 me-3 fs-3">3</span>
                {/*end::Badge*/}
                {/*begin::Title*/}
                <div className="fs-5 fs-lg-3 fw-bolder text-dark">Share link</div>
                {/*end::Title*/}
              </div>
              {/*end::Heading*/}
              {/*begin::Description*/}
              <div className="fw-bold fs-6 fs-lg-4 text-muted">
                Save thousands to millions of bucks
                <br />
                by using single tool for different
                <br />
                amazing and great
              </div>
              {/*end::Description*/}
            </div>
            {/*end::Story*/}
          </div>
          {/*end::Col*/}
        </div>
        {/*end::Row*/}
      </div>
    </div>
  );
};

export default MainSectionOne;
