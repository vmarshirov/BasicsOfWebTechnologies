/**
 * Алгоритмическая задача: проверка принадлежности числа X отрезку [a, b]
 *
 * Используемые концепции DOM/JS:
 *  - form.elements  — коллекция полей формы по имени/индексу
 *  - parseFloat()   — преобразование строки в число с плавающей точкой
 *  - getElementById — поиск элемента по id
 *  - form.submit()  — программная отправка формы
 */
function checkFields(form) {
    // form.elements — объект HTMLFormControlsCollection:
    // доступ по имени (elems.a) или индексу (elems[0])
    const elems = form.elements;

    console.log("elems:", elems);
    console.log("elems[0]:", elems[0]);
    console.log("elems[0].name:", elems[0].name);
    console.log("elems[0].value:", elems[0].value);
    console.log("elems.a.value:", elems.a.value);

    // Значение поля всегда приходит как строка → явно преобразуем в число
    console.log("typeof (elems.a.value):", typeof elems.a.value); // "string"
    const aFloat = parseFloat(elems.a.value);
    const bFloat = parseFloat(elems.b.value);
    const xFloat = parseFloat(elems.x.value);

    // Определяем границы отрезка независимо от порядка ввода
    // ✅ const/let вместо var: let — блочная область видимости, var — функциональная
    const low  = Math.min(aFloat, bFloat);
    const high = Math.max(aFloat, bFloat);

    console.log("low:", low, "high:", high, "x:", xFloat);

    // Проверка принадлежности
    const inRange = low <= xFloat && xFloat <= high;
    const result  = inRange
        ? "X принадлежит заданному промежутку"
        : "X не принадлежит заданному промежутку";

    // Выводим результат в DOM
    const resultEl = document.getElementById("result");
    resultEl.innerHTML = "Ответ: " + result;

    if (inRange) {
        // Отправляем форму только при верном ответе
        form.submit();
    } else {
        // alert — допустим для учебных целей; в production используйте модальные окна
        alert("Ответ:\n" + result + "\nПовторите ввод");
    }
}
