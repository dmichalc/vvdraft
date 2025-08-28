document.addEventListener("DOMContentLoaded", () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const productList = document.getElementById("products");
    const cartCount = document.getElementById("cart-count");

    // Update cart count
   cartCount.textContent = cart.length;

    // Render products
    products.forEach((product, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <h4>${product.name}</h4>
            <p>${product.description}</p>
            <p>Price: $${product.price.toFixed(2)}</p>
            <button data-index="${index}"><h5>Add to Cart</h5></button>
        `;
        productList.appendChild(li);
    });

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
// Sample product data
const products = [
    {
        name: "Vera's Book",
        description: "Description of Vera's Book",
        price: 10.00
    },
    {
        name: "Little Vera Mystery",
        description: "Description of Little Vera Mystery",
        price: 15.00
    }
];
