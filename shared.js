let dropback = document.querySelector(".dropback");
let modal = document.querySelector(".modal");
let buttons = document.querySelectorAll(".plan .button");

// to display the modal and dropback
for(let i=0; i<buttons.length; i++){
    buttons[i].addEventListener("click", function(){
        modal.style.display = "block";
        dropback.style.display = "block";
    });
}

// to hide the modal and dropback
let modalButton = document.querySelector(".btn");
modalButton.addEventListener("click", function(){
    modal.style.display = "none";
    dropback.style.display = "none";
});