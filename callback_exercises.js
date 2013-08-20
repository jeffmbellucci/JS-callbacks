function timer() {
   var time = Date.now();
   var i = 0;

   setInterval ( function () {
      var unixTime = new Date(time + i);
      var hours = unixTime.getHours();
      var minutes = unixTime.getMinutes();
      var seconds = unixTime.getSeconds();

      console.log(hours + ':' + minutes + ':' + seconds);
      i += 5000;


   }, 5000);
}


var readline = require('readline');
var reader = readline.createInterface({
   input: process.stdin,
   output: process.stdout
});



Array.prototype.crazySort = function() {
   var that = this;
   sortPass(that, finishedPass);

   function finishedPass(that) {
      console.log("Sort complete " + that);
      reader.close;
   }
}


function compare(el1, el2, handleUserResponse) {
   reader.question("Which is larger(l or r): " + el1 + " " + el2, handleUserResponse);
}

function sortPass(arr, finishedPass) {
   var i = 0;
   swapped = false;
   performStep();

   function handleUserResponse(answer) {
      if (answer === "l") {
         var temp = arr[i];
         arr[i] = arr[i + 1];
         arr[i + 1] = temp;
         swapped = true;
      }
      i++;
      console.log(arr)
      performStep();
  }

  function performStep() {
      if (i < arr.length - 1) {
         compare(arr[i], arr[i + 1], handleUserResponse)
      } else {
         if (swapped === true) {
            sortPass(arr, finishedPass);
         } else {
            finishedPass(arr);
         }
      }
   }
}

Function.prototype.bind = function(obj, args) {
   var that = this;
   return function () {
      that.apply(obj, args);
   }
}

function Cat(name){
   this.name = name;
}

Cat.prototype.meow = function() {
   console.log("meow");
}

function Dog(name){
   this.name = name;
}

Dog.prototype.bark = function() {
   console.log("woof");
   console.log(this.name)
}

var ourCat = new Cat("fluffy");
Dog.prototype.bark.bind(ourCat)