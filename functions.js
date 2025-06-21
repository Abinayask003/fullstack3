function hello(){
    console.log("Hello Js");
}
hello()

function add(a,b){
    console.log(a+b);
}
add(100,100);

function displayanotherfunction(func){
    func(100,100);
}
displayanotherfunction(add);

let varfunc=add;
varfunc(1,4);

let newfuncvar=function(){
    console.log("Variable Function");
};
newfuncvar();

const arrowfuncvar = () => {
    console.log("Arrow Function");
};
arrowfuncvar();