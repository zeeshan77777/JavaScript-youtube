const myDate = new Date()
// console.log(myDate);
 

//+++These are all the different formats of writing a date+++//
/* console.log(myDate.toDateString()); 
 console.log(myDate.toISOString());
 console.log(myDate.toLocaleDateString());
 console.log(myDate.toJSON());
 console.log(myDate.toLocaleString());
 console.log(typeof  myDate);*/

// const myNewDate = new Date(2003, 5, 5); //we can also give our value so it displays it on the screen 
let myNewDate = new Date(2003, 5, 5, 6, 9); //along with date we can also give the value of time
// console.log(myNewDate.toLocaleString());

const myTimeStamp = Date.now(); //we use this when we want the time in milliseconds from Jan 1 1970 to today
// console.log(myTimeStamp); 

// console.log(myNewDate.getTime()); /it tells us the time from 1 jan 1970 t0o myNewDate
// console.log(Math.floor(myNewDate.getTime()/1000));

console.log(myNewDate.getDate()) //it tells the date in myNewDate
// console.log(myNewDate.getDays()) //it tells the day in myNewDate
console.log(myNewDate.getMonth()) //it tells the month in myNewDate
console.log(myNewDate.toLocaleString('default', {
    weekday: "short",
}));  //it is used to customize the format of toLocaleString and then we can display anything like date day or month etc



