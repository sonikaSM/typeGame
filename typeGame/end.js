
let button = document.getElementById("start_but");
let scoreDiv = document.querySelector(".score_s");
let best_s=document.querySelector(".best_s")

let text;

let score_ss=sessionStorage.getItem("score");
let best_ss=sessionStorage.getItem("score");

if(score_ss!=null) text=score_ss.toString();else{
    text='0';
}
scoreDiv.innerHTML=text;

if(best_ss!=null) text=best_ss.toString();else{
    text='0';
}
best_s.innerHTML=text;


button.addEventListener("click", function(e){
    window.open('Game.html','_self')
    countdown(button);
    random();
    button.disabled = true;
});

