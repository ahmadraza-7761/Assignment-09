// 1. Write a js program to print all natural numbers from 1 to n. - using while loop

// var num=prompt("Enter a number");
// var i=0;
// for (let i = 0; i <= num; i++) {
//     console.log("The natural numbers are: " +i);
// }

// 2. Write a js program to print all natural numbers in reverse (from n to 1). - using while loop

// var num=prompt("Enter a number");
// var i=num;
// while(i>=0){
// console.log(i)
// i--;   
// }

// 3. Write a js program to print all alphabets from a to z. - using while loop
// var alphabets="abcdefghijklmnopqrstuvwxyz";
// var i = 0;
// console.log(alphabets.length);
// while (i<alphabets.length) {
//     console.log(alphabets[i]);
//     i++;
// }

// 4. Write a js program to print all even numbers between 1 to 100. - using while loop
// var numbers = 100;
// i = 0;
// while (i <= numbers) {
//     if (i % 2 == 0) {
//         console.log(i)
//     }
//     i++
// }

// // 5. Write a js program to print all odd number between 1 to 100.


// var oddNum=100;
// var x=0;
// while(x<oddNum){
//     if(x%2!=0){
//         console.log(x)
//     }
//     x++
// }

// 6. Write a js program to find sum of all natural numbers between 1 to n.

// var num=prompt("Enter a Number");
// var i=0;
// var sum=0;
// while(i<=num){

//     var sum = sum + i

// i++
// }
// console.log(sum)

// 7. Write a js program to find sum of all even numbers between 1 to n.

// var evenNum=prompt("Enter numbers")
// var i=0;
// var sum=0;
// for (let i = 0; i <= evenNum; i++) {
//     if(i%2==0){
//          var sum=sum+i
//     }
//     i++
    
// }
// console.log(sum)


// 8. Write a js program to find sum of all odd numbers between 1 to n.

// var oddNum=prompt("Enter a Number");
// var i=0;
// var sum=0;

// while (i<=oddNum) {
//     if(i%2!=0){
//         sum=sum+i
//     }
//     i++
// }
// console.log(sum)

// 9. Write a js program to print multiplication table of any number.
// var tableNum=prompt("Enter Your Table");
// var length=prompt("Enter Lenght")
// var i=0;
// var answer;
// for (let i = 0; i <= length; i++) {
//    answer=tableNum*i
//    console.log( answer)   
   
// 10. Write a js program to count number of digits in a number.

// var num=prompt("Enter Number");
// console.log(num.length)

// 11. Write a js program to find first and last digit of a number.

// var num=prompt("ENter Number");
// var num1=num[0];
// var length=num.length;
// var lastNum=length-1;
// var last=num[lastNum];

// console.log("First Digit of This Number",num1)
// console.log("First Digit of This Number",last)

// 12. Write a js program to find sum of first and last digit of a number.

// var num=prompt("Enter Number");
// var num1=num[0]
// var num2=num[num.length-1]
// var num1=parseInt(num1)
// var num2=parseInt(num2)
// var sum=num1+num2
// console.log("The sum of first and last Digit is",sum)

// 13. Write a js program to swap first and last digits of a number.




// var num="1234";


// var firstNum=num[0];

// var midstr=num.toString
// var midNum=num[1- midstr.length -1]

// var lastNum=num[ num.length- 1];



// console.log(firstNum);
// console.log(midNum);
// console.log(lastNum);

// 14. Write a js program to calculate sum of digits of a number.

// let number = 12; // You can change this to any number
// let sum = 0;

// while (number > 0) {
//   let digit = number % 10; // Get the last digit
//   sum += digit;            // Add it to sum
//   number = Math.floor(number / 10); // Remove the last digit
// }

// console.log("Sum of digits: " + sum);



var num=123;
var sum=0;

while (num>0) {
    var dig=num%10;
    sum+=dig;
    num=Math.floor(num % 10);
}
console.log(num)
console.log(dig)