const time = document.querySelector("time");

//Show time
Showtime=()=>{
	let today = new Date(),
	   hour= today.getHours();
	   min = today.getMinutes();
	   sec = today.getSeconds();

// Set AM or PM
const amPm= hour >= 12 ? "PM" : "AM";

// 12 hour format
hour = hour % 12 || 12;
time.innerHTML= `${hour}:${addZero(min)}:${addZero(sec)} ${amPm}`
setTimeout(Showtime, 1000);
}
// Add zero to the min and sec
addZero=(n)=>(n < 10 ? "0":"") + n;

Showtime();
