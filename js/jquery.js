$(function(){
   setTimeout(function() {
      $('#splash').fadeOut(500);
   }, 1120);


});

//Flags
$("#demo").intlTelInput();



// getting LAB code
function getRandomCode() {
  return Math.floor((Math.random()));
}

$('#aleatory').click( function() {
    alert('your code is: LAB' + 'getRandomCode');
});

//VALID TO OK
