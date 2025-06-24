//setTimeout
//function hello(){
//  console.log("hello from setTimeout");
//}
//setTimeout(() => console.log("hello from setTimeout"),5000);
//console.log("hello from js");
//setInterval
/*let count=0
let timer = setInterval(() => {
    count++;
    console.log("Hello again");
    if(count>5){
    clearInterval(timer);
    }
},2000);
if(count>5){
    clearInterval(timer);
}
console.log("Hello from async.js");*/



//Callbacks
/*function dotask(taskName, callback){
    console.log(`Starting ${taskName}....`);
    setTimeout(() => {
        console.log(`${taskName} completed!`);
        callback();
    },5000);
}
dotask("Reading Book", ()=>{
    console.log("Now reading chapter 10");
});*/

//callback hell-nested callback logic
//promises
/*let order = new Promise((resolve, reject)=> {
    let isOverWorking = true;
    setTimeout(() => {
        if(isOverWorking){
            resolve("Order is ready");
        } else {
            reject("Order delay");
        }
    },3000);
});
order.then((message)=> console.log("Success: ",message)).catch((error)=> {console.log("Error: ",error);})*/


/*let order = new Promise((resolve, reject)=> {
    let isOverWorking = false;
    setTimeout(() => {
        if(isOverWorking){
            resolve("Order is ready");
        } else {
            reject("Order delay");
        }
    },3000);
});
order.then((message)=> console.log("Success: ",message)).catch((error)=> {console.log("Error: ",error);})*/

//Try Catch Finally
try{
    let result=10/0;
} catch(error){
    console.log(`Error: ${error}`);
} finally{
    console.log("Task completed");
}

//Async  /Await
function orderFunction(){
    let order = new Promise((resolve, reject)=> {
    let isOverWorking = false;
    setTimeout(() => {
        if(isOverWorking){
            resolve("Order is ready");
        } else {
            reject("Order delay");
        }
    },3000);
});
return order;
}
async function orderFood(){
    try{
         const orderStatus = await orderFunction();
         console.log(orderStatus);
    } catch(error){
        console.log(`Error: ${error}`);
    }
}

orderFood();