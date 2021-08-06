// Problem 1: Given two Strings A and B. Find the length of the Longest Common Subsequence (LCS) of the given Strings. Input: A = Minneapolis, B = Minnesota.
let lcs = function(text1, text2) {

    function helper(m,n) {
        if(m == 0 || n == 0) return 0;
        if(text1[m-1] == text2[n-1]){
            return helper(m-1, n-1)+1;
        }
        return Math.max(helper(m-1,n),helper(m,n-1))
    }
    let m = text1.length;
    let n = text2.length;
    return helper(m,n);
}

console.log(lcs('Minneapolis','Minnesota'));



