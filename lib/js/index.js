function $(id){
  //this function return the ID of the element parsed
  return document.getElementById(id)
}

function setTime(){
  //this function ensures that the user enter the correct format
  var time = $("time").value;
  var fields = time.split(':');
  var min = fields[0];
  var sec = fields[1];
  
  if(time === ''){
      $("status").innerHTML = "Please enter time. eg 1:50";
  }else{
    if(min < 61 && sec < 61){
       $("status").innerHTML = "Counting";
        count(min, sec, sec);
    }else{   
       $("status").innerHTML = "Invalid time. eg 1:50";
    }
  }
}

function count(min, sec, secLeft){
    //this function is the count control is will check if the count down is finish
    if(min > 0 || secLeft > 0){
        if(secLeft == 0){ 
          min -= 1;
          sec = 60;
        }
        $("min").innerHTML = min;
        countDown(min, sec);
    }else{
      $("status").innerHTML = "Let's try that again (:";
      localStorage.removeItem("time");
      alert("finish");
      $("timeBtn").disabled = false;
      $("time").disabled = false;
    }
}

function countDown(min, sec){
   //this function runs the seconds count
    var time = sec;
    $("sec").innerHTML = time;
    var interval = setInterval(function(){
        $("sec").innerHTML = -- time;
        rememberMe(min, time);
        if (time == 0) {
          clearInterval(interval);
          count(min, sec, "00");
        }
    }, 1000);
}

function rememberMe(min, sec){
  //this function stores the time as a local storage incase the page refresh
  if (typeof(Storage) !== "undefined") {
     localStorage.setItem("time", min+':'+sec);
  }else{
     $("status").innerHTML = "Ooh my, your browser doesn't support web storage";
  }
}

function isTimeSet(){
     //this function checks if there is a time set
     if(localStorage.getItem("time") != null){
          var time = localStorage.getItem("time");
          var fields = time.split(':');
          min = fields[0];
          sec = fields[1];
          $("status").innerHTML = "Counting....";
          $("timeBtn").disabled = true;
          $("time").disabled = true;
          count(min, sec, sec);
     }
}

//on page load this call the isTimeSet function to check if there is a set time
window.onload = isTimeSet();
