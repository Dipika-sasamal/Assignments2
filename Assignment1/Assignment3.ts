let names: String[] =["Suresh","Mahesh","Naresh"];
let Marks: Number[] =[85,90,92];
let UpdatedMarks: Number[] =[];
let SUM: Number = 0;
//Add 10 marks using assignment operator
for(let i=0;i<Marks.length;i++){
    UpdatedMarks[i] =Marks[i] + 10;
    SUM +=UpdatedMarks[i];

}
console.log("Updated marks");
for(let i=0;i<names.length;i++){
    console.log(names[i] + ":" + UpdatedMarks[i]);

}
//calculate avg
let average: number = SUM / Marks.length;
console.log("avg marks : "+ average);

// 1. C
// reate two arrays to store student names ["Suresh","Mahesh","Naresh"] and
// marks [75, 80, 82] Add 10 marks to each students using assignment operators and
// store it into another array, after adding 10 marks identify the average marks of all
// students

// Expected Output:
// Updated Marks:
// Suresh: 85
// Mahesh: 90
// Naresh: 92
// Average Marks: 89.0