// https://www.omnicalculator.com/conversion/ml-tbsp-converter

const v =  document.getElementById('v');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const tbspRadio = document.getElementById('tbspRadio');
const mlRadio = document.getElementById('mlRadio');

let tbsp;
let ml = v; 

// labels of the inpust
const variable = document.getElementById('variable');

tbspRadio.addEventListener('click', function() {
  variable.textContent = 'ml';
  ml = v;
  result.textContent = '';
});

mlRadio.addEventListener('click', function() {
  variable.textContent = 'tbsp';
  tbsp = v;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(tbspRadio.checked)
    result.textContent = `tbsp = ${computetbsp().toFixed(5)}`;

  else if(mlRadio.checked)
    result.textContent = `ml = ${computeml().toFixed(5)}`;
})

// calculation

function computetbsp() {
  return Number(ml.value) / 14.787;
}

function computeml() {
  return Number(tbsp.value) * 14.787;
}