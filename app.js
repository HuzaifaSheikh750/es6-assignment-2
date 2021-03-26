
//*******************/ overwrite value while making new object using Object.assign************

// const obj1 = {
//     fname: "muhammad",
//     lname: "huzaifa",
//     roll: "042",
// }

// let newObj = Object.assign({}, obj1)
// console.log(obj1)

// newObj.roll = "0311"
// console.log(newObj)


// ************************************nested ternary operator**************************

// let mark = 78;
// let grade = (mark > 80) ? "A+ Grade" :
//     (mark > 70) ? "A Grade" :
//         (mark > 60) ? "B Grade" :
//             (mark > 50) ? "C Grade" :
//                 (mark > 40) ? "D Grade" : "fail";
// console.log(grade);


// -----------------for in loop--------------------
// for-in loop should not be used to an Array where the index order is important

// let student={
//     name:"huzaifa",
//     program:"bscs",
//     university:"bahria",
// }
// for(const n in student){
//     console.log(`${n} = ${student[n]}`)
}

// -----------------for of loop--------------------

// let arr=["huzaifa","mudassir","waleed","darshan"]
// for(const n of arr){
//     console.log(n);
// }

//********************************** What is arrow function?***************************

// ----------Simple arrow function-------------

// let welcome = () => {
//     return "Huzaifa";
// }
// console.log(welcome());

// -----------arrow function return value by default--------------

// let welcome=()=>"Huzaifa"
// console.log(welcome());


// -------------arrow function with parameter-------------------

// const student = (fname, lname) => `${fname} ${lname}`
// console.log(student('Muhammad', 'Huzaifa') )
