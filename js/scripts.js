$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var firstNameInput = $("input#firstName").val();
    var lastNameInput = $("#lastName").val();
    var bornInput = $("input#born").val();
    var favoriteColorInput = $("input#favoriteColor").val();
    var timeOfDayInput = $("#timeOfDay").val();
    var candidateInput = $("input:radio[name=candidate]:checked").val();

    $(".firstName").text(firstNameInput);
    $(".lastName").text(lastNameInput);
    $(".born").text(bornInput);
    $(".timeOfDay").text(timeOfDayInput);

  $(".blankSurvey").toggle();
  $(".results").toggle();
  $("body").css('background-color', favoriteColorInput);
  if (candidateInput === "clinton"){
    $("#clinton").toggle();
  };
  if (candidateInput === "trump"){
    $("#trump").toggle();
  };
  if (candidateInput === "other"){
    $("#other").toggle();
  };
  });
});
