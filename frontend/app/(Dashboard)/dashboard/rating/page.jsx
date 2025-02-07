"use client";
import ProductTable from "@/components/Dashboard/Product/ProductTable";
import PageHeader from "@/components/Dashboard/DashboardHeader/PageHeader";
import { Pagination, Stack } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import CategoriesTableBar from "@/components/Dashboard/Categories/CategoriesTableBar";
import CategoriesTable from "@/components/Dashboard/Categories/CategoriesTable";
import UsersTable from "@/components/Dashboard/User/UsersTable";
import RatingTable from "@/components/Dashboard/Rating/RatingTable";

const Products = () => {
  const [count, setCount] = useState(0);
  const [ratings, setRatings] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  // const numberOfPage = Math.ceil(count / itemsPerPage);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("/data/ratings.json");
      const allRatings = res.data;
      setCount(allRatings.length);
      const data = allRatings.splice(
        (currentPage - 1) * itemsPerPage,
        itemsPerPage
      );
      // console.log(data);

      setRatings(data);
    };
    getData();
  }, [currentPage]);

  const handleChange = (event, value) => {
    setCurrentPage(value);
  };
  return (
    <div>
      <PageHeader
        title={"All Rating"}
        btnName={"Add Rating"}
        href={"/dashboard/users/add-rating"}
      />
      <div
        className={`overflow-auto w-[95%] mx-auto mt-6 border rounded-md h-full shadow-[0_0px_5px_0px_rgba(0,0,0,0.3)]`}
      >
        <div className="bg-white min-w-[600px]  ">
          {/* table bar */}
          <CategoriesTableBar />
          {/* order table */}
          <RatingTable ratingData={ratings} />
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

export default Products;
