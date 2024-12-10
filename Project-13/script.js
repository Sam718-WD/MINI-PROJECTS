let box = document.querySelector(".box");

box.addEventListener("mousemove", function(dets){
    let rectangleposi = box.getBoundingClientRect();
    let insiderecta = dets.clientX - rectangleposi.left;

    if(insiderecta<rectangleposi.width/2){
        let redcolor = gsap.utils.mapRange(0, rectangleposi.width / 2, 255, 0, insiderecta);
        gsap.to(box, {
            backgroundColor: `rgb(${redcolor}, 0, 0)`,
            ease: Power4,
        })
    }
    else{
        let bluecolor = gsap.utils.mapRange(rectangleposi.width / 1, 0, 255, 0, insiderecta);
        gsap.to(box, {
            backgroundColor: `rgb(0, 0, ${bluecolor})`,
            ease: Power4,
        })
    }
})

box.addEventListener("mouseleave", function(){
    gsap.to(box, {
        backgroundColor: `rgb(${255}, ${255}, ${255})`,
    })
})







































// let boxleft = document.querySelector(".box-l");
// let boxright = document.querySelector(".box-r");

// boxleft.addEventListener("mousemove", function(){
//     boxleft.style.backgroundColor = "red";
// })
// boxleft.addEventListener("mouseleave", function(){
//     boxleft.style.backgroundColor = "transparent";
// })
// boxright.addEventListener("mousemove", function(){
//     boxright.style.backgroundColor = "blue";
// })
// boxright.addEventListener("mouseleave", function(){
//     boxright.style.backgroundColor = "transparent";
// })