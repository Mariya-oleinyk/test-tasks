/*
  Написать скрипт который собирает 3 строки клавиатуры
  и клавишу "пробел" из шаблона по заданому объекту.
  
  Для зарендереной клавиатуры реализовать поведение из
  модуля 8, подсветка нажатой клавиши, отображение символа и тд.
*/

const lang = {
        en: "qwertyuiop[]asdfghjkl;'zxcvbnm,./"
      };


const firstLine = lang.en.substr(0, lang.en.indexOf("a"));
const secondLine = lang.en.substr(lang.en.indexOf("a"), lang.en.indexOf("z") - lang.en.indexOf("a"));
const thirdLine = lang.en.substr(lang.en.indexOf("z"));
    
const firstArr = firstLine.split('');
const secondArr = secondLine.split('');
const thirdArr = thirdLine.split('');

// const keyboard = [firstArr, secondArr, thirdArr];


const keyboard = {
  row: [firstArr, secondArr, thirdArr],  
  notes: ["do", "re", "mi", "fa", "sol","la", "si"]    
}

const html = document.getElementById('menu').textContent.trim();
const wrapper = document.getElementById('wrapper');
const compiled = _.template(html);
const result = compiled(keyboard);
wrapper.innerHTML = result;



const playSound = note => {
    const audio = document.querySelector(`audio[data-note=${note}]`);
    audio.currentTime = 0;
    audio.play();
  };
  
  const buttons = Array.from(document.querySelectorAll("button"));
  const keys = "qwertyuiop[]asdfghjkl;'zxcvbnm,./".split("");
  
    window.addEventListener("keydown", function callback (e){
          if(keys.includes(e.key)){
              let currentButton = buttons.find((a) => a.innerHTML === e.key || a.innerHTML === "space" );
              let note = currentButton.classList.add('keyboard__btn--active');
              setTimeout(()=>currentButton.classList.remove('keyboard__btn--active'), 100);
              let soundCheckbox = document.getElementById('slideThree');
              
        if(soundCheckbox.checked){
              playSound(currentButton.dataset.note);
           }
          }
  }, true);


