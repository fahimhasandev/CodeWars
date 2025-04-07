//Sum of positive Number

/*
You get an array of numbers, return the sum of all of the positives ones.
Example [1,-4,7,12] => 1 + 7 + 12 = 20
Note: if there is nothing to sum, the sum is default to 0.
*/

// Steps:
// 1. get the all nunber - for loop
// 2. Check Postive or negative num
// 3. Sum all Nums

function positiveSum(nums){
    let sums = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i]> 0){
            sums += nums[i];
        }
    }
    return sums;
}