export const formatNaira = (amount: number): string =>
  `₦${amount.toLocaleString("en-NG")}`;

export const generatePaymentReference = (): string => {
  const stamp = Date.now().toString(36).toUpperCase();
  const rand = Math.random().toString(36).slice(2, 7).toUpperCase();
  return `CV-${stamp}-${rand}`;
};
