function formatToZAR(amount){
  return amount.toLocaleString("en-ZA",{
    style: "currency",
    currency: "ZAR"
  });
}

function render() {
  const prices = {
    starterPrice: 1500,
    basicPrice: 2500,
    businessPrice: 3500,
    advancedPrice: 7000,
    ecommercePrice: 10000,
    domainPrice: 250,
    starterHostingPrice: 150,
    basicHostingPrice: 200,
    BusinessHostingPrice: 250,
    AdvancedHostingPrice: 300,
    commerceHostingPrice: 400
  };
  
  for (const id in prices){
    const element = document.getElementById(id);

    if(!element){
      console.warn(`Missing element with id: ${id}`);
      continue;
    }

    element.textContent = formatToZAR(prices[id]);
  }
}

render();

const now = new Date();
const year = now.getFullYear();
const yearEl = document.getElementById("currentYear");

if (yearEl) {
  yearEl.textContent = year;
}
