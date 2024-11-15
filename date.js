function d(){
let date = new Date();
console.log(date.toDateString())
date.setDate(date.getDate()-45);
console.log(date.toDateString());
console.log(date.getFullYear());
console.log(d)

}
d();