import { createClient } from "~/utils/client";
import { json, useLoaderData } from "remix";

import ProductCard from "~/components/product-card";

export const loader = async () => {
  const client = createClient();
  const { products } = await client.products.list();
  return json(products);
};

export default function ProductsIndexRoute() {
  const products = useLoaderData();
  // console.log(products[0].variants);

  return (
    <div className="w-full mt-8">
      <h1>Latest Arrivals</h1>
      <div>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
