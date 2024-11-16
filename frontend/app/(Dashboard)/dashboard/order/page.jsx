"use client";
import PageHeader from "@/components/Dashboard/DashboardHeader/PageHeader";
import RecentOrder from "@/components/Dashboard/DashboardHome/RecentOrder/RecentOrder";
import OrderTableBar from "@/components/Dashboard/Order/OrderTableBar";

const page = () => {
  return (
    <div>
      <div>
        <PageHeader
          title={"All Order"}
          btnName={"Add Order"}
          href={"/dashboard/products/add-product"}
        />
      </div>
      <div className={`orderTable w-[600px]`} style={{ overflowX: "auto" }}>
        <div className="bg-white mt-6 border rounded-md h-full w-[700px] shadow-[0_0px_5px_0px_rgba(0,0,0,0.3)] ">
          {/* table bar */}
          <OrderTableBar />
          {/* order table */}
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default page;
