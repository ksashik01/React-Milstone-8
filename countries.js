

const loadCountries = () =>{

fetch('https://restcountries.com/v3.1/all')
.then(res => res.json())
.then (data => displayCountries(data));

}


const displayCountries = countries =>{

console.log (countries);

const CountriesHTML= countries.map (country=>getCountryHTML(country));


const container = document.getElementById ('countries');
container.innerHTML =  CountriesHTML.join(' ');


}

const getCountryHTML= ({name,flags,area,timezones}) =>{

 return`
 
<div class="country">
 
<h2>${name.common} </h2>
<p>${area} </p>
<p>Time-Zone:${timezones} </p>
<img src="${flags.png}" alt="">

</div>
 
 
 `


}



loadCountries()