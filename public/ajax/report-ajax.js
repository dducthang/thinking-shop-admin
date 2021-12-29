const reportedShopBtn = document.getElementById("reported-shop-btn"); 
const reportedProductBtn = document.getElementById("reported-product-btn"); 
const reportedProductsTable = document.getElementById("reported-products-table");
const reportedShopsTable = document.getElementById("reported-shops-table");

reportedProductBtn.addEventListener('click', ()=>{
    reportedProductsTable.classList.remove('hidden');
    reportedShopsTable.classList.add('hidden');
})

reportedShopBtn.addEventListener('click', ()=>{
    reportedProductsTable.classList.add('hidden');
    reportedShopsTable.classList.remove('hidden');
})