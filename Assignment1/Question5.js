const arrr1 = [1, 2, 3];
const arrr2 = [2, 5, 6];
const mergedArr = arr1.concat(arr2).sort((a,b) => a-b);
console.log(mergedArr); 



const nums1 = [1,2,3,0,0,0];
const m = 3;
const nums2 = [2,5,6];
const n = 3;

nums1.splice(m); 
nums1.push(...nums2);
nums1.sort((a,b) => a-b); 

console.log(nums1);
