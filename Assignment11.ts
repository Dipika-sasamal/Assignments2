// Assignment (Arrays and Loops)
// Print the numbers in diamond-shaped pyramid of numbers.
// Pattern should be as below.

// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1
let n:number =5;
for(let i =1;i<=n;i++){
    let line="";
    for(let j=1;j<=i;j++){
        line +=j + "";
    }
    console.log(line);
}
for(let i=n-1;i>=1;i--){
    let line="";
    for(let j=1;j<=i;j++){
        line +=j +"";
    }
    console.log(line);
}
