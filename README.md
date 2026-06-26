## Дисциплина «Основы web-технологий»

> Материалы курса: НИУ ВШЭ · Нижний Новгород

**Видео, рабочие ведомости, архивы (2025):** https://disk.360.yandex.ru/d/4X-70IPTsY4YDg  
**Фрагменты с лекций:** https://github.com/vmarshirov/BWT_Ed  
**Контрольная работа 1:** task_01/ReadMe.md  
**Контрольная работа 2:** task_02/ReadMe.md  

**Срочная связь:** vmarshirov@hse.ru · +7 908 160 53 16

---

### Структура репозитория

| Раздел | Содержание |
|--------|-----------|
| `010_html/` | HTML5: типографика, head, изображения, таблицы, формы, ссылки |
| `020_css/`  | CSS: каскад, позиционирование, flexbox, Bootstrap |
| `030_js/`   | JavaScript: DOM, события, Fetch API, SPA |
| `task_01/`  | Требования к контрольной работе 1 |
| `task_02/`  | Требования к контрольной работе 2 |

---

### Что обновлено в этой версии (2025/2026)

#### HTML
- Устаревшие атрибуты (`align`, `bgcolor`, `background`, `cellspacing`, `cellpadding`, `<font>`) заменены на CSS
- Добавлен `<meta name="viewport">` во все страницы (адаптивность)
- Семантические теги HTML5: `<nav>`, `<header>`, `<figure>`, `<figcaption>`, `<details>`, `<summary>`, `<thead>/<tbody>/<tfoot>`
- Атрибут `loading="lazy"` на изображениях
- `rel="noopener noreferrer"` на ссылках с `target="_blank"`
- Задания оформлены в `<details>` вместо `<pre>`

#### CSS
- Использование CSS-переменных (`--color-primary`, `--font-size-base`)
- `box-sizing: border-box` по умолчанию
- `flex-wrap: wrap` в flexbox-примерах для адаптивности
- Подробные комментарии к каждому свойству

#### JavaScript
- `var` заменён на `const`/`let` во всех файлах
- XHR (XMLHttpRequest) оставлен для изучения истории, рядом показан современный `fetch`
- Обработчики через `addEventListener` вместо `onclick="..."`
- `for...of` вместо `for...in` для массивов
- `URL` и `URLSearchParams` вместо ручного разбора строки запроса (`split("?")`)
- `try/catch` вокруг `fetch`-запросов (обработка ошибок сети)
- Исправлена опечатка: `type="Техт"` → `type="text"`
- Исправлена ошибка CSS: `margin: 5px: auto` → `margin: 5px auto`

---

### Полезные ссылки

| Тема | Ресурс |
|------|--------|
| HTML | [MDN HTML Reference](https://developer.mozilla.org/ru/docs/Web/HTML) · [html.spec.whatwg.org](https://html.spec.whatwg.org/) |
| CSS  | [MDN CSS Reference](https://developer.mozilla.org/ru/docs/Web/CSS) · [CSS-Tricks Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) |
| JS   | [learn.javascript.ru](https://learn.javascript.ru/) · [doka.guide/js](https://doka.guide/js/) · [MDN JS](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference) |
| Fetch| [Fetch API (MDN)](https://developer.mozilla.org/ru/docs/Web/API/Fetch_API) · [Using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) |
| Инструменты | [validator.w3.org](https://validator.w3.org/) · [jshint.com](https://jshint.com/) |
