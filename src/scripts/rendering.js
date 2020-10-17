import { PNotifyAlert, PNotifyError } from './notifications.js'


export const htmlArea = document.querySelector("#countries")
export const input = document.querySelector("#search")


const showLanguagesFrom = (array) => {
    const languages = array.map(language => language.name)
    return languages
  }
  
const wikipediaLinkFrom = (countryName) => {
    return `https://en.wikipedia.org/wiki/${countryName}`
  }
const displaySingleCountry = (data) => {
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
  const displayMultipleCountries = (data) => {
    const countriesList  = document.createElement('ul')
    countriesList.className = "countries__list";
    data.forEach(country => {
      const p = document.createElement('li')
      p.className = 'countries__item'

      const a = `<a href="${wikipediaLinkFrom(country.name)}" target="_blank">${country.name}</a>`
      p.innerHTML = a
      countriesList.appendChild(p)
    })
    htmlArea.appendChild(countriesList)
    return data
  }

export const displayResults = (data) => {

    const length = data.length
    //clean html
    htmlArea.innerHTML = ""

    //send notificationstatus
    if(length > 10) {
        return PNotifyAlert(length);
    }

    if(data.status == 404) {
      PNotifyError()
    }

    if (length > 2 && length < 10) {
      return displayMultipleCountries(data)
    }

    if (length == 1) {
      return displaySingleCountry(data)
    }


}
