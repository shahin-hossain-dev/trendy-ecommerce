import axios from "axios";

const FetchAllReview = async (id) => {
  if (!id) {
    return;
  }
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_ENDPOINT}/ReviewRating/search/${id}`
    );
    return res.data;
  } catch (error) {
    console.error(
      "Axios fetch error:",
      error.response?.data?.message || error.message
    );
    throw new Error(error.response?.data?.message || "An error occurred");
  }
};

const FetchReviewProductById = async (userId, productId) => {
  if (!userId || !productId) {
    return;
  }
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_ENDPOINT}/ReviewRating/search/${userId}/${productId}`
    );
    return res.data;
  } catch (error) {
    console.error(
      "Axios fetch error:",
      error.response?.data?.message || error.message
    );
    throw new Error(error.response?.data?.message || "An error occurred");
  }
};

const ReviewRatingAverage = async (productId) => {
  if (!productId) {
    return;
  }
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_ENDPOINT}/ReviewRating/averageRating/${productId}`,
      { cache: "no-store" }
    );
    //console.log(res.data);
    const rating = res.json();
    return rating;
  } catch (error) {
    console.error(
      "Axios fetch error:",
      error.response?.data?.message || error.message
    );
    throw new Error(error.response?.data?.message || "An error occurred");
  }
};

export { FetchAllReview, FetchReviewProductById, ReviewRatingAverage };
