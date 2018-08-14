
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
          count(min, sec, 0);
        }
    }, 1000);
}
