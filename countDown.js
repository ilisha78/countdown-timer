let day= document.getElementById("day");
let hour= document.getElementById("hour");
let mint= document.getElementById("min");
let secs= document.getElementById("sec");

//my initial thoughts....lol
// let now=new Date();
// let h=now.getHours();
// let m=now.getMinutes()
// let d= now.getDate();
// let s= now.getSeconds();
// console.log(h , d,m,s);

// let then= new Date("2024-08-07");
// let hr=then.getHours();
// let min=then.getMinutes();
// let dy= then.getDate();
// let sec= then.getSeconds();
// console.log(hr , min , dy , sec);

// let disHr= hr-h;
// console.log(disHr);  

let then= new Date("07 Aug, 2024 00:05:00").getTime();

let timer= setInterval(()=>{
let now= new Date().getTime();
let diff= then-now;

let dy= Math.floor( diff / (24*60*60*1000));
let hr= Math.floor(( diff % (24*60*60*1000))/ (1000*60*60)); 
let min= Math.floor(( diff % (60*60*1000))/ (1000*60)); 
let sec= Math.floor(( diff % (60*1000))/ 1000); 
// console.log( dy, hr, min, sec)

day.innerHTML=dy;
hour.innerHTML=hr;
mint.innerHTML=min;
secs.innerHTML=sec;

},1000)

