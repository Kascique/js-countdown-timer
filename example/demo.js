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
