import { json, useLoaderData } from "remix";
import { BiShoppingBag } from "react-icons/bi";

import { createClient } from "~/utils/client";
import { formatPrice } from "~/utils/prices";

export const loader = async ({ params }) => {
  const client = createClient();
  const { product } = await client.products.retrieve(params.productId);
  return json(product);
};

export default function Product() {
  const product = useLoaderData();
  const variant = product.variants[0];

  return (
    <div className="w-full">
      <div className="grid items-center grid-cols-2">
        <div>
          <img className="w-full" src={product.thumbnail} alt={product.title} />
        </div>
        <div className="flex flex-col px-16 space-y-8">
          <h1>{product.title} </h1>
          <p className="font-semibold text-teal-600">{formatPrice(variant)}</p>
          <div>
            <p className="font-semibold">Select Size</p>
          </div>
          <div>
            <p className="font-semibold">Select Quantity</p>
          </div>
          <div>
            <button className="inline-flex items-center px-4 py-2 font-semibold text-gray-200 bg-gray-700 rounded hover:text-white hover:bg-gray-900">
              <BiShoppingBag className="mr-2 text-lg" />{" "}
              <span>Add to Cart</span>
            </button>
          </div>
          <div>
            <p className="font-semibold">Product Description</p>
            <hr />
            <p className="mt-4 text-gray-700">{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
