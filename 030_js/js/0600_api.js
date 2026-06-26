/**
 * Пример API-запроса к WeatherAPI через RapidAPI
 * Документация: https://rapidapi.com/weatherapi/api/weatherapi-com
 *
 * В этом файле показан УСТАРЕВШИЙ способ — XMLHttpRequest (XHR).
 * Современный способ — Fetch API или библиотека axios (см. 0620_api.js).
 *
 * ⚠️  ВАЖНО: API-ключ (X-RapidAPI-Key) нельзя хранить в клиентском JS-коде!
 *     Ключ виден всем в DevTools → Network. Для реальных проектов:
 *     - запросы делайте через серверный proxy (Node.js, Python и т.д.)
 *     - или используйте переменные окружения (process.env) в сборщиках
 */

// ❌ const data = null — переменная не нужна; передайте null напрямую в xhr.send()
// ✅ Используем const/let вместо var

const xhr = new XMLHttpRequest();

// withCredentials — отправлять ли cookies при кросс-доменных запросах.
// Для RapidAPI не нужно — аутентификация через заголовок X-RapidAPI-Key
xhr.withCredentials = false;

// readystatechange — событие при каждом изменении readyState (0..4)
// readyState === 4 (DONE) означает, что ответ полностью получен
xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
        if (this.status === 200) {
            // Парсим JSON-ответ
            const weatherData = JSON.parse(this.responseText);
            console.log("Текущая погода в Лондоне:", weatherData);
            console.log("Температура °C:", weatherData.current.temp_c);
        } else {
            // Обработка ошибок HTTP
            console.error("Ошибка запроса. HTTP статус:", this.status);
        }
    }
});

// Открываем GET-запрос к API
xhr.open("GET", "https://weatherapi-com.p.rapidapi.com/current.json?q=London");

// Заголовки аутентификации RapidAPI
// ⚠️  В учебных целях ключ показан здесь, в реальном проекте — только на сервере
xhr.setRequestHeader("X-RapidAPI-Key",  "f26b69ba7dmsh0637cafdb3d2b99p150e05jsnc514268af367");
xhr.setRequestHeader("X-RapidAPI-Host", "weatherapi-com.p.rapidapi.com");

// Отправляем запрос (для GET тело запроса пустое — null)
xhr.send(null);

/* ——— Сравнение XHR и Fetch ———

   XHR (старый способ):
     var xhr = new XMLHttpRequest();
     xhr.open("GET", url);
     xhr.onload = function() { ... };
     xhr.send();

   Fetch (современный способ, ES6+):
     fetch(url, { headers: {...} })
       .then(res => res.json())
       .then(data => console.log(data))
       .catch(err => console.error(err));

   Async/Await (ещё читаемее):
     async function getWeather() {
       const res  = await fetch(url, { headers: {...} });
       const data = await res.json();
       console.log(data);
     }
*/
