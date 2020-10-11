
import { input, htmlArea } from './fetchCountries.js'
import { PNotifyAlert, PNotifyError } from './notifications.js'
import  renderHtmlFrom from './rendering.js'


const cleanHtml = () => {
    htmlArea.innerHTML = ""
  }
  
export const fetchCountries = () => {
    const searchText = input.value
    const searchQuery = `https://restcountries.eu/rest/v2/name/${searchText}`
    fetch(searchQuery)
    .then(response => {
      return response.json()
    })
    .then(data => {
      const length = data.length
      cleanHtml()
  
      if(length > 10) {
          return PNotifyAlert(length);
      }
  
      if (length > 0) {
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