import { cartVisible } from "@/lib/features/cart/cartSlice";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

const CartSideBar = () => {
  const { isCartVisible } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleCloseCart = () => {
    dispatch(cartVisible(false));
  };

  return (
    <div
      className={`fixed right-0 top-0 h-screen z-50 bg-white shadow-lg w-[400px] transition-transform duration-500 ease-in-out ${
        isCartVisible ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Container to ensure proper layout */}
      <div className="flex flex-col h-full  shadow-2xl">
        {/* Cart Header */}
        <div className="p-4 flex items-center justify-between bg-primary text-white">
          <h2 className="text-base font-medium">Your Shopping Cart</h2>
          <button onClick={handleCloseCart}>
            <FaArrowRight />
          </button>
        </div>

        {/* Cart Items */}
        {/* <div>
          {carts?.length === 0 && (
            <h2 className="text-xl font-medium text-gray-400 text-center mt-3">
              Cart is Empty
            </h2>
          )}
          {carts?.map((cart) => (
            <CartCard
              key={cart._id}
              cart={cart}
              handleDelete={handleDelete}
              refetch={refetch}
              isFetching={isFetching}
            ></CartCard>
          ))}
        </div>

        {carts?.length > 0 && (
          <div className="bg-slate-100 p-5 flex gap-3 justify-between font-medium">
            <h3>Sub Total:</h3>${" "}
            {carts?.reduce((acc, cur) => acc + cur.totalPrice, 0).toFixed(2)}
          </div>
        )} */}

        {/* Checkout Page Link Buttons at the bottom */}
        <div className="flex items-center mt-auto justify-center gap-6 bg-slate-100 py-5">
          {/* <Link
            href={"/checkout"}
            className="px-10 py-2 bg-[#84b93e] text-white rounded hover:bg-green-600"
          >
            View Cart
          </Link> */}
          <Link
            href={"/checkout"}
            className="px-10 py-2 w-full text-center font-medium bg-primary text-white rounded hover:bg-[#3e84b9]"
          >
            Check Out
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartSideBar;
