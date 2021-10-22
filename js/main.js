
const snake = function(e){
    const arr = [];
    return function(e){
        text = "";
        arr.unshift(e.key);
        for(let i = 4; i>=0; i--){
            text+=arr[i];
        }
        if(text === "snake"){
            location.href = "snake.html"
        }
    };
}
const egg = snake();
window.addEventListener('keypress', egg);



const imgTriggerMargin = 150;
const textElementList = Array.from(document.getElementsByClassName("main_text"));
const imgElementList = Array.from(document.getElementsByClassName("main_page_img"));

const showImg = function() {
for (const text of textElementList) {
        if (window.innerHeight > text.getBoundingClientRect().top + imgTriggerMargin ) {
            // console.log(text.getBoundingClientRect().top);
            // console.log(window.innerHeight);
            textElementList.forEach(function(elem){
                if (elem.id===text.id) elem.classList.add('show');
                else elem.classList.remove('show');
            });
            imgElementList.forEach(function(elem){
                if(elem.classList.contains(text.id)) elem.classList.add('show');
                else elem.classList.remove('show');
            });
        }
}
}
window.addEventListener('load', showImg);
// setInterval(function(){
//     window.addEventListener('scroll', showImg);
// },1500);
(function scrollControll(){
    window.addEventListener('scroll', showImg);
    setTimeout(scrollControll,1000); // 1000밀리초(1초)에 한 번씩 repeatClock실행
})();

