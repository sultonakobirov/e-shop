import productCard from "../../components/card/card.js";



// Глобальная переменная для хранения данных
let globalData;

// Функция для получения данных с сервера
function fetchData() {
    return new Promise(async (resolve) => {
        try {
            // Выполняем асинхронный запрос к серверу
            const response = await fetch('https://dummyjson.com/products?limit=40');
            
            // Парсим ответ в формат JSON
            const data = await response.json();

            // Сохраняем данные в глобальной переменной
            globalData = data;

            // Возвращаем результат выполнения handleData
            resolve(handleData());
            
        } catch (error) {
            console.error('Ошибка при получении данных:', error);
            resolve("Ошибка при получении данных перезагрузите сайт!");
        }
    });
}

// Функция для обработки данных (вызывается после получения данных)
function handleData() {
    let Home = document.createElement('div');
    Home.classList.add('home-page');
    // Обработка данных globalData
    let products = globalData.products;

    // Создаем карточку для каждого товара и добавляем их в контейнер
    products.forEach(product => {
        let card = productCard.cloneNode(true);
        card.children[0].src = product.thumbnail;
        function cutText(text) {
            // Разбиваем предложение на слова
            let words = text.split(' ');
        
            // Оставляем только первые два слова
            let twoWords = words.slice(0, 2);
        
            // Собираем их обратно в строку
            let result = twoWords.join(' ');
        
            return result;
        }

        card.children[1].children[0].innerHTML = cutText(product.title);
        card.children[1].children[1].children[0].innerHTML = `$${product.price}`;
        card.children[1].children[1].children[1].innerHTML = `$${Math.ceil(product.price-product.price/100*product.discountPercentage)}`;
        console.log();
        if (product.rating.toString().length == 1) {
            card.children[1].children[2].innerHTML =`★${product.rating}.0`;
        } else {
            card.children[1].children[2].innerHTML =`★${product.rating}`;
        }
        Home.appendChild(card);
    });
    // Возвращаем HTML-строку содержимого Home
    return Home.outerHTML;
}

// Экспортируем промис для использования в другом файле
export default fetchData;