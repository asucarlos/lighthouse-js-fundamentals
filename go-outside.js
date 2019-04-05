var temperature = 12;

if(temperature < 0){
  console.log("Bring your jacket");
}
else if(temperature < 15){
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine");
}

console.log("Now you're ready to go outside!");

var isCitizen = true;
var age = 20;
if (isCitizen && age > 18){
  console.log("You are eligible to vote.");
}

if (temperature < -40 || temperature > 40) {
  console.log("Going outside is not a good idea");
}

var raining = false;
if (!raining){
  console.log("Why did you bring your umbrella?");
}