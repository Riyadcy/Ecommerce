// Get the value of the 'id' parameter from the URL
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

// Use the productId to fetch data for the specific product
fetch(`https://fakestoreapi.com/products/${productId}`)
    .then((data) => {
        return data.json();
    })
    .then((productData) => {
    let productCard ="";
    productCard = `<div class="card col-6 my-3">
    <img src="${productData.image}" id="product-image">
    </div>
    <div class="card-body col-6 my-2">
        <h2 class="" id="product-title">${productData.title}</h2>
        <p class="card-text" id="">${productData.description}</p>
        <span class="card-price" id="">$${productData.price}</span>
        <a href="#" id="btn" class="btn-lg btn-success mx-3">Buy</a>
    
    </div>`

    document.getElementById("product").innerHTML=productCard;
        // Display the product information on the page
    });
