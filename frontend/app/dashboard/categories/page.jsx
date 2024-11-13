import PageHeader from "@/components/Dashboard/DashboardHeader/PageHeader";
import React from "react";

const Categories = () => {
  return (
    <div>
      <h2>Categories Page</h2>
      <PageHeader
        title={"All Categories"}
        btnName={"Add Category"}
        href={"/dashboard/products/add-product"}
      />
    </div>
  );
};

export default Categories;
