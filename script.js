$(document).ready(function() {
 $('progress').hide();
 var b = document.getElementById("break"); //break display length section
 var s = document.getElementById("session"); //session display length section
 var bar = document.getElementById("progressBar");
  
 //when you click reset
  $("#reset").on("click", function(){
    b.value = 5;
    s.value = 25;
    $("#clock").html(s.value);
    $("#tiempo").html("Time Remaining: ");
    $('progress').hide();
  });//end of reset onclick

//When you click "start"
$("#start").on("click", function(){
  var sVal = s.value * 60; //turn input time into minutes by multiplying
  var bVal = b.value * 60; 
  //make timeIt go at one speed of one second
  var counter = setInterval(timeIt, 1000);
  //hide the start and reset buttons
  $('#start, #reset, .button').hide();
  $('progress').show();
  //display time --- divide by 60 for min, remainder for sec
  $('#clock').html(Math.floor(sVal/60) + ":0" + sVal%60);
  
  //countdown session amount by 1 sec until you reach 0
  function timeIt(){
    if(sVal>0){ //NOTICE: if/else statement inside of this one
      sVal--; //countdown
      bar.value+=(100/(s.value*60));
        //if seconds remaining is more than 9
        if(sVal%60>=10){
          $('#clock').html(Math.floor(sVal/60) + ":" + sVal%60);
        //if seconds remaining is less than 10, add a 0
        }else{
           $('#clock').html(Math.floor(sVal/60) + ":0" + sVal%60);
        }
    //when you reach 0, switch to the break time. coundown like above.
    }else{ //NOTICE: if/else statement inside of this one
      $('#clock').html(bVal); //display break time first
      $("#tiempo").html("Break Time:"); //New heading for BREAK
      $('progress').hide();
      if(bVal>0){//NOTICE: if/else statement inside of this one
         //$('#clock').html(Math.floor(bVal/60) + ":" + bVal%60); 
         bVal--;
         if(bVal%60>=10){
           $('#clock').html(Math.floor(bVal/60) + ":" + bVal%60);
         }else{
           $('#clock').html(Math.floor(bVal/60) + ":0" + bVal%60);
         }
      }//when you reach 0, clear the interval and return start and reset buttons
       else{
         clearInterval(counter);
         $('#start, #reset').show();}}
  }
  //end of start "onclick"
  });
  

 //adjusting the time
    $("#button1").on("click", function(){
      if (b.value > 0){
      b.value -= 1;}
  });
     $("#button2").on("click", function(){
      b.value++;
  });
    $("#button3").on("click", function(){
      if(s.value >5) {
        s.value -= 5;
        $("#clock").html(s.value); //reflect the value on the clock
        }
  });
    $("#button4").on("click", function(){
      var x = parseInt(s.value); //verify that s.value is a NUMBER, not a string
      x += 5; //add 5
      s.value = x; //set s.value equal to new value of X
      $("#clock").html(s.value); //reflect the value on the clock
  });
  
});
  

   
