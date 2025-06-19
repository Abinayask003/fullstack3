let fruits =["apple","mango","grapes"];
console.log("Original Array");
console.log(fruits);


fruits.push("kiwi");
console.log("array after push operation");
console.log(fruits);


//pop and print add or dlt elements at last

fruits.pop();
console.log("array after pop operation");
console.log(fruits);


console.log("Accessing elements");
console.log(fruits[0]);
let size=fruits.length;
console.log(fruits[size-1]);


console.log("array after unshift operation");
fruits.unshift("cherry");
console.log(fruits);


console.log("array after shift operation");
fruits.shift();
console.log(fruits);

//dlting element at center
console.log("array after slice operation");
fruits.slice(1,1);
console.log(fruits)


console.log("Accessing elements using for loop");
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i])
}