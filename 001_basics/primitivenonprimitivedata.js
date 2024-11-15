//++++++++++++++++Primitive data types are stored in the stack so there copies value is being eddited ++++++++++++++++++++++
let a = 1;
let b = a;
console.log(a);
console.log(b);
b = 2;
console.log(b);

//+++++++++++++++++++++++++++++++++++++On the other hand the non primitive data types are being stored in the heap data structure
let obj1 = {
    Namee : "Ram",
    clss : "CSE"
}

let obj2 = obj1;
obj2.Namee = "Diksha"
console.log(obj2.Namee);
console.log(obj1.Namee);
