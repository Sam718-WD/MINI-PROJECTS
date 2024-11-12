let circle = document.querySelector(".circle");
let frame = document.querySelector(".frame");

const lerp = (x, y, a) => x * (1 - a) + y * a ;

window.addEventListener("mousemove", function(dets){
    // circle.style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
    gsap.to(circle,{
        x: dets.clientX,
        y: dets.clientY,
        duration: .2,
        ease: Expo,
    })
})

frame.addEventListener("mousemove", function(dets){

    let dims = frame.getBoundingClientRect();

    let xstart = dims.x;
    let xend = dims.x + dims.width;

    let zeroone = gsap.utils.mapRange(xstart, xend, 0, 1, dets.clientX);

    gsap.to(circle,{
        scale: 9,
    })
    gsap.to(".frame span",{
        color: "#fff",
        duration: .2,
        y: "-5vw", 
    })

    gsap.to(".frame span",{
        x:lerp(-50, 50, zeroone),
        duration: .3,
    })
})
frame.addEventListener("mouseleave", function(dets){
    gsap.to(circle,{
        scale: 1,
    })
    gsap.to(".frame span",{
        color: "#000",
        duration: .2,
        y: 0,
    })
    gsap.to(".frame span",{
        x: 0,
        duration: .3,
    })
})