$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var nameInput = $("input#name").val();
    var emailInput = $("input#email").val();
    var bornInput = $("input#born").val();
    var favoriteColor = $("input#color").val();
    var genreInput = $("input:radio[name=genre]:checked").val();
    var composerInput = $("input:radio[name=composer]:checked").val();
    var instrumentInput = $("input:radio[name=instrument]:checked").val();


    $(".name").text(nameInput);
    $(".email").text(emailInput);
    $(".born").text(bornInput);
    $(".color").text(favoriteColor);
    $(".genre").text(genreInput);
    $(".composer").text(composerInput);
    $(".instrument").text(instrumentInput);

    $("#result").show();

    event.preventDefault();
  });
});
