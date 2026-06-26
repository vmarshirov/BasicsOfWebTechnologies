/**
 * Простое SPA (Single Page Application) без фреймворков
 *
 * Принцип работы:
 *  1. URL-параметр ?content_file_key=component_01.html задаёт нужный «компонент»
 *  2. Функция Component() загружает HTML-фрагмент через fetch и вставляет его в #component
 *  3. Навигационная ссылка помечается классом "active"
 *  4. Заголовок вкладки (<title>) обновляется динамически
 *
 * Это упрощённая модель того, как работают React Router / Vue Router:
 *  - URL ↔ отображаемый компонент
 *  - обновление DOM без перезагрузки страницы
 *
 * Современные SPA используют History API (pushState) для «красивых» URL
 * без знака ? — см. https://developer.mozilla.org/ru/docs/Web/API/History/pushState
 */

// ——— Утилита: пометить активную ссылку в навигации ———
function activeNavigTitle(contentFileKey) {
    // getElementsByClassName возвращает HTMLCollection (живую, не массив)
    const navItems = document.getElementsByClassName("nav-item");

    for (let i = 0; i < navItems.length; i++) {
        // Первый дочерний узел — тег <a> с классом nav-link
        const link = navItems[i].childNodes[0];
        link.className = "nav-link"; // сбрасываем active у всех

        if (link.id === contentFileKey) {
            link.className = "nav-link active"; // активируем нужную ссылку
            console.log("Активная ссылка:", navItems[i].innerText);

            // Обновляем заголовок страницы (<title>) — полезно для SEO и закладок
            document.getElementsByTagName("title")[0].innerText = navItems[i].innerText;
        }
    }
}

// ——— Загрузка HTML-компонента через Fetch ———
async function fetchHTML(contentUrl) {
    console.log("Загружаем:", contentUrl);
    try {
        const response = await fetch(contentUrl);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);

        const content   = await response.text(); // HTML как строка
        const component = document.getElementById("component");
        component.innerHTML = content; // заменяем содержимое контейнера

    } catch (error) {
        console.error("Ошибка загрузки компонента:", error.message);
        document.getElementById("component").innerHTML =
            `<p style="color:red;">Ошибка загрузки: ${error.message}</p>`;
    }
}

// ——— Загрузка обычного HTML-компонента ———
function Component(contentUrl, contentFileKey) {
    activeNavigTitle(contentFileKey);
    fetchHTML(contentUrl);
}

// ——— Загрузка JSON-данных (каталог товаров) ———
async function fetchJson() {
    const component = document.getElementById("component");
    let innerHTML = "<h6>Каталог товаров</h6>\n<p>Загрузка...</p>\n";

    try {
        const response = await fetch("../public_html/pages/component_json.json");
        if (!response.ok) throw new Error(`HTTP ${response.status}`);

        // Предпочтительно response.json() вместо response.text() + JSON.parse()
        let content = await response.json();
        content = content.splice(0, 4); // первые 4 товара

        console.log("Товары:", content);

        // Карточки товаров с формой заказа
        innerHTML = `
            <form action="https://www.bing.com/search?" id="UserEnter" name="UserEnter" target="_blank">
                <input type="hidden" name="q" value="search">
                <div class="d-flex flex-wrap">
        `;

        // ✅ for...of — читаемее и безопаснее for...in для массивов
        for (const item of content) {
            innerHTML += `
                <div class="border p-2 m-2" style="width:220px;">
                    <img src="${item.img}" width="200" alt="${item.title}" loading="lazy">
                    <h6>${item.title}</h6>
                    <p>${item.description}. Цена: ${item.price} ₽</p>
                    <p>
                        Количество
                        <input type="hidden" name="vendor_code" value="${item.vendor_code}">
                        <input type="number"  name="amount"       value="0" style="width:2.5rem;" min="0">
                    </p>
                </div>
            `;
        }

        innerHTML += `
                </div>
                <button type="submit" class="btn btn-light">Оформить заказ</button>
            </form>
        `;

    } catch (error) {
        innerHTML = `<p style="color:red;">Ошибка загрузки каталога: ${error.message}</p>`;
    }

    component.innerHTML = innerHTML;
}

function component_json(contentUrl, contentFileKey) {
    activeNavigTitle(contentFileKey);
    fetchJson();
}

// ——— Разбор URL-параметров ———

console.clear();

// URL API — современный способ работы с адресами (вместо ручного split/split)
const url = new URL(document.URL);
console.log("Текущий URL:", url.href);
console.log("Строка запроса:", url.search);

// URLSearchParams — удобный парсер параметров строки запроса
const params = new URLSearchParams(url.search);

// Значение по умолчанию, если параметр не передан
const contentFileKey = params.get("content_file_key") || "component_01.html";
console.log("content_file_key:", contentFileKey);

// Формируем путь к файлу компонента
const contentUrl = "../public_html/pages/" + contentFileKey;
console.log("contentUrl:", contentUrl);

// Запускаем нужную функцию в зависимости от типа компонента
if (contentFileKey !== "component_json.json") {
    Component(contentUrl, contentFileKey);
} else {
    component_json(contentUrl, contentFileKey);
}

/*
   Альтернативный подход — addEventListener на ссылках навигации:

   document.getElementById("nav_01_id")
       .addEventListener("click", (e) => {
           e.preventDefault();  // отменяем переход по href
           Component("pages/component_01.html", "component_01.html");
       });

   Это позволяет не перезагружать страницу и сохранить History API.
*/
