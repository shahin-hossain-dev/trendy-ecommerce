"use client";
import PageHeader from "@/components/Dashboard/DashboardHeader/PageHeader";
import RecentOrder from "@/components/Dashboard/DashboardHome/RecentOrder/RecentOrder";
import React from "react";

const page = () => {
  return (
    <div>
      <PageHeader
        title={"All Order"}
        btnName={"Add Product"}
        href={"/dashboard/add-product"}
      />
    </div>
  );
};

export default page;
