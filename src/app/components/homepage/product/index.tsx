"use client";
import Image from "next/image";
import CategoryImage from "../../../../../public/shirt.png";
import ProductItem from "./product-item";
import { products } from "./constants";

export default function Products() {
  return (
    <div className="mt-[48px]">
      <h2 className="text-heading-3 p-1.5 text-center">GỢI Ý HÔM NAY</h2>
      <div className="flex grid-cols-6 xl:grid-cols-5 xs:grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-1 grid">
        {products.map((product, index) => {
          return (
            <div key={`product-${index}`} className="">
              <ProductItem
                id={product.id}
                name={product.name}
                price={product.price}
                quantitySale={product.quantitySale}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
