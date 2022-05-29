function evenify(num){
    if(num%2 == 0){
        console.log(num, ' : is even number')
        return num;
    }
    else{
        console.log(num*2, ' : is odd number')
    }
}
//var result = evenify(4);
// console.log('result',result);

function evenify_all(nums){
    for (let i = 0; i<nums.length; i++){
        const num = nums[i];
        evenify(num)
    }
}
nums = [5, 30, 56, 75, 18];
evenify_all(nums);