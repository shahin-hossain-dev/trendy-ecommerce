"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa6";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { IoHeartDislike } from "react-icons/io5";
import { setLocalStorageValue } from "@/lib/wishlistLocalStorage";

const Wishlist = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getDate = async () => {
      const res = await axios.get("/data/product.json");

      setProducts(res.data);
    };
    getDate();
  }, []);

  const handleWishlist = (id) => {
    setLocalStorageValue(id);
  };

  const removeWishListProduct = (id) => {
    removeWishListProduct(id);
  };

  return (
    <section className="min-h-screen">
      <div className=" w-[95%] lg:w-[80%] mx-auto shadow border p-3 lg:p-6 mt-4 lg:mt-6">
        <div className="flex justify-center flex-col items-center text-secondary">
          <FaRegHeart className="text-2xl lg:text-5xl" />
          <h2 className="text-2xl lg:text-4xl  font-bold">My Wishlist</h2>
        </div>
        {/* List */}

        <Box className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          {products.map((product) => (
            <Card
              key={product.id}
              sx={{ minWidth: 275 }}
              className="flex flex-col justify-between "
            >
              <CardContent>
                <div className="group w-full h-[250px] overflow-hidden relative">
                  <Image
                    src={product.image}
                    alt={product.name}
                    height={200}
                    width={300}
                    className="w-full h-[250px] object-cover hover:scale-105 duration-300"
                  />
                  <div className=" right-4 top-4 absolute flex flex-col ">
                    <button
                      onClick={() => removeWishListProduct(product.id)}
                      className="bg-gray-100 mb-3 p-2 text-red-500 hover:bg-dash-primary scale-0 group-hover:scale-[10px] duration-300  hover:text-white rounded-full"
                    >
                      <IoHeartDislike className="text-2xl " />
                    </button>
                  </div>
                </div>
                <Typography gutterBottom className="!text-2xl text-secondary">
                  {product.name}
                </Typography>

                <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
                  <p className="flex  gap-1 text-xs  font-lato md:text-base">
                    <span className="mr-0.5">৳</span>
                    {new Intl.NumberFormat().format(product.price)}
                  </p>
                </Typography>
                <Typography variant="body2">
                  <span
                    className={`font-semibold ${
                      product.stock === "In Stock"
                        ? "text-dash-primary"
                        : "text-rose-600"
                    }`}
                  >
                    {product.stock}
                  </span>
                </Typography>
              </CardContent>

              <CardActions>
                <Button
                  onClick={() => handleWishlist(product)}
                  size="small"
                  variant="contained"
                  className="w-full"
                >
                  Add To Cart
                </Button>
              </CardActions>
            </Card>
          ))}
        </Box>
      </div>
    </section>
  );
};

export default Wishlist;
