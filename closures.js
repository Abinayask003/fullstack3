//closures
function outer(){
    let count = 5;
    return function inner(){
        count++;
        console.log(`Count: ${count}`);
    };
}
const counter = outer();
counter();
counter();