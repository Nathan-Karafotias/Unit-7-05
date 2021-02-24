let age = 0
let day = ""

document.getElementById('check').addEventListener('click',buttonon) 

function buttonon() {
  age = document.getElementById('input').value
  day = document.getElementById('input2').value

  if  ((day == "monday" || day == "tuesday" || day == "wednesday" || day == "thursday" || day == "friday") && (age < 18 )) { 
  document.getElementById('answer').innerHTML = "Time for school!"
 } else if ((day == "monday" || day == "tuesday" || day == "wednesday" || day == "thursday" || day == "friday") && (age > 18 )){
  document.getElementById('answer').innerHTML = "Time for work"
 } else {
  document.getElementById('answer').innerHTML = "Time to relax, ITS THE WEEKEND"
 }
}