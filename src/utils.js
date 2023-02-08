export const currencyFormatter = new Intl.NumberFormat(undefined,{
    currency:"inr",
    style : "currency",
    minimumFractionDigits : 0
}) // Will format the number (Add rupees symbol and add commas)