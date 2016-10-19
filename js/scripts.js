$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var firstNameInput = $("input#firstName").val();
    var lastNameInput = $("input#lastName").val();
    var bornInput = $("input#born").val();
    var favoriteColorInput = $("input#favoriteColor").val();
    var timeOfDayInput = $("input#timeOfDay").val();
    var candidateInput = $("input:radio[name=candidate]:checked").val();

    $(".firstName").text(firstNameInput);
    $(".lastName").text(lastNameInput);
    $(".born").text(bornInput);
    $(".exclamation").text(exclamationInput);
    $(".verb").text(verbInput);
    $(".noun").text(nounInput);
  });

if (candidateInput === "clinton"){

};
});
