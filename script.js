let indexPlusButtons = document.querySelectorAll(".indexArticle .buttonPlus");
indexPlusButtons.forEach(function(item) {
  item.addEventListener("click", function(e){
    e.target.classList.toggle("buttonExit");
  });
});
