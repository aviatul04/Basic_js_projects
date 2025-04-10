const form = document.querySelector('form')
form.addEventListener('submit',function(e){
    e.preventDefault()

const h=parseInt(document.querySelector('#height').value)
const w=parseInt(document.querySelector('#weight').value)
const result = document.querySelector('#result')

if(h==='' || h<0){
    result.innerHTML = "Please give a valid height ";
}else if(w==='' || w<0 ){
    result.innerHTML = "Please give a valid weight";
}else{
    const bmi = (w/((h*h)/10000)).toFixed(2);

    result.innerHTML=`<span>${bmi}</span>`;
}

})