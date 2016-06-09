'use strict'

var X = true;
var O = false;
var cnt =0; 

$(document).ready(init);

function init(){
  $('.col-sm-4').on('click' , turnHandler)
  var X = true;
}

function turnHandler(event){
  console.log($(this).text())
    //console.log('turn handler');
    if ( X === true){
      $('h1').text("O's Turn");

      console.log('Xs turn');
      if($(this).text() !== 'O' && $(this).text() === '' ){
        $(this).text('X');
       X = false;
       cnt++;
     }

   }
   else{
     console.log("Os turn ")
     $('h1').text("X's Turn");
     if($(this).text() !== 'X' && $(this).text() === '' ){
      $(this).text('O');
      X = true;
      cnt ++;
    }

  }
  winner();


}

function winner(){
    if      ($('#bx1').text() === $('#bx2').text() && $('#bx2').text() !== '' && $('#bx2').text() === $('#bx3').text()) {alert($('#bx1').text() + " Are A Winner !!! ")}
    else if ($('#bx1').text() === $('#bx4').text() && $('#bx4').text() !== '' && $('#bx4').text() === $('#bx7').text()) {alert($('#bx4').text() + " Are A Winner !!! ")}
    else if ($('#bx1').text() === $('#bx5').text() && $('#bx5').text() !== '' && $('#bx5').text() === $('#bx9').text()) {alert($('#bx5').text() + " Are A Winner !!! ")}
    else if ($('#bx4').text() === $('#bx5').text() && $('#bx5').text() !== '' && $('#bx5').text() === $('#bx6').text()) {alert($('#bx5').text() + " Are A Winner !!! ")}
    else if ($('#bx7').text() === $('#bx8').text() && $('#bx8').text() !== '' && $('#bx8').text() === $('#bx9').text()) {alert($('#bx9').text() + " Are A Winner !!! ")}
    else if ($('#bx2').text() === $('#bx5').text() && $('#bx5').text() !== '' && $('#bx5').text() === $('#bx8').text()) {alert($('#bx8').text() + " Are A Winner !!! ")}
    else if ($('#bx3').text() === $('#bx6').text() && $('#bx6').text() !== '' && $('#bx6').text() === $('#bx9').text()) {alert($('#bx8').text() + " Are A Winner !!! ")}
    else if ($('#bx3').text() === $('#bx5').text() && $('#bx5').text() !== '' && $('#bx5').text() === $('#bx7').text()) {alert($('#bx7').text() + " Are A Winner !!! ")}
    else if (cnt >=9){alert(" Game Is A Tie!!!")}
}

