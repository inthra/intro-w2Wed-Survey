$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var nameInput = $("input#name").val();
    var emailInput = $("input#email").val();
    var bornInput= $("input#born").val();
    var genreInput = $("input.genre").val();
    var composerInput = $("input.composer").val();
    var instrumentInput = $("input.instrument").val();

    $(".name").text(nameInput);
    $(".email").text(emailInput);
    $(".born").text(bornInput);
    $(".genre").text(genreInput);
    $(".composer").text(composerInput);
    $(".instrument").text(instrumentInput);

    $("#result").show();

    event.preventDefault();
  });
});
