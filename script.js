const box = document.querySelector('.box');
const toggleBox = document.querySelector('.toggleBoxOn');
const title = document.querySelectorAll('h1');

function bodyDark (t){
    title.forEach(function (a){
        a.style.color = `${t}`;
    });
}


box.addEventListener('click', function(){
    toggleBox.classList.toggle('toggleBoxOff');
    document.body.classList.toggle('dark');
    if(document.body.classList.contains('dark')){
        bodyDark('aliceblue');
    }else if (!document.body.classList.contains('dark')){
        bodyDark('#2b2b2b');
    }
});