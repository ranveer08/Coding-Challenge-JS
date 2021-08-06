//Find the Contiguous Subarray with Sum to a Given Value in an array.

// Given an array of positive integer and given value X, find Contiguous sub array whose sum is equal to X.
// For example:

// arr[]={14, 12, 70, 15, 99, 65, 21, 90};
// X =97.
// Sum found between index 1 to 3
// Elements are 12, 70 and 15

function subArraySum(arr,sum)
{
    let newSum=0;
 
    for (let i = 0; i < arr.length; i++) {
        newSum = arr[i];
        for (let j = i + 1; j <= arr.length; j++) {
            if (newSum == sum) {
                console.log("Sum found between indexes "+i+" and "+(j - 1));
                return;
            }
            if (newSum > sum || j == arr.length)
                break;
                newSum = newSum + arr[j];
        }
    }
    console.log("No subarray found");
    return;
}
let arr= [14, 12, 70, 15, 99, 65, 21, 90];
let sum = 97;
subArraySum(arr,sum);