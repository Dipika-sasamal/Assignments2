// Implement pow(x, n), which calculates x raised to the power n (i.e., xn
// ).

// Example 1:
// Input: x = 2.00000, n = 10
// Output: 1024.00000
 function myPow(x:number,n:number): number{
// //    if (n === 0) return 1;
    let res =1;
    for(let i =0;i<n;i++){
      res =res * x;

    }
    return res;
    
    
}
// Input
const x = 2.00000;
const n = 10;

// Function call
console.log(myPow(x, n));

// Example 2:Input: x = 2.10000, n = 3, Output: 9.26100

 function myPow1(a:number,b:number): number{
// //    if (n === 0) return 1;
    let res =1;
    for(let i =0;i<b;i++){
      res =res * a;

    }
    return res;
    
    
}
// Input
const a = 2.10000;
const b = 3;

// Function call
console.log(myPow1(a, b));


// Example 3: Input: x = 2.00000, n = -2, Output: 0.25000, Explanation: 2-2 = 1/22 = 1/4 = 0.25
function mypow2(c:number,d:number): number{
    if (d < 0) {
        c = 1 / c;
        d = -d;
    }
    let res =1;
    for(let i=0;i<d;i++){
        res=res*c;

    }
    return res
}
//input
const c=2.0000;
const d=-2;
//function call
console.log(mypow2(c, d));
