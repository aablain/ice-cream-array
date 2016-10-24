$(document).ready(function() {

  $("button#go").click(function(event) {
    debugger;
    var iceCreams = ["Vanilla Bean", "Birthday Cake", "Phish Food"];

    $("ul").html("");

    iceCreams.forEach(function(iceCream) {
      $("ul").append("<li>" + iceCream + "</li>");
    });

    event.preventDefault();
  });


});
