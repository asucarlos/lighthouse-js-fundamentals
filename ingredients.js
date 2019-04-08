var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", " baking powder", "chocolate chips", "bananas"];

console.log("while ingredients: ");
var i = 0;
while(i < ingredients.length){
  console.log(ingredients[i]);
  i++;
};

console.log("for ingredients: ");
for(i=0; i < ingredients.length; i++){
  console.log(ingredients[i]);
};

console.log("backwards ingredients: ");
for (i=0; i< ingredients.length; i++) {
  console.log(ingredients[ingredients.length - i -1]);
}