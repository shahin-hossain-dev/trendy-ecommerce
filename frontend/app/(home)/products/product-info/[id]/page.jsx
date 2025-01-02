"use client";
import React, { useCallback, useContext, useEffect, useState } from "react";
import ImageGallery from "@/components/ProductImageGallery/ImageGallery";
import { FetchProductById } from "@/lib/FetchProduct";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Rating,
} from "@mui/material";
import { BsCartDash } from "react-icons/bs";
import { BiGitCompare } from "react-icons/bi";
import { IoHeartDislike, IoHeartOutline } from "react-icons/io5";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import Link from "next/link";
import { addToCart } from "@/lib/features/cart/cartSlice";
import { useAppDispatch } from "@/lib/features/hooks";
import { HandlerContext } from "@/lib/providers/HandlerProvider";
import axios from "axios";
import UserReview from "@/components/UserReview/UserReview";
import { useSelector } from "react-redux";
import { ReviewRatingAverage } from "@/lib/FetchReviewProduct";
import { addAverageRating } from "@/lib/features/product/productSlice";

const ProductInfo = ({ params }) => {
  const { id } = params;
  const { handleAddWishlist, wishProducts, handleRemoveWishListProduct } =
    useContext(HandlerContext);

  const [product, setProduct] = useState({});
  const [productData, setProductData] = useState({
    color: "",
  });
  const [attributes, setAttributes] = useState([]);
  const [pd, setPd] = useState({});
  const dispatch = useAppDispatch();
  const fetchData = useCallback(async () => {
    try {
      const data = await FetchProductById(id);
      setProduct(data);
      console.log(data);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  }, [id]);

  const [averageRating, setAverageRating] = useState(0);

  const fetchAverageReviewRating = useCallback(async () => {
    try {
      const rating = await ReviewRatingAverage(id);
      setAverageRating(rating);
    } catch (error) {
      console.log(error.message);
    }
  }, [id]);

  useEffect(() => {
    fetchData();
    fetchAverageReviewRating();
  }, [fetchData]);

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/Product/search/5`
      );

      setPd(res.data);
      console.log(res.data);

      const getAttribute = res.data?.json_attribute?.attributes;

      const newAttributes = [];
      for (let property in getAttribute) {
        newAttributes.push({ [property]: getAttribute[property] });
      }
      setAttributes(newAttributes);
    };
    fetchProduct();
  }, []);

  const handleChange = (e) => {
    setProductData({
      ...productData,
      [e.target.name]: e.target.value,
    });
  };

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

  const onchange = (attr) => {
    // set to a state attribute input value;
    console.log(attr);
  };

  //get added wish list product
  const addedWishProduct = wishProducts.find((pd) => pd.id === product.id);

  if (!product) {
    return <div>Loading...</div>;
  }

  // discount calculation
  const discountedPrice = product.price - product.price * (45 / 100);

  return (
    <div className="bg-white mb-28 lg:mb-6 h-fit">
      <div className="mx-auto max-w-screen-xl px-4 md:px-4 flex flex-col gap-3">
        <div className="grid gap-8 md:grid-cols-2">
          <ImageGallery
            image={product.image}
            productName={product.name}
            images={product?.images}
          />
          {/* Details pan */}
          <div className="md:py-8 space-y-4">
            <div className="mb-2 md:mb-3">
              <h2 className="text-xl font-bold text-[rgba(0,0,0,0.5)] lg:text-3xl">
                {product.name}
              </h2>
              <span className="mb-0.5 inline-block text-gray-500">
                {product.category}
              </span>
            </div>

            <div className="mb-4 space-y-3">
              <div className="flex flex-col lg:flex-row items-start gap-3 lg:items-center justify-between ">
                <div className="flex flex-col">
                  <div className="flex gap-1 items-center">
                    <Rating name="read-only" value={averageRating} readOnly />{" "}
                    <span className="text-gray-500 ">
                      {averageRating?.toFixed(1)}
                    </span>
                  </div>
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
              {/* here attribute radio button */}
              {attributes.map((attribute, idx) => (
                <div key={idx}>
                  <FormControl>
                    <FormLabel id="demo-row-radio-buttons-group-label">
                      {Object.keys(attribute)[0]}
                    </FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                    >
                      {Object.keys(Object.values(attribute)[0]).map(
                        (attr, idx) => (
                          <FormControlLabel
                            onChange={(e) =>
                              onchange({
                                [Object.keys(attribute)[0]]: e.target.value,
                              })
                            }
                            key={idx}
                            value={attr}
                            control={<Radio />}
                            label={attr}
                          />
                        )
                      )}
                    </RadioGroup>
                  </FormControl>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2.5">
              {/* add to card button*/}
              <button
                onClick={() => handleAddToCart(product)}
                className="flex items-center gap-2 bg-[#192a56] px-4 py-2 text-white rounded-full active:scale-95 duration-200 font-medium hover:bg-[#273c75]"
              >
                <BsCartDash className="text-xl" /> <span>Add To Cart</span>
              </button>
              {/* Compare button */}
              <button className="flex items-center gap-2 bg-[#192a5633] px-4 py-2  rounded-full active:scale-95 duration-200 font-medium hover:bg-[#192a56] hover:text-white">
                <BiGitCompare className="text-xl rotate-90" />{" "}
                <span>Compare</span>
              </button>
              {addedWishProduct?.id === product?.id ? (
                <button
                  onClick={() => handleRemoveWishListProduct(product.id)}
                  className="flex items-center gap-2 bg-[#192a5633] px-4 py-2  rounded-full active:scale-95 duration-200 font-medium hover:bg-[#192a56] hover:text-white"
                >
                  <IoHeartDislike className="text-xl" />{" "}
                  <span>Remove Wishlist</span>
                </button>
              ) : (
                <button
                  onClick={() => handleAddWishlist(product)}
                  className="flex items-center gap-2 bg-[#192a5633] px-4 py-2  rounded-full active:scale-95 duration-200 font-medium hover:bg-[#192a56] hover:text-white"
                >
                  <IoHeartOutline className="text-xl" />{" "}
                  <span>Add Wishlist</span>
                </button>
              )}
            </div>
            <div className="flex gap-4 items-center">
              <h4 className="uppercase font-semibold">Share: </h4>
              <div className="flex gap-2">
                <Link href="https://www.facebook.com/">
                  <span className="flex justify-center items-center w-[40px] h-[40px]  hover:bg-sky-500 hover:text-white rounded-full text-[#192a5633] duration-300">
                    <FaFacebookF />
                  </span>
                </Link>
                <Link href="https://www.twitter.com/">
                  <span className="flex justify-center items-center w-[40px] h-[40px]  hover:bg-sky-500 hover:text-white rounded-full text-[#192a5633]  duration-300">
                    <FaTwitter />
                  </span>
                </Link>
                <Link href="https://www.youtube.com/">
                  <span className="flex justify-center items-center w-[40px] h-[40px]  hover:bg-red-500 hover:text-white rounded-full text-[#192a5633] duration-300">
                    <FaYoutube />
                  </span>
                </Link>
                <Link href="https://www.linkedin.com/">
                  <span className="flex justify-center items-center w-[40px] h-[40px]  hover:bg-sky-500 hover:text-white rounded-full text-[#192a5633]  duration-300">
                    <FaLinkedinIn />
                  </span>
                </Link>
              </div>
            </div>

            <div
              className="mt-12 text-base text-gray-500 tracking-wide"
              dangerouslySetInnerHTML={{ __html: product.desc }}
            />
          </div>
        </div>
        <UserReview productId={product.id} />
      </div>
    </div>
  );
};

export default ProductInfo;
