let dropback = document.querySelector(".dropback");
let modal = document.querySelector(".modal");
let buttons = document.querySelectorAll(".plan .button");
let toggle = document.querySelector(".toggle-button");
let mobileNav = document.querySelector(".mobile-nav");

// to display the modal and dropback
for(let i=0; i<buttons.length; i++){
    buttons[i].addEventListener("click", function(){
        modal.classList.add("open");
        dropback.classList.add("open");
    });
}

// to hide the modal and dropback
let modalButton = document.querySelector(".btn");

if(modalButton){
    modalButton.addEventListener("click", closeModal);
}

dropback.addEventListener("click", function(){
    mobileNav.classList.remove("open");
    closeModal();
});

function closeModal(){
    if(modal){
        modal.classList.remove("open");
    }
    dropback.classList.remove("open");
}

toggle.addEventListener("click", function(){
    mobileNav.classList.add("open");
    dropback.classList.add("open");
});
