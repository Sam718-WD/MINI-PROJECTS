let rect = document.querySelector(".rect");

window.addEventListener("mousemove", function(dets){

    let rectangleposi = rect.getBoundingClientRect();

    let xval = gsap.utils.mapRange(0,window.innerWidth, 100 + rectangleposi.width/2, window.innerWidth -  (100+rectangleposi.width/2), dets.clientX);

    gsap.to(rect, {
        left: xval + "px",
        ease: Power3,
    })
})

