const useFormatToEuro = (value: number) =>
  new Intl.NumberFormat("pt-PT", {
    style: "currency",
    currency: "EUR",
  }).format(value);
  
export default useFormatToEuro;
