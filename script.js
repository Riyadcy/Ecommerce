fetch("https://fakestoreapi.com/products").then((data)=>{
    return data.json();
}).then((objectData)=>{
    let tableData=" ";
    objectData.map((value)=>{
        tableData+=  `
        <div class="col">
            <div class="card">
                <img src="${value.image}" class="card-img-top img-fluid" alt="${value.title}">
                <div class="card-body">
                    <h5 class="card-title">${value.title}</h5>
                    <p class="card-text">${value.description}</p>
                    <span>${value.price}</span>
                    <a href="#" class="btn btn-primary">Buy it</a>
                </div>
            </div>
        </div>`;
    })
    document.getElementById("cards").innerHTML=tableData;
})
    

   
