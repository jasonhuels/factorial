$(function() {
  $(".form").submit(function(event) {
    event.preventDefault();
    var num = parseInt($("#input").val());
    var total = 1;
    var output = num + "! = " + num

    if(num > 0) {
      for(let i=num; i>0; i--){
        total *= i;
        output += " * " + i;
      }
    } else if(num === 0) {
      output = "0!";
    } else {
      total = "You broke it";
      output = "nothing";
      console.log("Factorials can not be negative");
    }

    output += " = " + total;
    $("#output").text(output);
  });
});

function factorial(num) {
    if(num > 0) {
      return num * factorial(num-1);
    } else {
      return 1;
    }
}
