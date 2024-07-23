fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((products) => {
    const container = document.getElementById("product-container");

    products.forEach((product) => {
      const title = document.createElement("div");
      title.innerHTML = `
        <div class="product-card">
            <img class="product-image" src="${product.image}">
            <h3 class="product-card-h3">${product.title}</h3>
            <p class="product-card-p">$${product.price}</p>
            <button class="product-card-button" onclick="openModal(${product.id})">Detayları Görüntüle</button>
        </div>`;

      container.appendChild(title);
    });
  })
  .catch((error) => console.error("Fetch error:", error));

function openModal(productId) {
  fetch(`https://fakestoreapi.com/products/${productId}`)
    .then((response) => response.json())
    .then((product) => {
      const modalImage = document.getElementById("modalImage");
      const modalTitle = document.getElementById("modalTitle");
      const modalDescription = document.getElementById("modalDescription");
      const modalPrice = document.getElementById("modalPrice");

      modalImage.src = product.image;
      modalTitle.innerHTML = "Ürün Adı: <br/>" + product.title;
      modalDescription.innerHTML = "<b>Ürün açıklaması:</b> <br/> " + product.description;
      modalPrice.innerHTML = "Ürün Fiyatı:  " + "<b>" + product.price + "$ </b>";


      document.getElementById("modal").style.display = "flex";
    })
    .catch((error) => console.error("Fetch error:", error));
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}
