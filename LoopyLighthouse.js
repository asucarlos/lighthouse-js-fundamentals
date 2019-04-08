function showNumbers(start, end){
  for(var i = start; i <= end; i++){
    var result = i;
    if(result % 3 === 0 && result % 4 === 0){
      console.log("LoopyLighthouse")
    } else if(result % 3 === 0){
      console.log("Loopy");
    } else if(result % 4 === 0){
      console.log("Lighthouse")
    } else {
      console.log(result);
    }
  }
}
showNumbers(100, 200);
