$(document).ready(function() {
 var flavors = ["chocolate", "strawberry", "rocky road", "lemon"];
  flavors.forEach(function(flavor) {
    $("#iceCream").append("<li>" + flavor + "</li>");
  });
});
