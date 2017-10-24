$(document).ready(function() {
  $("form#form1").submit(function(event){
  event.preventDefault();
    var formInput = $("input#item1").val();
    var formInput = formInput.toUpperCase();
    var forSplit = formInput.split("");
    var backward = forSplit.reverse();
    var backwards = backward.join("");

    if (formInput === backwards) {
      $(".yes").show();
      $(".yes").append("<p>" + formInput + " = " + backwards + "</p>")
    } else {
      $(".no").show();
      $(".no").append("<p>" + formInput + " does not equal " + backwards + "</p>")
    }

    // forward.push(formInput);
  });
});
