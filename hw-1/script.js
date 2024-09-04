/*
1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, найти минимальное число в массиве, решение задание должно состоять из одной строки
*/

const arr = [1, 5, 7, 9];

console.log(Math.min(...arr));

/*
2) Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement. Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. Значение счетчика должно быть доступно только через методы объекта, а не напрямую.
*/
const buttonsEls = document.querySelectorAll('.button-counter');



function createCounter() {
    let counter = 0;
    return {
        increment: () => console.log(++counter),
        decrement: () => console.log(--counter),
    };
}

console.log();

let counter = createCounter();


buttonsEls.forEach((element, index) => {
    if (index === 0) {
        element.addEventListener('click', counter.increment);
    } else {
        element.addEventListener('click', counter.decrement);
    }
});

/*
3) Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название класса в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.
*/

const bodyEl = document.querySelector('body');


function findElementByClass (elemDom, classDom) {
    if (elemDom.classList && elemDom.classList.contains(classDom)) {
        return elemDom;
    }

    for (let child of elemDom.children) {
        let found = findElementByClass(child, classDom);
        if (found) {
            return found;
        }
    }

    return null;
}

const elementByClass = findElementByClass(bodyEl, 'button-counter');

console.log(elementByClass);