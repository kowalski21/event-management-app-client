import React, { Fragment } from "react";
import AppHeader from "./AppHeader";
import { useAuth } from "@/hooks/auth";
import { Loader } from "rsuite";
import BackButton from "@/components/reusable/BackButton";
import ToolBarLinks from "@/components/dashboard/manage/ToolBarLinks";

const AppLayout = ({ children, id }) => {
  const { data, isLoading } = useAuth();
  return (
    <Fragment>
      {isLoading && <Loader center vertical />}

      {data && (
        <div>
          <AppHeader user={data} />
          <div className="container mt-5">
            <div className="row mb-5">
              <div className="col">
                <BackButton />
              </div>
              {id && (
                <div className="col ">
                  <ToolBarLinks id={id} />
                </div>
              )}
            </div>
            {children}
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default AppLayout;
