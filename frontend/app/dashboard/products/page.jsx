import PageHeader from "@/components/Dashboard/DashboardHeader/PageHeader";

const Products = () => {
  return (
    <div>
      <PageHeader
        title={"All Products"}
        btnName={"Add Product"}
        href={"/dashboard/products/add-product"}
      />
    </div>
  );
};

export default Products;
