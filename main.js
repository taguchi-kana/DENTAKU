const result = document.querySelector(".resultTop");  
var ctr ="Non";

    
function input(e){
  if(result.value === "0" && e ==="."){
    result.value = "0"+e;
  }else if(result.value === "0" && e ==="00"){
    result.value = "0";
  }else if(result.value === "0"){
    result.value = e;
    ctr ="OK";
  }else{
    result.value += e;
    ctr ="OK";
  }
}

function signInput(e){
  if(result.value === "0" || ctr ==="Non"){
    result.value += "";
  }else{
    result.value += e;
    ctr="Non";
  }
}

function resultView() {
    result.value = new Function("return " + result.value)();
}
function clearB(){
    result.value = '0';
}

    
    
