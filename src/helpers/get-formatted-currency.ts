export function getFormattedCurrency(value: number, ignoreDecimals = false) {
  const options = {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }

  if (ignoreDecimals) {
    options.minimumFractionDigits = 0
    options.maximumFractionDigits = 0
  }

  return value.toLocaleString('pt-BR', options)
}
