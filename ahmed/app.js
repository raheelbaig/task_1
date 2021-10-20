// --------------------question 1
const d = new Date();
console.log(d)
let day  = document.getElementById("day")

console.log(d.getDay())
switch (d.getDay()) {
    case 0:
        day.innerHTML = " sunday";
        break;
    case 1:
        day.innerHTML = " monday";
        break;
    case 2:
        day.innerHTML = " tuesday";
        break;
    case 3:
        day.innerHTML = " wednesday";
        break;
    case 4:
        day.innerHTML = " thursday";
        break;
    case 5:
        day.innerHTML = " friday";
        break;
    case 6:
        day.innerHTML = "sunday";
        break;
}
const time = document.getElementById("time");
let hour = d.getHours();
let minute =d.getMinutes();
let second = d.getSeconds();
time.innerHTML = `${hour}:${minute}:${second}`


// --------------------question 2

let q2date = document.getElementById("q2date"); 
let date2= d.getDate();
let month = d.getMonth();
let year = d.getFullYear();
q2date.innerHTML=`${month}-${date2}-${year} OR  ${date2}-${month}-${year} `

// --------------------question 3----------------------
let area=()=>{
 let base =+document.getElementById("base").value
 let height =+document.getElementById("height").value
 let areacal = document.getElementById("areacal");
 let cal = base * height/2;
 console.log(cal)
 areacal.innerHTML = cal;
 


}