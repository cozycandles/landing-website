$(document).ready(function () {


    fetch('/landing-website/assets/data/products.json')
        .then(response => {
            if (!response.ok) {
                throw new Error("HTTP error " + response.status);
            }
            return response.json();
        })
        .then(data => {
            const products = data;
            let output = "";
            $.each(products, function (i, product) {
                output += `
        <div class="col-md-4 mb-4">
          <div class="card product-card h-100">
            <img src="${product.image}" class="card-img-top" alt="${product.name}">
            <div class="card-body">
              <h5 class="card-title">${product.name}</h5>
              <p class="card-text">${product.description}</p>
              <p class="fw-bold">₹${product.price.toFixed(2)}</p>
              <a href="${product.link}" class="btn btn-view-details-rounded">Buy Now</a>
            </div>
          </div>
        </div>`;
            });
            $("#product-list").html(output);
        })
        .catch(error => console.error('Error loading JSON:', error));

});