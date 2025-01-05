import axios from "axios";

//fetch products
const fetchProducts = async () => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_ENDPOINT}/Product/search`
    );
    return res.data;
  } catch (error) {
    console.log("Error fetching products", error.message);
    throw new Error("Failed to product fetch");
  }
};

//fetch product by id
const FetchProductById = async (id) => {
  try {
    const data = await fetch("http://localhost:3000/data/product.json");
    const products = await data.json();
    const product = await products.find((pd) => pd.id === parseInt(id));
    return product;
  } catch (error) {
    console.log("Error fetching products", error.message);
  }
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

export { FetchProductById, fetchFeatureProducts, fetchProducts };
