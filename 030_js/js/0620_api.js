/**
 * Fetch API — современный способ получения данных с сервера (AJAX)
 *
 * Используемые концепции:
 *  - async/await       — синтаксический сахар над Promise (ES2017)
 *  - fetch()           — встроенный браузерный API для HTTP-запросов
 *  - response.json()   — парсинг JSON-тела ответа
 *  - Array.prototype.splice() — изменение массива на месте
 *  - innerHTML         — вставка HTML-строки в DOM
 *  - шаблонные строки  — `${переменная}` вместо "строка" + переменная + "строка"
 *
 * Источники данных (раскомментируйте нужный):
 *   https://my-json-server.typicode.com/typicode/demo/posts   — JSONPlaceholder
 *   https://vmarshirov.github.io/BasicsOfWebTechnologies/030_js/data/0620.json — локальные данные курса
 *   ../../tmp/BasicsOfWebTechnologies.txt_api.json                             — локальный файл (нужен сервер)
 */
async function getResponse() {
    try {
        // ⚠️ fetch из файловой системы (file://) заблокирован CORS.
        //    Запускайте страницу через локальный сервер (VS Code Live Server, Python http.server и т.д.)
        const response = await fetch("../../tmp/BasicsOfWebTechnologies.txt_api.json");

        // Проверяем HTTP-статус перед парсингом (хорошая практика)
        if (!response.ok) {
            throw new Error(`HTTP ошибка: ${response.status}`);
        }

        let content = await response.json(); // JSON → массив/объект JS
        content = content.splice(0, 2);      // берём первые 2 элемента

        console.log("Полученные данные:", content);

        // Получаем первый ul на странице и наполняем его динамически
        const ul_0 = document.getElementsByTagName("ul")[0];

        // ✅ Предпочтительнее for...of вместо for...in для массивов:
        //    for...in итерирует ключи (в том числе унаследованные), for...of — значения
        for (const item of content) {
            // Шаблонная строка (template literal) — читаемая альтернатива конкатенации
            ul_0.innerHTML += `
                <li>
                    <h3>${item.title}</h3>
                    <img src="${item.url}" width="200" alt="${item.title}" loading="lazy">
                </li>
            `;
        }

    } catch (error) {
        // Всегда обрабатываем ошибки сети и парсинга
        console.error("Ошибка при загрузке данных:", error.message);
    }
}

// Вызов функции при загрузке скрипта
getResponse();

/*
    Пример итерации с for...in (для объектов, не массивов):
    for (const key in content) {
        console.log(content[key].id);
        console.log(content[key].title);
    }
*/
