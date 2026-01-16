export function formatCurrency(priceCents) {

  return (priceCents / 100).toFixed(2);

/* format to south african currency format
   The right way to go about this

const amount = (priceCents / 100).toFixed(2);

const formartted = new 
Intl.NumberFormat('en-ZA', {
  style: 'currency',
  currency: 'ZAR'
}).format(amount)

return formartted;
*/
}