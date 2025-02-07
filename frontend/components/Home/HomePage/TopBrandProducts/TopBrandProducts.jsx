import React from "react";
import SectionTitle from "../SectionTitle";
import products from "../../../../public/data/product.json";
import ProductCard from "@/components/Product/ProductCard";

const TopBrandProducts = () => {
  return (
    <div className="container mx-auto">
      <SectionTitle
        title="Top Brand Products"
        description="Mirum est notare quam littera gothica, quam nunc putamus parum claram anteposuerit litterarum formas."
      />
      <div className="grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-x-4 mt-12 gap-y-6">
        {products?.slice(0, 12).map((product, idx) => (
          <div key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBrandProducts;
