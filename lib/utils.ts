export function extractPrice(...elements: any) {
  for (const element of elements) {
    const priceText = element.text().trim();

    if (priceText) return priceText.replace(/[^\d.]/g, "");
  }
  return "";
}

export function extracCurrency(element: any): string {
  const currencyText = element.text().trim().slice(0, 1);

  return currencyText ? currencyText : "";
}
