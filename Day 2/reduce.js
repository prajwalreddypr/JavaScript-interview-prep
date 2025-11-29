const nums = [1,2,3,4,5,6];
console.log(nums)

const sum = nums.reduce((accumulator, num) => accumulator + num, 0);
console.log(sum);