import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Features = () => {
  // const [features, setFeatures] = useState([]); //will be active for real data
  const fetchFeatures = async () => {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_ENDPOINT}/Product/search`
    );
    //will be active for real data
    // setFeatures(res.data);
  };

  useEffect(() => {
    fetchFeatures();
  }, []);
  return (
    <div>
      <h1 className="text-xl font-bold text-[#192A56] font-oswald uppercase">
        Features
      </h1>
      <div className="flex flex-col  md:flex-row gap-5 justify-between mt-4 lg:mt-6">
        {features.map((feature) => (
          <div key={feature.id}>
            <Link href={feature.href}>
              <Image
                src={feature.image}
                alt="feature image"
                width={500}
                height={300}
                className="rounded-lg h-[150px] lg:h-[200px] object-cover"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;

const features = [
  { id: 1, href: "products/product-info/2", image: "/img/banner1.jpg" },
  { id: 2, href: "products/product-info/7", image: "/img/banner4.jpg" },
  { id: 3, href: "products/product-info/2", image: "/img/banner5.jpg" },
];
