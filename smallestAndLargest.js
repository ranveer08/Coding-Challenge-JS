// Find Smallest and Largest Element in an Array.

let smallestAndLargest = function(arr) {
    let max = arr[0];
    let min = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
        if(arr[i] < min){
            min = arr[i];
        }
    }
    console.log("Smallest: "+min+" and Largest: "+max);
}
smallestAndLargest([1,20,3,4,-5]);
