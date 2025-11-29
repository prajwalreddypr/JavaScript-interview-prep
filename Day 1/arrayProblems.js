//Remove duplicates from an array


//Square each number using map
let arr2 = [1,2,3,4,5,6];
let squared = arr2.map(x => x **2);
console.log(squared);


//Filter names starting with "A"
let arr3 = ["Anitha", "Ashitha", "Manoj", "Cindy", "David"];
let filtered = arr3.filter(name => name.startsWith("A"));
console.log(filtered);


//FInd the first even number
let arr4 = [1,2,3,4,5,6,7,8,10];
let firstEven = arr4.find(x => x % 2 == 0);
console.log(firstEven);


//Sum numbers using reduce
let arr5 = [1,2,3,4,5,6,7,8,9];
let sum = arr5.reduce((total, num) => total+num, 0);
console.log(sum);
