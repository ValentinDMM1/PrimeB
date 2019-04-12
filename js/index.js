const cart = new Cart($('#cartModal'));
const productList = new ProductList('products.json', $('.products-container'), cart);
//document.querySelector('.search').addEventListener('keydown', productList.renderProducts($()))