let active = document.getElementById('active');
let criticalPerson = document.getElementById('critical');
let recovered = document.getElementById('recovered');
let totalDeaths = document.getElementById('total-deaths');
let totalTest = document.getElementById('total-test');
let totalCase = document.getElementById('total-case');
let msg = document.querySelector('.msg');
let nameCountry = document.getElementById('country-name');
const selectInput = document.getElementById('input');
const submit = document.querySelector('.search-btn')

submit.addEventListener('click', e => {
  e.preventDefault();
  let country = selectInput.value;
  validation(country);
  getData(country);
})

function validation(el){
  if(el === ""){
    msg.textContent = "Please Enter a country"
  }else if(el.length < 2){
    msg.textContent ="country should have 2 character or greater than";
  }else {
    msg.textContent= "";
    return el;
  }
}  

function getData(country) {
  let url = `https://corona.lmao.ninja/v2/countries/${country}`;
  fetch(url)
    .then((response) => {
      if (response.ok){
        return response.json();
      }else{
        throw ("Country not found or doesn't have any cases");
      }
    })  
    .then(data => {
      const {
        country,
        cases,
        todayRecovered,
        todayCases,
        todayDeaths,
        critical,
        tests
      } = data;
      nameCountry.innerHTML = country;
      active.innerHTML = todayCases;
      criticalPerson.innerHTML = critical;
      recovered.innerHTML = todayRecovered;
      totalDeaths.innerHTML = todayDeaths;
      totalTest.innerHTML = tests;
      totalCase.innerHTML = cases;
    })
    .catch((error) => {
      msg.textContent = error;
    });
}

module.exports = getData;