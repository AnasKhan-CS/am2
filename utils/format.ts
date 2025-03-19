export const formatCurrency = (amount: number): string => {
  return `PKR ${amount.toLocaleString()}`
}

export const formatArea = (area: number): string => {
  return `${area.toLocaleString()} sq ft`
}

