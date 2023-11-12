let productCard = document.createElement('div');
productCard.classList.add('product-card')
productCard.innerHTML =`
<img class="product-thumbnail" src="" alt="Product Thumbnail">
 <div class="product-info">
     <div class="product-title"></div>
     <div class="product-price-cont">
      <span class="product-price"></span>
     <span class="discount"></span>
     </div>
     <div class="product-rating"></div>
</div>
<button class="save"><img class="save-icon" src="../../public/images/heart.svg" alt="save-icon"></button> <button class="add-to-cart"><img class="cart-icon" src="../../public/images/shopping-cart.svg" alt="cart-icon"></button>
`

export default productCard  