//PROBLEMS ON STRING

//REVERSE A STRING
// const str = "bonjourParis";
// let rev = ""

// for(let i=str.length-1; i >=0; i--){
//     rev += str[i];
// }

// console.log(rev);





//COUNTING VOWELS IN A STRING
// const str = "ILoveJavaScript";
// const vowels = "aeiouAEIOU";
// let count = 0;

// for(let char of str.toLowerCase()){
//     if(vowels.includes(char)){
//         count += 1;
//     }
// }

// console.log(count);



//CHECKING IF A GIVEN STRING IS PALINDROME
//method = reverse the string nd compare.

// let str = "bonjourEmily";
// let rev = "";

// for(let i=str.length-1; i >=0; i--){
//     rev += str[i];
// }

// console.log(str == rev);
//OR

// const str = "malayalam";
// const rev = str.split("").reverse().join("");

// console.log(str === rev);



//COUNTING OCC OF A CHARACTER
// const str = "EmilyInParis";
// const charToCount = "i";
// let count = 0;

// for(let char of str.toLowerCase()){
//     if(charToCount == char){
//         count += 1;
//     }
// }

// console.log(count);



//CHECKING IF STRING CONTAINS A SUBSTRING
// const str = "I love Paris";
// const subString = "is";

// let containsSub = str.includes(subString);
// console.log(containsSub);




//FIRST NON REPEATING CHARACTER
//basically if the first index is same as the last index, then its unique. Ashte Simpleeee
// const str = "aabbcdddeee";
// let firstUnique = null;

// for(let char of str){
//     if(str.indexOf(char) == str.lastIndexOf(char)){
//         firstUnique = char;
//         break;
//     }
// }
// console.log(firstUnique);




