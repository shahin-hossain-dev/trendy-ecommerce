import { cartVisible } from "@/lib/features/cart/cartSlice";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import CartCard from "./CartCard";
import Image from "next/image";

const CartSideBar = () => {
  const { isCartVisible, items } = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  const handleCloseCart = () => {
    dispatch(cartVisible(false));
  };

  return (
    <div
      className={`fixed right-0 top-0 h-screen  z-50 bg-white shadow-lg w-[90%] md:w-[400px]  transition-transform duration-500 ease-in-out ${
        isCartVisible ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Container to ensure proper layout */}
      <div className="flex flex-col h-full   shadow-2xl">
        {/* Cart Header */}
        <div className="p-4 flex items-center justify-between bg-primary text-white">
          <h2 className="text-base font-medium">Your Shopping Cart</h2>
          <button onClick={handleCloseCart}>
            <FaArrowRight />
          </button>
        </div>

        <div className="px-4 lg:px-6 h-full flex flex-col">
          {/* Cart Items */}
          <div>
            {items?.length === 0 && (
              <div className="flex justify-center items-center flex-col">
                <h2 className="text-xl font-medium text-gray-400 text-center mt-3">
                  Your Cart is Empty
                </h2>
                <Image
                  src={"/img/empty-cart.png"}
                  height={250}
                  width={250}
                  alt="empty cart"
                  className="opacity-50 mt-6"
                />
              </div>
            )}
            <div className="overflow-auto h-[64vh]">
              {items?.map((cart) => (
                <CartCard key={cart._id} cart={cart}></CartCard>
              ))}
            </div>
          </div>

          <div className="mt-auto ">
            <div>
              {items?.length > 0 && (
                <div className=" text-secondary border-y-gray-300 border-dashed border-y px-5 py-2 mb-6 flex gap-3 justify-between font-medium">
                  <h3>Sub Total:</h3>
                  <span className="mr-0.5 font-bold">
                    ৳{" "}
                    {items
                      ?.reduce((acc, cur) => acc + parseFloat(cur.price), 0)
                      .toFixed(2)}
                  </span>
                </div>
              )}
            </div>

            {items?.length > 0 && (
              <div className="flex items-center  mb-4 justify-center gap-6">
                <Link
                  href={"/checkout"}
                  className="px-10 py-2 w-full text-center font-medium text-gray-500 duration-300 border border-gray-300 hover:bg-primary  hover:text-white rounded "
                >
                  Check Out
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSideBar;
