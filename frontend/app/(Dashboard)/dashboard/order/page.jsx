"use client";
import PageHeader from "@/components/Dashboard/DashboardHeader/PageHeader";
import RecentOrder from "@/components/Dashboard/DashboardHome/RecentOrder/RecentOrder";
import OrderTable from "@/components/Dashboard/Order/OrderTable";
import OrderTableBar from "@/components/Dashboard/Order/OrderTableBar";
import { Pagination, Stack } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

// const productsData = [
//   {
//     id: 1,
//     name: "shahin",
//     phone: "016764406477",
//     date: "Oct 11, 2024",
//     status: "Completed",
//     total: 240,
//   },
//   {
//     id: 2,
//     name: "shahin",
//     phone: "016764406477",
//     date: "Oct 11, 2024",
//     status: "Processing",
//     total: 240,
//   },
//   {
//     id: 3,
//     name: "shahin",
//     phone: "016764406477",
//     date: "Oct 11, 2024",
//     status: "Completed",
//     total: 240,
//   },
//   {
//     id: 4,
//     name: "shahin",
//     phone: "016764406477",
//     date: "Oct 11, 2024",
//     status: "Canceled",
//     total: 240,
//   },
//   {
//     id: 5,
//     name: "shahin",
//     phone: "016764406477",
//     date: "Oct 11, 2024",
//     status: "Processing",
//     total: 240,
//   },
//   {
//     id: 6,
//     name: "shahin",
//     phone: "016764406477",
//     date: "Oct 11, 2024",
//     status: "Completed",
//     total: 240,
//   },
//   {
//     id: 7,
//     name: "shahin",
//     phone: "016764406477",
//     date: "Oct 11, 2024",
//     status: "Completed",
//     total: 240,
//   },
// ];

const Order = () => {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  // const numberOfPage = Math.ceil(count / itemsPerPage);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("/data/orderData.json");
      const allProducts = res.data;
      setCount(allProducts.length);
      const data = allProducts.splice(
        (currentPage - 1) * itemsPerPage,
        itemsPerPage
      );
      console.log(data);

      setProducts(data);
    };
    getData();
  }, [currentPage]);

  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <div>
      <div>
        <PageHeader
          title={"All Order"}
          btnName={"Add Order"}
          href={"/dashboard/products/add-product"}
        />
      </div>
      <div
        className={`overflow-auto w-[95%] mx-auto mt-6 border rounded-md h-full shadow-[0_0px_5px_0px_rgba(0,0,0,0.3)]`}
      >
        <div className="bg-white min-w-[600px]  ">
          {/* table bar */}
          <OrderTableBar />
          {/* order table */}
          <OrderTable productsData={products} />
          <div className="flex justify-end py-3 me-6">
            <Stack spacing={2}>
              <Pagination
                page={currentPage}
                onChange={handleChange}
                count={Math.ceil(count / itemsPerPage)}
                shape="rounded"
                color="primary"
              />
            </Stack>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
