
var logo = document.getElementById("logo");

    
window.addEventListener("scroll", function() {
    logo.style.transform = "rotate("+window.pageYOffset/10+"deg)";

});


let typed = new Typed('#typed', { // Тут id того блока, в которм будет анимация
    strings: ["PALATKA_TEAM"],
    typeSpeed: 100, // Скорость печати
    startDelay: 500, // Задержка перед стартом анимации
    showCursor: false,
    loop: false // Указываем, повторять ли анимацию
});

var cheak = true;


    
anim.onclick = function() {
    if(cheak == true){
      cheak = false;
    let start = Date.now();
    
    let timer = setInterval(function() {
      let timePassed = Date.now() - start;

      anim.style.top = timePassed / 5 + 'px';

      if (timePassed > 4000) clearInterval(timer);

    }, 20);  
    }
    
    

 };
