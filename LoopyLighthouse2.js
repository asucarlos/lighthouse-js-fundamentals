function loopyLighthouse(range, multiples, words){
  for(var i = range[0]; i <= range[1]; i++){
    var result = i;
    if(result % multiples[0] === 0 && result % multiples[1] === 0){
      console.log(words[0] + words[1]);
    } else if(result % multiples[0] === 0){
      console.log(words[0]);
    } else if(result % multiples[1] === 0){
      console.log(words[1]);
    } else {
      console.log(result);
    }
  }
}
loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);
