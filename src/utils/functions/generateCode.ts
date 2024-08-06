export const generateCode = (firstChars: string, countDigit = 6) => {
  // تولید دو حرف تصادفی
  const letters =
    String.fromCharCode(65 + Math.floor(Math.random() * 26)) +
    String.fromCharCode(65 + Math.floor(Math.random() * 26));

  // تولید رقم‌های تصادفی بر اساس countDigit
  const maxNumber = Math.pow(10, countDigit) - 1;
  const randomNumber = Math.floor(Math.random() * (maxNumber + 1));
  const digits = (Array(countDigit).join("0") + randomNumber).slice(
    -countDigit
  );

  return `${firstChars}-${digits}`;
};
