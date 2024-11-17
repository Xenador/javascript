let mydate = new Date();
console.log(mydate.toDateString());
console.log(mydate.toLocaleString());
let myCreatedDate = new Date(2023,0,1,23,3)
console.log(myCreatedDate.toLocaleString());
console.log(Math.floor(Date.now()/1000))