/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
    for(i=0;i<nums.length;i++){
        let count = 0
        for(j=0;j<nums.length;j++){
            if(nums[i]==nums[j]){
             count = count + 1
            }
        }
        if(count>1){
            return(nums[i])
        }
    }

};