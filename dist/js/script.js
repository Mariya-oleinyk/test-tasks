//  for desktop
 
 var lis = document.getElementsByTagName('li');
 for (var i = 0; i < lis.length; i++) {
   lis[i].style.position = 'relative';
   var span = document.createElement('span');
   span.style.cssText = 'position:absolute;left:0;top:0';
   //span.innerHTML= i+1; - для наглядности слайдера
   lis[i].appendChild(span);
 }
 /* конфигурация */
 var width = 284; // ширина изображения
 var count = 1; // количество изображений


 var carousel = document.getElementById('carousel');
 var list = carousel.querySelector('ul');
 var listElems = carousel.querySelectorAll('li');

 var position = 0; // текущий сдвиг влево
 carousel.querySelector('.prev').onclick = function() {
    // сдвиг влево
    position = Math.min(position + width * count, 0)
    list.style.marginLeft = position + 'px';
  };

  carousel.querySelector('.next').onclick = function() {
    // сдвиг вправо
    position = Math.max(position - width * count, -width * (listElems.length - count));
    list.style.marginLeft = position + 'px';
  };

  // for mobile

  var initialPoint;
  var finalPoint;
  var index = 0;

 list.addEventListener('touchstart', function(event) {
  event.preventDefault();
  event.stopPropagation();
  initialPoint=event.changedTouches[0];
    for(let i = 0; i < listElems.length; i++){
      var clone = listElems[i].cloneNode(true);
      list.appendChild(clone);

    }

  }, false);

  list.addEventListener('touchend', function(event) {
  event.preventDefault();
  event.stopPropagation();
  finalPoint=event.changedTouches[0];
  index++;

  var xAbs = Math.abs(initialPoint.pageX - finalPoint.pageX);
  if (xAbs > 20) {
    console.log(listElems.length+index);
    if (finalPoint.pageX < initialPoint.pageX){
      position = position = Math.max(position - width * count, -width * (listElems.length - count));
      list.style.marginLeft = position + 'px';
    } else{
      position = Math.min(position + width * count, 0)
      list.style.marginLeft = position + 'px';}
    }
  }, false);
