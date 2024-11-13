import PageHeader from "@/components/Dashboard/DashboardHeader/PageHeader";
import React from "react";

const User = () => {
  return (
    <div>
      <h2>User Page</h2>
      <PageHeader
        title={"All Users"}
        btnName={"Add User"}
        href={"/dashboard/products/add-product"}
      />
    </div>
  );
};

export default User;
