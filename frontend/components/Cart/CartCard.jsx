"use client";
import React, { useState } from "react";
import Image from "next/image";
import axios from "axios";
import { GoTrash } from "react-icons/go";
import { ImSpinner3 } from "react-icons/im";
import { useDispatch } from "react-redux";
import { addToCart } from "@/lib/features/cart/cartSlice";
const CartCard = ({ cart, handleDelete }) => {
  const { id, image, price, productId, name, quantity, userEmail, totalPrice } =
    cart;

  // quantity increment
  const handleIncrease = async () => {
    if (quantity > 9) {
      return;
    }

    // const resp = await axios.patch(
    //   `${process.env.NEXT_PUBLIC_BASE_URL}/products/api/addToCart/update/${_id}`,
    //   { type: "increment", price }
    // );
  };

  // quantity decrement

  const handleDecrease = async () => {
    if (cart?.quantity < 2) {
      return;
    }

    // const resp = await axios.patch(
    //   `${process.env.NEXT_PUBLIC_BASE_URL}/products/api/addToCart/update/${_id}`,
    //   { type: "decrement", price }
    // );
  };

  return (
    <div className="flex-grow overflow-y-auto">
      <div className="flex items-center justify-between gap-3 p-2 border-b border-dashed px-4">
        <div className="flex items-center gap-3">
          <Image
            width={56}
            height={56}
            src={image}
            alt={name}
            className="object-cover w-[56px] h-[56px]"
          />
          <div className="space-y-3 text-secondary">
            <h3 className="text-base">{name}</h3>
            <div className=" flex items-center gap-3">
              <button
                onClick={handleDecrease}
                className="border border-gray-300 shadow text-center px-2 rounded-md text-xl"
              >
                {" "}
                -{" "}
              </button>
              <span>{cart?.count || 1}</span>
              <button
                onClick={handleIncrease}
                className="border border-gray-300 shadow text-center px-2 rounded-md text-xl"
              >
                {" "}
                +{" "}
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end gap-3 text-secondary">
          <button
            // onClick={() => handleDelete(_id)}
            className="text-secondary hover:text-red-600 duration-300 px-2 rounded-md"
          >
            <GoTrash className="text-lg " />
            {/* loading remove */}
            {/* {loading ? (
              <ImSpinner3 className="animate-spin" />
            ) : (
              <GoTrash className="text-lg " />
            )} */}
          </button>
          <p>
            <span className="mr-0.5">৳</span>{" "}
            {new Intl.NumberFormat().format(parseFloat(price).toFixed(2))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
