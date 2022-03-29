import { formatPrice } from "~/utils/prices";

export default function ProductCard({ product }) {
  const variant = product.variants[0];

  return (
    <div>
      <img src={product.thumbnail} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{formatPrice(variant)}</p>
    </div>
  );
}
