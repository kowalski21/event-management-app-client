import EventCategoryList from "@/components/dashboard/manage/EventCategoryList";
import NewCategoryForm from "@/components/dashboard/manage/NewCategoryForm";
import AppLayout from "@/components/layout/dashboard/AppLayout";
import { useEventCategories } from "@/hooks/event_category";
import React from "react";
import { Loader } from "rsuite";

const CategoriesSettingsPage = () => {
  const query = { fields: "*", sort: "name" };
  const { data, isLoading } = useEventCategories(["SettingCategories", query], query);
  return (
    <AppLayout>
      <h3 className="fw-bold mb-5">Event Categories</h3>

      <NewCategoryForm />

      <div className="row mt-5">
        {isLoading && (
          <div className="col-md-12">
            <Loader vertical center />
          </div>
        )}
        <div className="col-md-12">
          <EventCategoryList items={data?.data} />
        </div>
      </div>
    </AppLayout>
  );
};

export default CategoriesSettingsPage;
