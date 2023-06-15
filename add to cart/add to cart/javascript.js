var data = [
    {
        title: " Luxury Line Organza Unstitched 4-Pc",
        img: "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/18102022/23707_959_1666074630_634e48063b65b-1195093515741.jpg",
        price: "Rs 4,499",
    },

    {
        title: "Oxford Blue Embroidered Organza - Luxury Line Unstitched 4-Pc",
        img: "https://d30fs77zq6vq2v.cloudfront.net/product/1080x1619/18102022/23712_56_1666074913_634e49213de7a-178131713087.jpg",
        price: "Rs 4,499",
    },

    {
        title: "Pastel Yellow Embroidered Organza- Luxury Line Unstitched 4-Pc",
        img: "https://d30fs77zq6vq2v.cloudfront.net/product/1080x1619/18102022/23709_204_1666074341_634e46e5ad3ab-1124206089413.jpg",
        price: "Rs 4,499",
    },

    {
        title: "Teal Blue Embroidered Organza - Luxury Line Unstitched 4-Pc",
        img: "https://d30fs77zq6vq2v.cloudfront.net/product/1080x1619/18102022/23711_964_1666074829_634e48cd3decb-1208355574795.jpg",
        price: "Rs 4,499",
    },

]
var html = ''
data.forEach(a => {
    html += `
    <div class ="col-md-4">
    <div class="card" style="width: 18rem;">
    <img class="card-img-top" src="${a.img}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${a.title}</h5>
      <p class="card-text">${a.price}</p>
      <button type="button" class="btn btn-danger"
      data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="func(this)"
      data-name="${a.title}" data-price="${a.price}"
      
      data-img="${a.img}">
      Add to bucket
   </button>
    </div>
  </div>
  </div>`

  document.getElementById('product').innerHTML = html;
})





