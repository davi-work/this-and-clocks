// Много вопросов касательно DOM


const hour    = document.querySelector('.h'),
       min    = document.querySelector('.m'),
       sec    = document.querySelector('.s'),
hoursNumber   = document.querySelector('.hours'),
minutesNumber = document.querySelector('.minutes'); 

// console.log(minutesNumber);

function clock() {
  let time    = new Date()
  let second  = time.getSeconds() * 6;
  let minutes = time.getMinutes() * 6;
  let hours   = time.getHours()   * 30;
  
  sec.style  = `transform: rotate(${second}deg);`
  min.style  = `transform: rotate(${minutes}deg);`
  hour.style = `transform: rotate(${hours}deg);`
  
  hoursNumber.innerText   = time.getHours()   < 10 ? '0' + time.getHours()   : time.getHours()
  minutesNumber.innerText = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()
  
  setTimeout(() => clock(), 1000);
  // setInterval - Продолжает выполняться, пока явно не будет остановлен с помощью clearInterval.
}

clock()

const links = document.querySelectorAll('.tabsItem'), 
      tabs  = document.querySelectorAll('.tabsContentItem');
      
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function(e) /* Стрелочная функция работать не будет, в конце расскажу почему */{
      e.preventDefault()
      // e - это аргумент который отдает нам всю информацию о элементе 
      // e.preventDefault() это метод который останавливает действия HTML.
      for (let ix = 0; ix < links.length; ix++) {
          console.log(tabs[ix]);
          links[ix].classList.remove('active');        
          tabs[ix].classList.remove('active');       
      }
        tab(this, tabs[i]) 
      /* В функцию tab первым параметром отправляем нам тот элемент на который сейчас было сделано нажатие при помощи клбчючекого  слова this и отправляем тот таб который совпадает по итератором нажатой ссылки */
    })
    }
    
  function tab(el, arr){
    el.classList.add('active');
    arr.classList.add('active');
  }
  
  
  
  /* Оптимизация */
  // links.forEach((link, index) => {
  //   link.addEventListener('click', (e) => {
  //     e.preventDefault();
  //     links.forEach((l, i) => {
  //       l.classList.toggle('active', i === index);
  //       tabs[i].classList.toggle('active', i === index)
  //     })
  //   })
  // })
  
  
// Билет 4:
// Как работает "this" в JavaScript? Как изменить контекст выполнения функции?
// 2. Создайте объект с методом, который использует "this". Измените контекст выполнения метода с помощью метода "bind".

/* Сказать что такое this однозначно нельзя, самый лучший пример который 
я слышал, чтоб объяснить это, это местоисмение Я - 
все зависит от того, кто это произносит. Также и this, Зависит от контекста  */
// console.log(this); /* window */

// this в стрелочной функции ведет себя иначе
function simpleFunction() {
  // console.log(this); /* window */
}
simpleFunction()

const item = {
  name: 'Uzbekistan',
  counter(){
    // console.log(this); /* item */
  } 
}
item.counter()


const phone = {
  title: 'phone',
  price: 860,
  percent(discounter) {
    // console.log(this.price - discounter/100 * this.price);
  }
}
// Метод объекта: Когда функция вызывается как метод объекта, 
// this ссылается на сам объект, к которому принадлежит метод.
phone.percent(20)



// Чтобы изменить контекст выполнения функции, можно использовать методы call, apply, bind или стрелочные функции, 
// которые не создают свой собственный контекст. 



function exampleMethods() {
  console.log("Change context");
}

const item2 = {title: 'asd'}
// exampleMethods.apply(item2) /* Aplly работает с массивами */
// exampleMethods.call(item2) /* Методы которые позволяют менять контекст функции */

// Также есть метод bind, Он только привязывает контекст но не вызывает функцию
exampleMethods.bind(item2)

function checkAge(age) {
  if (age > 18) {
    this.rights = true
    console.log(this.rights);
    // console.log(this.price / 2);
    // console.log(this);
  } 
  else {
    console.log('bad request');
    // console.log(this.price * 2);
  }
}
const item3 = {name: "Ivan", rights: false,/*  price: 500 */}
// const itemCheckedAge = checkAge.bind(item3, 19)
// itemCheckedAge()


// Создайте объект с методом, который использует "this". Измените контекст 
// выполнения метода с помощью метода "bind".
/* Близкий пример */

const task = {
  title: 'Изучить JavaScript', 
  description: 'Программированние...',
  printDetails: function() {
    console.log(`Задача: ${this.title}, c описанием ${this.description}`);
  }
}

task.printDetails()

// Теперь предположим, что мы хотим использовать метод printDetails для 
// вывода информации о задаче, но с контекстом другого объекта, например, 
// project, который также имеет свойства title и description.

const project = {
  title: 'Написать Веб-Приложение',
  description: 'На JavaScript...',
}

const printProjectDetails = task.printDetails.bind(project)
printProjectDetails()




// Домашнее задание
 
// Билет 7
//2. Напишите код, который с помощью setInterval выводит сообщение в консоль каждые 2 секунды.

