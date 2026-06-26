/**
 * Переключатель «лампочки»: изменение src изображения по событию
 *
 * Используемые концепции:
 *  - getElementById()     — получение элемента по id
 *  - element.src          — изменение атрибута src у img
 *  - element.style.cssText — установка нескольких CSS-свойств строкой
 *    (альтернатива: element.classList.add / element.style.property = value)
 */
function light(sw) {
    console.log("sw:", sw); // 0 — выключить, 1 — включить

    // Тернарный оператор — короткая запись if/else
    const picture = sw === 0 ? "pic_bulboff.gif" : "pic_bulbon.gif";

    const image = document.getElementById("idImage");
    image.src = picture;

    // Устанавливаем стиль. Для множества свойств лучше использовать CSS-класс:
    // image.classList.toggle("bulb-on");
    image.style.cssText = "border-style: solid; padding: 25px;";
}

/* ——— Архивные примеры обращения к DOM (устаревшие подходы) ———
   document.all — нестандартное свойство IE; использовать нельзя.
   ✅ Современный аналог: document.querySelector() или getElementById()

   УСТАРЕЛО:
     document.all[6].src = "...";
   АКТУАЛЬНО:
     document.getElementById("idImage").src = "...";
     document.querySelector("#idImage").src = "...";
*/
