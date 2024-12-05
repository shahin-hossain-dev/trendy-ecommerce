"use client";
import React, { useContext } from "react";
import Image from "next/image";
import { useAppDispatch } from "@/lib/features/hooks";
import { FaRegHeart } from "react-icons/fa";
import { setLocalStorageValue } from "@/lib/wishlistLocalStorage";
import Link from "next/link";
import { HandlerContext } from "@/lib/providers/HandlerProvider";
import { IoHeartDislike } from "react-icons/io5";
import { addToCart } from "@/lib/features/cart/cartSlice";
import { useSelector } from "react-redux";

const ProductCard = ({ product }) => {
  const { handleAddWishlist, wishProducts, handleRemoveWishListProduct } =
    useContext(HandlerContext);
  const { items } = useSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const isExist = items.some((item) => item.productId === product.id);

  const handleAddToCart = (product) => {
    let count = 1;
    let totalPrice = product.price;

    if (product.count) {
      count++;
      totalPrice = totalPrice + product.price;
    }

    const cartInfo = {
      name: product.name,
      image: product.image,
      productId: product.id,
      price: product.price,
      count,
      totalPrice,
    };
    dispatch(addToCart(cartInfo));
  };

  const handleBuy = () => {
    dispatch(addToCart(cartInfo));
  };

  //get added wish list product
  const addedWishProduct = wishProducts.find((pd) => pd.id === product.id);

  return (
    <div className="relative flex flex-col justify-between h-full overflow-hidden bg-white rounded-lg shadow-md hover:shadow-lg group">
      <div className="absolute top-0 left-0 z-40 w-16 h-16">
        <div className="absolute transform -rotate-45 bg-[#192a56] text-center text-white font-semibold py-1 left-[-55px] top-[20px] w-[170px] text-xs">
          {product.offer} % OFF
        </div>
      </div>

      <div className="z-30">
        <div className="group  overflow-hidden">
          <Link href={`products/product-info/${product.id}`}>
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={200}
              className="object-cover w-full aspect-[4/5] group-hover:scale-105 transition-all duration-300 "
            />
          </Link>
          <div className=" right-4 top-4 absolute flex flex-col ">
            {addedWishProduct?.id === product?.id ? (
              <button
                onClick={() => handleRemoveWishListProduct(product.id)}
                className="bg-gray-100 mb-3 p-1.5 text-red-500 hover:bg-primary scale-0 group-hover:scale-[10px] duration-300  hover:text-white rounded-full"
              >
                <IoHeartDislike className="text-xl " />
              </button>
            ) : (
              <button
                onClick={() => handleAddWishlist(product)}
                className="bg-gray-100 mb-3 p-1.5 text-red-500 hover:bg-primary scale-0 group-hover:scale-[10px] duration-300  hover:text-white rounded-full"
              >
                <FaRegHeart className="text-xl " />
              </button>
            )}
          </div>
        </div>
        <div className="p-2 space-y-1.5 overflow-hidden">
          <h2 className="leading-tight text-center capitalize truncate text-lg font-oswald">
            {product.name}
          </h2>
          <div className="flex justify-center gap-1 flex-nowrap md:gap-3">
            <p className="flex justify-center gap-1 text-xs text-red-500 line-through flex-nowrap font-lato md:text-base">
              <span className="mr-0.5">৳</span>
              {/* "bn-BD", {
                style: "currency",
                currency: "BDT",
              } */}
              {new Intl.NumberFormat().format(product.price)}
            </p>
            <p className="flex justify-center gap-1 text-xs flex-nowrap font-lato md:text-base">
              <span className="mr-0.5">৳</span>
              {new Intl.NumberFormat().format(product.discountedPrice)}
            </p>
          </div>
          <div className="flex justify-center gap-1.5">
            <button
              onClick={handleBuy}
              className="rounded-md bg-[#192a56]  basis-1/2 text-[10px] capitalize text-white md:px-2 md:text-xs"
            >
              <Link href={"/checkout"} className="px-1 py-1">
                Buy Now
              </Link>
            </button>
            <button
              className="rounded-md border border-[#192a56] basis-1/2 px-1 py-1 text-[10px] capitalize text-[#192a56] md:px-2 md:text-xs"
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
