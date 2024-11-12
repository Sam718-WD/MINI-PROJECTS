// gsap.to(".circle",{
//     rotate: 0,
//     ease: Explo.easeInOut,
//     duration: 2.5,
// })

let active = 3;

let mncircles = document.querySelectorAll(".mncircle");
let sec = document.querySelectorAll(".sec");

gsap.to(mncircles[active-1],{
    opacity: .7,
});

gsap.to(sec[active-1],{
    opacity: 1,
});

mncircles.forEach(function(val,index){
    val.addEventListener("click", function(){
      gsap.to(".circle",{
        rotate: (3-(index+1))*10
      }) 
      greyout(); 
      gsap.to(this,{
        opacity: .7,
      })
      gsap.to(sec[index],{
        opacity: 1,
      })
    })
})

function greyout(){
    gsap.to(".mncircle",{
        opacity: .08,
    })

    gsap.to(".sec",{
        opacity: .4,
    })
}

gsap.to(".circle", {
    rotate: 0, // Rotate by -40 degrees to achieve 0 degrees
    ease: "expo.easeInOut", // Use the specified easing function
    duration: 2, // Set the animation duration to 2.5 seconds
  });

