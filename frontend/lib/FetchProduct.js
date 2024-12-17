import axios from "axios";

const FetchProductById = async (id) => {
  const data = await fetch("/data/product.json");
  const products = await data.json();
  const product = await products.find((pd) => pd.id === parseInt(id));
  return product;
};

//fetch feature products
const fetchFeatureProducts = async () => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_ENDPOINT}/Product/search`
    );
    return res.data;
  } catch (error) {
    console.error("Error fetching feature products:", error.message);
    throw new Error("Failed to fetch feature products");
  }
};

export { FetchProductById, fetchFeatureProducts };
