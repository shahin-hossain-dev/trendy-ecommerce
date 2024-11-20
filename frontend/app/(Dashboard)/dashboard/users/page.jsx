import PageHeader from "@/components/Dashboard/DashboardHeader/PageHeader";
import React from "react";

const User = () => {
  return (
    <div>
      <PageHeader
        title={"All Users"}
        btnName={"Add User"}
        href={"/dashboard/users/add-user"}
      />
    </div>
  );
};

export default User;
