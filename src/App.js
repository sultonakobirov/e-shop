"use strict";

import fetchData from './views/pages/1.home/home.js';
// import Categories  from './views/pages/2.categories/categories.js'
// import Basket      from './views/pages/3.basket/basket.js'
// import Details     from './views/pages/4.details/details.js'
// import Saved       from './views/pages/5.saved/saved.js'
// import Profile     from './views/pages/6.profile/profile.js'
// import Error404    from './views/pages/7.error/error.js'


import Header      from './views/components/header/header.js'
import productCard from './views/components/card/card.js';
// import Footer      from './views/components/footer/footer.js' 

    
// import Utils       from './services/Utils.js'



document.addEventListener('DOMContentLoaded', function () {

    const app = document.getElementById('app');
    const header = document.getElementById('header-container')
    
    function renderHeader() {
        header.innerHTML = Header;
    }

    function renderHome() {

        fetchData()
    .then(htmlString => {
        // В этом блоке вы можете использовать результат выполнения fetchData
        app.innerHTML = htmlString
    })
    .catch(error => {
        // В этом блоке обрабатывайте ошибки
        console.error('Произошла ошибка:', error);
    }); 
    }

    function renderProducts() {
        app.innerHTML = '<h2>Список товаров:</h2><ul><li>Товар 1</li><li>Товар 2</li><li>Товар 3</li></ul>';
    }

    function renderCart() {
        app.innerHTML = '';
    }

    function renderSaved() {
        app.innerHTML = '<h2>Ваш сохраненный пока пустой</h2>';
    }

    function handleNavigation() {
        const route = window.location.hash.substr(2);
        switch (route) {
            case 'profile':
                renderProducts();
                break;
            case 'cart':
                renderCart();
                break;
            case 'saved':
                renderSaved();
                break;
            default:
                renderHome();
        }
    }

    renderHeader();

    // Обработчик изменения хэша
    window.addEventListener('hashchange', handleNavigation);

    // Инициализация при загрузке страницы
    handleNavigation();
});

