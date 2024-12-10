// let elem = document.querySelectorAll(".elem")
// elem.forEach(function(val){
//     val.addEventListener("mouseenter", function(){
//         val.childNodes[3].style.opacity = 1;
//     })
//     val.addEventListener("mouseleave", function(){
//         val.childNodes[3].style.opacity = 0;
//     })
//     val.addEventListener("mousemove", function(dets){
//         val.childNodes[3].style.left = dets.clientX+"px";
//         val.childNodes[3].style.top = dets.clientY+"px";
//     })
// })

let elems = document.querySelectorAll(".elem");

elems.forEach(function (val) {
    const img = val.querySelector("img");

    val.addEventListener("mouseenter", function () {
        img.style.opacity = 1;
    });

    val.addEventListener("mouseleave", function () {
        img.style.opacity = 0;
    });

    val.addEventListener("mousemove", function (e) {
        const rect = val.getBoundingClientRect(); 
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top; 

        img.style.left = `${x}px`;
        img.style.top = `${y}px`;
    });
});
