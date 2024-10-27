"use client";
import React, { useCallback, useEffect, useState } from "react";
import ImageGallery from "@/components/ProductImageGallery/ImageGallery";
import { FetchProductById } from "@/lib/FetchProduct";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Rating,
  Select,
} from "@mui/material";
import { BsCartDash } from "react-icons/bs";
import { BiGitCompare } from "react-icons/bi";
import { IoHeartOutline } from "react-icons/io5";

const ProductInfo = ({ params }) => {
  const { id } = params;
  const [product, setProduct] = useState({});
  const [checkOutData, setCheckOutData] = useState({
    color: "",
  });

  const fetchData = useCallback(async () => {
    try {
      const data = await FetchProductById(id);
      setProduct(data);
      console.log(data);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  }, [id]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleChange = (e) => {
    setCheckOutData({
      ...checkOutData,
      [e.target.name]: e.target.value,
    });
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  // discount calculation
  const discountedPrice = product.price - product.price * (45 / 100);

  return (
    <div className="bg-white mb-28 lg:mb-6 h-fit">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8 flex flex-col gap-3">
        <div className="grid gap-8 md:grid-cols-2">
          <ImageGallery
            image={product.image}
            productName={product.name}
            images={product?.images}
          />
          {/* Details pan */}
          <div className="md:py-8">
            <div className="mb-2 md:mb-3">
              <h2 className="text-xl font-bold text-[rgba(0,0,0,0.5)] lg:text-3xl">
                {product.name}
              </h2>
              <span className="mb-0.5 inline-block text-gray-500">
                {product.category}
              </span>
            </div>

            <div className="mb-4 space-y-3">
              <div className="flex items-center justify-between ">
                <div className="flex flex-col">
                  <Rating name="read-only" value={5} readOnly />
                  <div className="mt-2">
                    <span className="text-gray-500 me-4">3 Reviews</span>
                    <button className="bg-[#192a5633] rounded-full px-3">
                      Add Your Review{" "}
                    </button>
                  </div>
                </div>
                <div>
                  <span>Availability </span>
                  <button className="bg-[#192a56] px-3 ms-3  text-white rounded-full font-medium hover:bg-[#273c75]">
                    In Stock
                  </button>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="mb-0.5 text-[#192a5666] line-through">
                  ৳{product.price}
                </span>
                <span className="text-xl font-bold text-gray-800 md:text-2xl">
                  ৳{new Intl.NumberFormat().format(discountedPrice)}
                </span>
              </div>

              <span className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                enim repellat sed optio sunt porro quibusdam quaerat nemo
                adipisci. Voluptas.
              </span>
              <span className=" block text-gray-500">Code: DFSDF923</span>
            </div>
            <div>
              <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="demo-select-small-label">Color</InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value={checkOutData.color}
                  label="Age"
                  name="color"
                  onChange={handleChange}
                  defaultValue="Select One"
                >
                  <MenuItem value={"red"}>Red</MenuItem>
                  <MenuItem value={"green"}>Green</MenuItem>
                  <MenuItem value={"blue"}>Blue</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div className="flex gap-2.5">
              <button className="flex items-center gap-2 bg-[#192a56] px-4 py-2 text-white rounded-full active:scale-95 duration-200 font-medium hover:bg-[#273c75]">
                <BsCartDash className="text-xl" /> <span>Add To Cart</span>
              </button>
              <button className="flex items-center gap-2 bg-[#192a5633] px-4 py-2  rounded-full active:scale-95 duration-200 font-medium hover:bg-[#192a56] hover:text-white">
                <BiGitCompare className="text-xl rotate-90" />{" "}
                <span>Compare</span>
              </button>
              <button className="flex items-center gap-2 bg-[#192a5633] px-4 py-2  rounded-full active:scale-95 duration-200 font-medium hover:bg-[#192a56] hover:text-white">
                <IoHeartOutline className="text-xl" /> <span>Wishlist</span>
              </button>
            </div>
            <div>
              <h4 className="uppercase font-semibold">Share: </h4>
            </div>

            <div
              className="mt-12 text-base text-gray-500 tracking-wide"
              dangerouslySetInnerHTML={{ __html: product.desc }}
            />
          </div>
        </div>
        <div className="">
          <button className="border-[rgba(0,0,255,0.5)] border-2 px-4 py-2 text-[blue] rounded-md font-semibold">
            Add Review & Feedback
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
