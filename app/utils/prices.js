// TODO: Detect user language
const locale = "en-US";

// TODO: Allow users to select region currency (usd | eur)
const regionCurrency = "usd";

// TODO: Detect user currency/Allow currency selection (usd | eur)
const taxRate = 0;

export function formatPrice(variant) {
  const price = variant.prices.find(
    (price) => price.currency_code == regionCurrency
  );
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: regionCurrency,
  }).format((price.amount * (1 + taxRate)) / 100);
}
