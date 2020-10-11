import { htmlArea } from './fetchCountries.js'

const showLanguagesFrom = (array) => {
    const languages = array.map(language => language.name)
    return languages
  }
  
const moreInfoAbout = (countryName) => {
    return `https://en.wikipedia.org/wiki/${countryName}`
  }
export default function renderHtmlFrom (data) {
    let html = ""
    data.forEach(country => {
    html +=
      `<div class="country">
        <div class="row">
            <div class="col-sm-6">
              <img class="country__flag" src="${country.flag}" alt="${country.name}" />
            </div>
            <div class="col-sm-6">
              <h2 class="country__name">${country.name}</h2>
              <div class="country__capital">Capital: ${country.capital}</div>
              <div class="country__population">Population: ${country.population}</div>
              <div class="country__languages">Languages: ${showLanguagesFrom(country.languages)} </div>
              <div class="country__more"><a href="${moreInfoAbout(country.name)}" target="_blank">More info</a></div>
            </div>
        </div>
      </div>`
    })
    htmlArea.innerHTML = html
    return data
  }