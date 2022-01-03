// function testAsync(){
//     return new Promise((resolve,reject)=>{
//         //here our function should be implemented 
//         setTimeout(()=>{
//             console.log("Hello from inside the testAsync function");
//             resolve();
//         ;} , 5000
//         );
//     });
// }

// async function callerFun(){
//     console.log("Caller");
//     let ty = testAsync();
//     await ty;
//     console.log("After waiting");
//     console.log(ty);
// }

// let st = callerFun();

// console.log(st);
//process.exit();