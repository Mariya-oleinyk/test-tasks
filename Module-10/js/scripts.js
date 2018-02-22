/*
  Создать компонент счетчика времени.
  
  Простой прямоугольник который показывает время
  со старта упражения и до того момента когда все
  клавиши были верно нажаты.
  
  На входе есть строка символов для упражнения.
  
  Написать метод countKPS() который,по окончанию упражнения,
  возвращает кол-во верных клавишь в секунду которое было нажато за
  время выполнения упражнения.
  
  Записать результат в localStorage, но только в том случае если
  он лучше чем тот что уже есть в localStorage.
  
  При повторном посещении страницы надо брать то что записано
  в localStorage и вешать на страницу, это будет компонент
  лучшего результата.
*/

// дается строка и от первого нажатия до посленего
// правильного набранного знака считать время
const lang = "qwerty";
const string = "qryte";
const charsArr = string.split("").reverse();
const timerOutput = document.querySelector(".timer");

let exercise = document.querySelector("#exercise");
exercise.textContent = `Введите строку идентичную - ${string}`;
exercise.appendChild(timerOutput);

let keyboard = document.querySelector("#keyboard");
let userInput = document.createElement("input");
let result = document.createElement("p");

keyboard.appendChild(userInput);
keyboard.appendChild(result);


let time = 0;
let letters = 5;
let userString = [];

let timer = setInterval (function (){
    time++;
    timerOutput.textContent = time;
  }, 1000); 

  localStorage.getItem('userInput') || '';  
  
function click (e){
  if (e.keyCode >= 65 && e.keyCode <= 90){
    setInterval(timer);
  }

  userString.push(e.key);
  
  if(userString.length == letters){
          clearInterval(timer);
          let firstRes = time;
          result.textContent = firstRes;
        }
         
}

window.addEventListener("keydown", click);


// function test () {
//    
// }

 
// test ();

// let timer = setInterval (function (){
//   time++;
//   timerOutput.textContent = time;
// }, 1000);

// const updateView = () => {
//   setInterval(timer);
//   result.textContent = localStorage.getItem('userInput') || '';  
// };

// const onClick = () => {
//   clearInterval(timer);
//   localStorage.setItem('userInput', `Ввод - ${userInput.value} - занял - ${time} секунды`);
//   updateView();
//   countKPS();
// };

// const btn = document.querySelector('#js-btn');
// updateView();
// btn.addEventListener('click', onClick);

// function countKPS() {
//   let a = lang.split("");
//   let b = userInput.value.split("");
//   let c = 0;
//   if (a == b) { //вот тут если я ввожу верную строку, то строко "молодец...." - не выводится, а если заменяю на a = b, то выводит, но на все что я ввожу - и правильное и неправильное)))
//       let test = document.createElement("p");
//       test.textContent = "Вы молодец! Введено все правильно!";
//       keyboard.appendChild(test);
//       localStorage.setItem('userInput',`${test.textContent}`);// правильно ли  я использовала  localStorage? или надо было через функцию? и ничего что этот localStorage перезатирает, тот что был выше???
//       localStorage.getItem('userInput'); 
//   } else {
//       for (let i = 0; i < a.length; i++) {
//           if (a[i] !== b[i]) {
//               c = c + 1;
//               let test = document.createElement("p");
//               test.textContent = `Ошибка - ${a[i]}. Количество ошибок ${c}. Попробуйте пройти задание еще раз.`;
//               keyboard.appendChild(test);
//               localStorage.setItem('userInput',`${test.textContent}`); 
//               localStorage.getItem('userInput'); 
//             //  let attempt = 5;
//             //  for( let j=0; j< attempt; j++){ // вот тут я думаю надо сдеалть цикл, который пересматривает все введенные localStorage и записывает лучший? Только как это сделать? Да  надо ли??))
//             //    if(b[i])
//             //  }
//           }
//       }
//   }
// }
