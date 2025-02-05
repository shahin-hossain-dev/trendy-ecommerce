import ImageGallery from "@/components/ProductImageGallery/ImageGallery";
import { FetchProductById } from "@/lib/FetchProduct";
import { Rating } from "@mui/material";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import Link from "next/link";
import UserReview from "@/components/UserReview/UserReview";
import { ReviewRatingAverage } from "@/lib/FetchReviewProduct";
import ProductActionButton from "@/components/Product/ProductInfo/ProductActionButton";

const ProductInfo = async ({ params }) => {
  const { id } = params;

  const product = await FetchProductById(id);
  let averageRating = await ReviewRatingAverage(id);

  if (isNaN(averageRating)) {
    averageRating = 0;
  }

  // const handleChange = (e) => {
  //   setProductData({
  //     ...productData,
  //     [e.target.name]: e.target.value,
  //   });
  // };

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
              <h2 className="text-xl font-bold text-[rgba(0,0,0,0.8)] lg:text-3xl">
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
                  </div>
                </div>
                <div className="flex items-center">
                  <p>Availability </p>
                  <p className="bg-[#192a56] px-3 ms-3 text-white rounded-full font-medium ">
                    In Stock
                  </p>
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

            <ProductActionButton product={product} />
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
              // dangerouslySetInnerHTML={{ __html: product.desc }}
            />
            {product.desc}
          </div>
        </div>
        <UserReview productId={product.id} />
      </div>
    </div>
  );
};

export default ProductInfo;
