"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie"; // Ensure this path is correct
import OrderSummery from "@/components/Dashboard/DashboardHome/OrderSummery/OrderSummery";
import OrderStatus from "@/components/Dashboard/DashboardHome/OrderStatus/OrderStatus";
import TopProduct from "@/components/Dashboard/DashboardHome/TopProduct/TopProduct";
import RecentOrder from "@/components/Dashboard/DashboardHome/RecentOrder/RecentOrder";

const page = () => {
  const router = useRouter();
  const [pageWidth, setPageWidth] = useState(0);

  // useEffect(() => {
  //   const verifyAccessToken = async () => {
  //     const accessToken = Cookies.get("accessToken");
  //     console.log("dashboard token", accessToken); // Use 'accessToken' correctly

  //     if (!accessToken) {
  //       router.push("/signin"); // Redirect to the login page if access token is null
  //     } else {
  //       console.log("Dashboard page is loaded");
  //     }
  //   };

  //   verifyAccessToken();
  // }, [router]);

  useEffect(() => {
    const pagesize = document.getElementById("pagesize");
    console.log(pagesize.offsetWidth);
    window.addEventListener("resize", (e) => {
      setPageWidth(pagesize.offsetWidth);
    });
  }, []);

  return (
    <div>
      <OrderSummery />
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <OrderStatus />
        </div>
        <div>
          <TopProduct />
        </div>
      </div>
      <section id="pagesize" className={`w-[${pageWidth}] overflow-auto`}>
        <RecentOrder />
      </section>
    </div>
  );
};
export default page;
