document.addEventListener("DOMContentLoaded", () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const productList = document.getElementById("products");
    const cartCount = document.getElementById("cart-count");



    // Add to cart functionality
    productList.addEventListener("click", (e) => {
        if (e.target.tagName === "BUTTON") {
            const index = e.target.dataset.index;
            cart.push(products[index]);
            localStorage.setItem("cart", JSON.stringify(cart));
            cartCount.textContent = cart.length;
        }
    });
});

