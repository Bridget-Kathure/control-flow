//Write a program that takes in an array of numbers and consoles the first four items multiplied by itself  
//and the last two added by 10. Return the array with the new values
function theNumbers(arr) {
    let theFirstFour = arr.slice(0, 4).map(num => num * num);
    let theLastTwo = arr.slice(-2).map(num => num + 10);
    const newArray = theFirstFour.concat(theLastTwo);
    console.log(newArray);
   }
   theNumbers([8,20,4,56,8,9,0,6,1,10,5]);

   //Write a program that takes in the following array and use a while loop to iterate and 
   //break when the item is equal to the fourth index :let arrNum = [1,2,3,4,5,6,7,8,9];
    let arrNum = [1,2,3,4,5,6,7,8,9]
    let i = 0;
    while(i<arrNum.length){
        if(i===4){
            break
        }
   
   console.log(arrNum[1]);
   i++
    }

//Write a function that takes in a an array of strings and use a continue statement when the item is at the second index:  
//let fruits= ['apple','plum','banana','strawberries','kiwi']
function goodfruits(arr){
for (let i = 0;i <arr.length;i++){
    if(i===1){
        continue;}
        console.log(arr[i])
}
}
let fruits = ['apple','plum','banana','strawberries','kiwi']
goodfruits(fruits)

//Write a function that accepts an array of strings and console.logs each element using a for loop.

function arrayOfStrings(arr){
 for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]); } }
    
    let names = ['Jane', 'Meg', 'Rose', 'Pearl']; 
    arrayOfStrings(names);

    //Write a JavaScript function that takes a string as input and reverses it using a while loop. 
    //The function should return the reversed string. 
    function theReversedString(string){
        let theString = ''
        let i = string.length - 1;
        while(i>= 0){
            theString += string[i];
            i--
        }
        return theString
    }

    let theFirstString = "I love bananas"
    let theSecondString = theReversedString(theFirstString)
    console.log(theSecondString)

    