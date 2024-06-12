let USDollar = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

let TurkishLira = new Intl.NumberFormat("tr-TR", {
  style: "currency",
  currency: "TRY",
});

export function priceFormat(price: number): string {
  return TurkishLira.format(price).split(",")[0];
}
