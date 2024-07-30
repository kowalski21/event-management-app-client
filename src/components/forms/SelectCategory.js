import { useEventCategories } from "@/hooks/event_category";
import React, { useState } from "react";
import { SelectPicker, CheckPicker } from "rsuite";
import { useEventCallback } from "usehooks-ts";

const SelectCategory = ({ defaultValue, handleChange, keyName, size = "lg" }) => {
  // const [val,setVal] = useState
  const { data, isLoading } = useEventCategories(["SelectEventCategories"], { fields: "id,name" });
  return (
    <SelectPicker
      value={defaultValue}
      onChange={(val) => handleChange(keyName, val)}
      size={size}
      loading={isLoading}
      className="text-dark border-dark"
      block
      data={data?.data ? data?.data : []}
      labelKey="name"
      valueKey="id"
    />
  );
};

export default SelectCategory;
