// //A bank evaluates loan applicants based on the following criteria:
// 1. Credit Score:
// o If the credit score is above 750, the loan is automatically approved.
// o If the credit score is between 650 and 750, additional checks are performed.
// o If the credit score is below 650, the loan is denied.

let creditScore: number =720;
if(creditScore >750){
    console.log("loan is approved");
}else if(creditScore >=650 && creditScore <=750){
        console.log("additional checks are performed");
}  else {
            console.log("loan is denied");
            
            
}

// 2. Income:
// o For credit scores between 650 and 750, the customer’s income must be at least $50,000
// for the loan to be considered.

let income:number =55000;
if(creditScore <=750 || creditScore >=650 && income >=55000){

        console.log("loan to be consider")
}else {

            console.log("loan is denied")

        }
// 3. Employment Status:
// o If the customer’s income is at least 50,000, the system checks whether the customer is
// employed.
// o If the customer is unemployed, the loan is denied.
let customerName: String = "John Doe";
let isemployed: boolean = true;
if(income >= 55000 && isemployed == true){
    console.log("loan approved");
}else{
        console.log("loan denied");
    }
// 4. Debt-to-Income Ratio:
// o If the customer is employed, the system checks the debt-to-income (DTI) ratio.
// o If the DTI ratio is less than 40%, the loan is approved.
// o If the DTI ratio is 40% or greater, the loan is denied.
let debtToIncomeRatio:number = 35.0;
if(isemployed == true && debtToIncomeRatio <=0.4){
         console.log("loan is approved");

}else if (debtToIncomeRatio >=0.4){
    console.log("loan denied");
}