let indexPlusButtons = document.querySelectorAll(".buttonPlus");
indexPlusButtons.forEach(function(item) {
  item.addEventListener("click", function(e){

    let thisElement = e.target;
    thisElement.classList.toggle("buttonExit");

    let sideMenu = thisElement.parentElement.querySelector(".sideMenu");
    sideMenu.classList.toggle("showSide");

  });
});

let allDropdownMenus = document.querySelectorAll(".dropdownMenu");
allDropdownMenus.forEach(function(item) {

  item.addEventListener("click", function(e){

    let menu = e.target.parentElement;

    if (!menu.classList.contains("showDropDownMenu")){
      allDropdownMenus.forEach(function(item2) {
        item2.parentElement.classList.remove("showDropDownMenu");
      });
    }

    menu.classList.toggle("showDropDownMenu");
  });
});

let form = document.querySelector("#commentForm");
let buttonSend = document.querySelector("#buttonSend");

if (form != null){
  console.log("erro aqui");

  buttonSend.addEventListener("click", function(e){

    // name = document.querySelector("#formStart").nameInput.value;


    let destinatary = form.destinatary.value;
    let name = form.nameInput.value;
    console.log(name);
    let message = form.querySelector("#messageField").value;
    console.log(message);

    if (destinatary == "" || name == "" || message == ""){
      form.querySelector(".warning").classList.remove("hideDisplay");
      return;
    }

    form.querySelector(".warning").classList.add("hideDisplay");

    let confirmationFields = form.querySelectorAll("#comfirmationField main p");

    confirmationFields[0].textContent = "Your name: " + name;
    confirmationFields[1].textContent = "Destinatary: " + destinatary;
    confirmationFields[3].textContent = message;

    form.querySelector(".blackBackground").classList.remove("hideDisplay");


  });


  let buttonCancel = document.querySelector("#buttonCancel");
  buttonCancel.addEventListener("click", function(e){

    form.querySelector(".blackBackground").classList.add("hideDisplay");

  });


  let buttonConfirm = document.querySelector("#buttonConfirm");
  buttonConfirm.addEventListener("click", function(e){

    form.querySelector(".blackBackground").classList.add("hideDisplay");

    form.querySelector(".comfirmationMessage").classList.remove("hideDisplay");
  });
}

let hamburguer = document.querySelector("#hamburguer");
hamburguer.addEventListener("click", function(e){

  document.querySelector("#masthead nav").classList.toggle("showNavMenu");
  
});
