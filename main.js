function formatToZAR(amount) {
  return amount.toLocaleString("en-ZA", { style: "currency", currency: "ZAR", maximumFractionDigits: 0 });
}

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

for (const [id, amount] of Object.entries(prices)) {
  const element = document.getElementById(id);
  if (element) element.textContent = formatToZAR(amount);
}

const yearElement = document.getElementById("currentYear");
if (yearElement) yearElement.textContent = new Date().getFullYear();

const revealElements = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const observer = new IntersectionObserver((entries, activeObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        activeObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealElements.forEach((element) => observer.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}
