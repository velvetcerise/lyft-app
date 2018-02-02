$(function(){
   setTimeout(function() {
      $('#splash').fadeOut(500);
   }, 1120);


});

//Flags
$("#demo").intlTelInput();

//Valid input with the number
function validarSiNumero(numero){
  if (!/^([0-9])*$/.tesst(numero))
    alert("El valor " + numero + " no es un número");
}


// getting LAB code
function getRandomCode() {
  return Math.floor((Math.random()));
}

$('#aleatory').click( function() {
    alert('your code is: LAB' + 'getRandomCode');
});
