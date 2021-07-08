import './css/styles.css';
import countryListTmp from './templates/country-list.hbs'
import countryTmp from './templates/country.hbs'
const DEBOUNCE_DELAY = 300;

const refs = {
    input: document.querySelector('#search-box'),
    countryList: document.querySelector('.country-list'),
    countryInfo: document.querySelector('.country-info')
}


refs.input.addEventListener('input', () => {
    const countryToFind = refs.input.value
     fetchCountries(countryToFind)

})

function fetchCountries(name) {
    fetch(`https://restcountries.eu/rest/v2/name/${name}?fields=name;capital;population;flag;languages`)
        .then(country => country.json())
        .then(country => {
            console.log(country)
            if (country.length !== 1) {
                refs.countryInfo.innerHTML = ''
                const markup = countryListTmp(country)
                refs.countryList.innerHTML = markup
            }
            if (country.length === 1) {
                 refs.countryList.innerHTML =''
                const markup = countryTmp(country)
                refs.countryInfo.innerHTML = markup
            }
        })
        .catch(error => console.log(error))
}

