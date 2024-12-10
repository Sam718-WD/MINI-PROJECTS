let cont = document.querySelector(".container");
let like = document.querySelector("#like");

cont.addEventListener("dblclick", function(){
    console.log("yeeee")
    like.style.transform = 'translate(-50%, -50%) scale(1)';
    like.style.opacity = 0.8;
    setTimeout(function(){
        like.style.opacity = 0;
    },1000)

    setTimeout(function(){
        like.style.transform = 'translate(-50%, -50%) scale(0)';
    },2000)
})

