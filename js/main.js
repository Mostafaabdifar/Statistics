let active = document.getElementById('active');
let criticalPerson = document.getElementById('critical');
let recovered = document.getElementById('recovered');
let totalDeaths = document.getElementById('total-deaths');
let totalTest = document.getElementById('total-test');
let totalCase = document.getElementById('total-case');
const url='https://corona.lmao.ninja/v2/countries/iran';

function getData(){
  fetch(url)
  .then(response => response.json())
  .then(data => {
    const {
      cases,
      todayRecovered,
      todayCases,
      todayDeaths,
      critical,
      tests  
    } = data;
    active.innerHTML = todayCases;
    criticalPerson.innerHTML = critical;
    recovered.innerHTML = todayRecovered;
    totalDeaths.innerHTML = todayDeaths;
    totalTest.innerHTML = tests;
    totalCase.innerHTML = cases;
  })
}
getData();
