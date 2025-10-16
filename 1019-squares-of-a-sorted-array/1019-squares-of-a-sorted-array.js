/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    var array = nums.map((n)=>n*n)
     array.sort((a,b)=>a-b)
    return array
};