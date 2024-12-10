 let arr = [
    {dp: "https://plus.unsplash.com/premium_photo-1732569105933-cd9903231867?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D",
         story: "https://images.unsplash.com/photo-1732468053948-bade8f3270cc?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0NHx8fGVufDB8fHx8fA%3D%3D"},
    {dp: "https://images.unsplash.com/photo-1733241685285-90b51eff2f2d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D",
         story: "https://images.unsplash.com/photo-1733299703906-29f25913ee6e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D"},
    {dp: "https://images.unsplash.com/photo-1732898551761-a5269088ae17?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDR8SnBnNktpZGwtSGt8fGVufDB8fHx8fA%3D%3D",
         story: "https://images.unsplash.com/photo-1732898685136-fa13d751a299?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDV8SnBnNktpZGwtSGt8fGVufDB8fHx8fA%3D%3D"},
    {dp: "https://images.unsplash.com/photo-1501272353655-73a287cd52f7?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDd8SnBnNktpZGwtSGt8fGVufDB8fHx8fA%3D%3D",
         story: "https://images.unsplash.com/photo-1732898685136-fa13d751a299?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDV8SnBnNktpZGwtSGt8fGVufDB8fHx8fA%3D%3D"},
 ]  

 var stories = document.querySelector(".stories");
 let clutter = "";

 let story = document.querySelector(".story");

 arr.forEach(function(elem,idx){
    clutter += `<div class="story">\
                <img id="${idx}" src="${elem.dp}" alt="">
            </div>`
 })

 stories.innerHTML = clutter

stories.addEventListener("click", function(dets){
    document.querySelector(".full-screen").style.display = "block"
    document.querySelector(".full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`

    setTimeout(function(){
            document.querySelector(".full-screen").style.display = "none"
    },3000)
});

