let transaction:number[] =[50000,-2000,3000,-15000,-200,-300,4000,-3000];
let totalCredit=0;
let totalDebit =0;
let creditCount=0;
let debitCount=0;
let balance =0;
let suspiciousCount=0;


for(let i =0;i<transaction.length;i++){
    let amount = transaction[i];
    if(amount >0 ){
        creditCount ++;
        totalCredit +=amount;
       // console.log("credit");
    }
        else{
            debitCount++;
            totalDebit +=amount;
           // console.log("debit");
        }
   //update balance
   balance +=amount;      
   //suspicious amount
   if(amount >10000 && amount< -10000)  {
    console.log("suspicious credit n debit" + amount);
    suspiciousCount++;
   }
}
console.log("total credit :" +creditCount);
console.log("total debit :" +debitCount);
console.log("total amount credit :" +totalCredit);
console.log("total amount debit:" +totalDebit);
console.log("final balance :" + balance);
console.log("Suspicious transaction :" +suspiciousCount)