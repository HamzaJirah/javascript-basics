// var age = 5;

// while(age < 10){
//   console.log("your age is less than 10")
//   age++;
// }

// document.write("you are less than 10")

// for(age = 5; age < 10; age++){
//   console.log("your age is less than 10")
// }

// document.write("you are now over 10");

// var links = document.getElementsByTagName("a");

// for(i = 1; i <=links.length; i++){
//   console.log("this is link number " + i)
// }

// document.write("all links now looped")

// var pearl = 0;

// while(pearl <= 10){
//   document.write(pearl + "<br>")
//   pearl++;
// }

// for(pearl = 0; pearl <= 10; pearl++){
//   document.write(pearl + "<br>")
// }

// var route1 = "mararaba";
// var route2 = "Kubwa";
// var route3 = "Airport";

// var enterRoute = prompt("What route do you commute from?")

// if(enterRoute == route1){
//   alert("More high capacity buses on this route ply on a narrow road")
// }else if(enterRoute == route2){
//   alert("you have flashy cars on this route")
// }else if(enterRoute == route3){
//   alert("you won\'t see many high capacity buses on this route and less traffic gridlock")
// }

// var list = 1;

// while(list <= 10){
//   document.write(list + " have been looped" + "<br>")
//   list++;
// }

// for(list=1; list <10; list++){
//   document.write(list)
// }

// var pearl = 1;
// while(pearl <= 10){
//   document.write("while loop " + pearl + " <br>")
//   pearl++;
// }

// var step;
// for (step = 0; step < 5; step++) {
//   // Runs 5 times, with values of step 0 through 4.
//   console.log('Walking east one step');
// }

// var pearl = ['hamza', 'jirah', 'ibro', 'shere', 'koro', 'usman', 'lawal']
// var i = 0;

// while(i < pearl.length){
//   console.log(i+1+ " : " + pearl[i])
//   i++;
//   if( pearl[i] == 5){
//     break;
//   }
// }
// for(i=0; i < pearl.length; i++){
//   console.log(i+1+ ": " + pearl[i])
// }

// var i = 0;
// while(i < 10){
//   console.log(i)
//   i++;
//   if(i === 5){
//     break;
//   }
// }
// console.log("I have broken out of the loop")

// for(i=0; i<10; i++){
//   if(i == 2 || i == 4){
//     continue;
//   }
//   console.log(i)
//   if(i == 7){
//     break;
//   }
// }

// var pearlNoon = ['hamza', 'lawal', 'hureira', 'amina', 'danbala', 'yahaya', "sa\'a"]
// var i = 0;

// while(i<pearlNoon.length){
//   document.write(pearlNoon[i] + " <br>")
//   i++;
//   if(pearlNoon == )
// }


// var i = 0;
// while(i <20){
//   if((i % 2) == 0)
//   console.log(i)
//   i++;
// }

// for(i=0; i<20; i++){
//   if(i % 2 == 0)
//   console.log(i)
// }

// FUNCTIONS(grouping all related statements together; while calling the name of the function to invoke the statements in it)

// function pearlClass (){
//   alert("you are Pearl Class")
// }

// FUNCTION WITH PARAMETER/ARGUMENT(a variable that could be used within a function)

// function alertMessage(pearl){
//   alert(pearl)
// }

// alertMessage("hey, i greet you");
// alertMessage("how is it going")
// alertMessage("are you cool?")

// FUNCTION WITH MULTIPLE PARAMETERS
// function addNums(num1, num2, num3){
//   var answer = num1 + num2 + num3
//   document.write(answer + "<br>")
// }

// addNums(3, 5, 1);
// addNums(5, 6, 1);
// addNums(9,6, 1);

// SWITCH STATEMENT USING A STRING
// var student = "chima";

// var enterName = prompt("What is your name?")

// switch(enterName){
//   case "chuks":
//     alert("he is the class rep");
//     break;
//   case "chima":
//     alert("he is a corper");
//     break;
//   case "fati":
//     alert("she is a quite girl");
//     break;
//   default:
//     alert("the person is not a student");
// }

// var enterNumber = Number(prompt("what is your score?"));

// switch(enterNumber){
//   case 1:
//   case 2:
//   case 3:
//   case 4:
//   case 5:
//     alert("you have failed since you scored " + enterNumber);
//     break;
//   case 6:
//   case 7:
//   case 8:
//   case 9:
//   case 10:
//     alert("you have pass since you scored " + enterNumber);
//     break;
//   default:
//     alert("you scored way more than the pass mark " + enterNumber);
// }

function addNumbers(a, b){
  var answer = a * b;
  document.write(answer + "<br>");
  return(answer);
}
 var result =addNumbers(3, 3);

 function addFig(c, result){
   var sum = c + result;
   document.write(sum);
 }

 addFig(9, result)