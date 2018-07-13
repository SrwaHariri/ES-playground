var fruits = ['Apple', 'Banana', "apricot"];

console.log(fruits.length); //length of array in numbers

var first = fruits[0]; // index 0 wich Apple
console.log(first);


var last = fruits[fruits.length - 1];  // last item 
console.log(last)


fruits.forEach(function(item, index, array) {
    console.log(item, index);
  });


  var newLength = fruits.push('Orange'); //add the parameter to the rear
  console.log(fruits,newLength); // new array and new length
console.log( fruits,fruits.push("peach")); //its strange , it adds the parameter but only prints the new lenghth

console.log(fruits.shift()); //throws out the first one in the front 
console.log(fruits,fruits.pop()); //throws the last one rear
var newLength = fruits.unshift('Strawberry'); //add one item in front
console.log(fruits,newLength);  

var pos = fruits.indexOf('Banana'); //bringsbackthe index of the given item 
var removedItem = fruits.splice(pos, 1); //remove the item of given index
console.log(fruits,removedItem);