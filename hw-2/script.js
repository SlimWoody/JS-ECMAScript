// Домашнее задание

// Задание 1: ""Управление библиотекой книг""

// Реализуйте класс Book, представляющий книгу, со следующими свойствами и методами:

// Свойство title (название) - строка, название книги.
// Свойство author (автор) - строка, имя автора книги.
// Свойство pages (количество страниц) - число, количество страниц в книге.
// Метод displayInfo() - выводит информацию о книге (название, автор и количество страниц).


class Book {

    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    displayInfo = () => {
        console.log(`Книга ${this.title}, автора ${this.author}, содержит ${this.pages} страниц`);
    };
}

const myBoocs = new Book('Остров сокровищ', 'Роберт Льюис Стивенсон', 120);
console.log(myBoocs.displayInfo());

// Задание 2: ""Управление списком студентов""
// Реализуйте класс Student, представляющий студента, со следующими свойствами и методами:

// Свойство name (имя) - строка, имя студента.
// Свойство age (возраст) - число, возраст студента.
// Свойство grade (класс) - строка, класс, в котором учится студент.
// Метод displayInfo() - выводит информацию о студенте (имя, возраст и класс).
// javascript

// Пример использования класса
// const student1 = new Student(""John Smith"", 16, ""10th grade"");
// student1.displayInfo();
// Вывод:
// Name: John Smith
// Age: 16
// Grade: 10th grade

// const student2 = new Student(""Jane Doe"", 17, ""11th grade"");
// student2.displayInfo();
// Вывод:
// Name: Jane Doe
// Age: 17
// Grade: 11th grade"


class Student {
    name = '';
    age = 0;
    grade = '';
    constructor(name, age, grade, ) {
        this.name = name;
        this.age = age;
        this.grade = grade;
        this.displayInfo = () => {
            // console.log(`Ученик ${this.name}, ${this.age} лет, ${this.grade} класса`);
    
            if (age > 4 && age < 21) {
                console.log(`Ученик ${this.name}, ${this.age} лет, ${this.grade} класса`);
            } else if (age > 20 && age % 10 < 5) {
                console.log(`Ученик ${this.name}, ${this.age} год, ${this.grade} класса`);
            }else{
                console.log(`Ученик ${this.name}, ${this.age} год, ${this.grade} класса`);
            }
        }
    }
    
}

const student1 = new Student("John Smith", 16, "10th grade");
const student2 = new Student("Jane Doe", 17, "11th grade");

console.log(student1.displayInfo());
console.log(student2.displayInfo());
