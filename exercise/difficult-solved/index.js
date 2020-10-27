$('.element').click(function(){
  $('.element').css("background", "linear-gradient(135deg, rgba(0,0,0,0.22), rgba(255,255,255,0.25))");

  setTimeout(function(){
    $('.element').css("background", "linear-gradient(-45deg, rgba(0,0,0,0.22), rgba(255,255,255,0.25))");
  }, 250)

  var inputValueWhenButtonIsClicked = $('.input-element').val();

  if(inputValueWhenButtonIsClicked != ""){
    console.log("Your Name Is: " + inputValueWhenButtonIsClicked);
  } else {
    console.log("Please insert your name");
  }

});
