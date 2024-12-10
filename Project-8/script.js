let addbtn = document.querySelector("#add");
let confimation = document.querySelector("#change");

let check = 0;

addbtn.addEventListener("click", function(){
    if(check == 0){
        confimation.innerHTML = "Frineds";
        confimation.style.color = "green";
        addbtn.innerHTML = "Remove Friend  "
        addbtn.style.backgroundColor = "#111";
        check = 1;
    }
    else{
        addbtn.innerHTML = "Add Friend"
        addbtn.style.backgroundColor = "cadetblue"
        confimation.innerHTML = "Stranger";
        confimation.style.color = "red";
        check = 0;
    }
})



