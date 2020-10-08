const debounce = require('lodash.debounce');
import { alert, notice, info, success, error, defaultModules } from'@pnotify/core';
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";

const PNotifyWarning = (number) => alert({
        text: `Найдено ${number} стран, укажите более конкретное название`
  });


const PNotifyError = () => error({
  text: "Ничего не найдено"
});

const PNotifySuccess = (number) => success({
  text: `Найдено стран: ${number} `
});
  

const htmlArea = document.querySelector("#countries")
const input = document.querySelector("#search")

const showLanguagesFrom = (array) => {
  const languages = array.map(language => language.name)
  return languages
}

const renderHtmlFrom = (data) => {
  let html = ""
  data.forEach(country => {
  html +=
    `<div class="country">
      <div class="row">
          <div class="col-sm-6">
            <img class="country__flag" src="${country.flag}" alt="${country.name}" />
          </div>
          <div class="col-sm-6">
            <div class="country__name">${country.name}</div>
            <div class="country__capital">Capital: ${country.capital}</div>
            <div class="country__population">Population: ${country.population}</div>
            <div class="country__languages">Languages: ${showLanguagesFrom(country.languages)} </div>
          </div>
      </div>
    </div>`
  })
  htmlArea.innerHTML = html
  return data
}
const cleanHtml = () => {
  htmlArea.innerHTML = ""
}

const fetchCountries = (userInput) => {
  const searchText = input.value
  const searchQuery = `https://restcountries.eu/rest/v2/name/${searchText}`
  fetch(searchQuery)
  .then(response => {
    // console.log(response.status)
    return response.json()
    //response handling
  })
  .then(data => {
    const length = data.length
    //clean current html
    cleanHtml()


    if(length > 10) {
        return PNotifyWarning(length);
    }

    if (length > 0) {
        PNotifySuccess(length)
        return renderHtmlFrom(data)
    }


    if(data.status == 404) {
      PNotifyError()
    }

})
  .catch(error => {
    console.log(error)
  });

}
input.addEventListener("input", debounce(fetchCountries, 5000))
