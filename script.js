$(document).ready(function(){
$.ajax({
url:"https://api.openweathermap.org/data/2.5/weather?q=Bengaluru&appid=a39390263e83e1d9ba48adb398efd710&units=metric"
}).done(function(data){
console.log(data)
$(".cityname").html(data.name)
$(".temp").html(data.main.temp)
});
{)
