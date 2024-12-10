

const throttleFunction = (func, delay) => {

    let prev = 0;
    return (...args) => {
        let now = new Date().getTime();
        if (now - prev > delay) {
            prev = now;
            return func(...args);
        }
    }
}
document.querySelector(".center")
.addEventListener("mousemove",
    throttleFunction((dets) => {
        let div = document.createElement("div");
        div.classList.add('imagediv');
        div.style.left = dets.clientX+'px';
        div.style.top = dets.clientY+'px';
        
        let image = document.createElement("img");
        image.setAttribute("src", "https://images.unsplash.com/photo-1728740628211-199fdc3dacff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D")
        div.appendChild(image);

        gsap.to(image, {
            y : "0%",
            duration: .4,
            ease: Power3,
        })

        gsap.to(image, {
            y : "100%",
            delay: .5,
            ease: Power3,
        })
        
        document.body.appendChild(div)
        setTimeout(function(){
            div.remove();
        },1000)
    }, 500));
