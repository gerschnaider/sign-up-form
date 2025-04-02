// save regularly accessed elements
const personalInfoForm = document.querySelector(".personal-info-form");
const listInput = document.querySelectorAll(".personal-info-form input");


personalInfoForm.addEventListener("focus", (event) => {
    //event delegation on the form in the capture phase as the event doesn't bubble
    //removes placeholder so that empty input shows invalid after you focus it
    console.log("Enter event");
    if(event.target.nodeName=="INPUT") {
        event.target.removeAttribute("placeholder");
    }
    //stop propagation as it's useless
    event.stopPropagation();
} , true);

personalInfoForm.addEventListener("submit", (event) => {
    //removes all placeholders to show errors
    for (const input of listInput){
        if(input.hasAttribute("placeholder"))
            input.removeAttribute("placeholder");
    }
    if(!personalInfoForm.checkValidity())
        event.preventDefault();
});
