// import { fetchFeatureProducts } from "@/lib/FetchProduct";
import products from "../../../../public/data/product.json";
import ProductCard from "@/components/Product/ProductCard";

const FeatureContainer = () => {
  // const products = ‍ fetchFeatureProducts('categoryKeyword')

  return (
    <div className="grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-x-4 mt-12 gap-y-6">
      {products?.slice(0, 12).map((product, idx) => (
        <div key={product.id}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};

export default FeatureContainer;
