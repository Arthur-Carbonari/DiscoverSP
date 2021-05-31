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
