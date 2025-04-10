
const clock = document.getElementById('clock');
       
setInterval(function(){
    // second method to solve it 
    let date = new Date();
    console.log(date.toLocaleString());
    clock.innerHTML=date.toLocaleString();

},1000)