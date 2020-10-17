import './styles.scss';

import * as debounce from 'lodash.debounce'
import  fetchCountries  from './scripts/fetchCountries'
import { input, displayResults } from './scripts/rendering'
import invalidString from './scripts/validate_input'


const searchCountry = (data) => {
    const name = data.target.value
    //don't allow strings with only spaces
    //should we do validation in HTML ?
    if(invalidString(name)) {
        return
    }
    fetchCountries(name)
    .then(displayResults)
    .catch(console.log);

  }

input.addEventListener("input", debounce(searchCountry, 500))
