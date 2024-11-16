import PageHeader from "@/components/Dashboard/DashboardHeader/PageHeader";
import React from "react";

const Rating = () => {
  return (
    <div>
      <h2>Rating page</h2>
      <PageHeader
        title={"All Rating"}
        btnName={"Add Rating"}
        href={"/dashboard/products/add-product"}
      />
    </div>
  );
};

export default Rating;
