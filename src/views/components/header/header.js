let Header = 
        /*html*/`
        <nav class="nav-bar">
            <div class="home-logo">
                <a href="#/"><img src="./public/images/e-shop-logo.png" alt=""></a>
            </div>
            <div class="search-container">
                <input class="search" type="search">
                <button class="search-button"><img src="./public/images/search.png" alt="search"></button>
            </div>
            <ul>
                <li>
                    <div class="cart">
                        <a href="#/cart"><img src="./public/images/shopping-cart.svg" alt=""></a>
                    </div>
                </li>
                <li>
                    <div class="saved">
                        <a href="#/saved"><img src="./public/images/heart.svg" alt=""></a>
                    </div>
                </li>
                <li>
                    <div class="profile">
                        <a href="#/profile"><img src="./public/images/user.svg" alt=""></a>
                    </div>
                </li>
            </ul>
    </nav>
        `
export default Header;  