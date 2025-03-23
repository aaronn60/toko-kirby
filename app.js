// Daftar produk affiliate
const products = [
    { number: "1", name: "Nutrijell Stroberi/Strawberry Jelly Powder [15 g]", price: "Rp5.087", image: "https://via.placeholder.com/150", link: "https://blibli.onelink.me/aFLN/nutrijellstrabrry" },
    { number: "2", name: "SUPER SOL Karbol Wangi Pine 23ml per renceng", price: "Rp5.087", image: "https://via.placeholder.com/150", link: "https://blibli.onelink.me/aFLN/supersolrenceng" },
    { number: "3", name: "DETTOL COOL 60 GR", price: "Rp4.738", image: "https://via.placeholder.com/150", link: "https://blibli.onelink.me/aFLN/dettolcool" },
    { number: "4", name: "LIFEBUOY Total 10 Sabun Batang [75 g]", price: "Rp3.990", image: "https://via.placeholder.com/150", link: "https://blibli.onelink.me/aFLN/lIfebuoy10" },
    { number: "5", name: "Masako Bumbu Kaldu Penyedap Rasa Ayam 9 g [12 Sachet/ 1 Renceng]", price: "Rp5.280", image: "https://via.placeholder.com/150", link: "https://blibli.onelink.me/aFLN/masakorenceng" }
];

// Menampilkan daftar produk di halaman
const productList = document.getElementById("product-list");
products.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <div class="product-info">
            <h3>${product.number}. ${product.name}</h3>
            <p>Harga: ${product.price}</p>
            <a href="${product.link}" target="_blank">Beli Sekarang</a>
        </div>
    `;
    productList.appendChild(div);
});
