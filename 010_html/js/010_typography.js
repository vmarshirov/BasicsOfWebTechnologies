/**
 * Демонстрация работы с DOM: поиск и изменение элементов по событию
 *
 * Используемые концепции:
 *  - document.getElementById()       — поиск по id (один элемент)
 *  - element.addEventListener()      — современный способ назначения обработчика
 *  - element.innerHTML / innerText   — чтение/запись содержимого элемента
 *  - element.style                   — изменение CSS-свойств через JS
 *
 * ❌ УСТАРЕЛО: onclick="..." как HTML-атрибут и element.onclick = function() {}
 * ✅ Используйте addEventListener — позволяет вешать несколько обработчиков на один элемент
 */

// DOMContentLoaded — скрипт выполнится после полного разбора HTML,
// даже если тег <script> стоит в <head>.
// Если скрипт в конце <body> (как в данном примере), это не нужно,
// но добавлять — хорошая привычка.
document.addEventListener("DOMContentLoaded", function () {

    // getElementById — самый быстрый способ найти один элемент
    const spanNew    = document.getElementById("new");
    const pForClick  = document.getElementById("for_click");

    // Изменяем текст span#new при загрузке страницы
    if (spanNew) {
        spanNew.innerText = "← этот текст изменён JavaScript-кодом после загрузки";
        spanNew.style.color      = "red";
        spanNew.style.fontWeight = "bold";
    }

    // Назначаем обработчик события click на параграф
    if (pForClick) {
        pForClick.addEventListener("click", function () {
            // this внутри обработчика указывает на элемент, по которому кликнули
            this.innerHTML = "✅ Параграф был кликнут! (обработчик click через addEventListener)";
            this.style.backgroundColor = "#c8f7c5";
        });
    }

});

/*
   ——— Сравнение способов назначения обработчиков ———

   ❌ 1. HTML-атрибут (встроенный JS в HTML):
      <button onclick="doSomething()">Click</button>
      Минус: смешивает разметку и логику

   ❌ 2. Свойство .onclick (только один обработчик):
      button.onclick = function() { ... };
      Минус: последующее присвоение перезапишет предыдущее

   ✅ 3. addEventListener (рекомендуется):
      button.addEventListener("click", function() { ... });
      Плюс: можно добавить несколько обработчиков; можно удалить через removeEventListener
*/
