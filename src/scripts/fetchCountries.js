import * as debounce from 'lodash.debounce'
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";
import  { fetchCountries } from './fetching.js'

// variables
export const htmlArea = document.querySelector("#countries")
export const input = document.querySelector("#search")

input.addEventListener("input", debounce(fetchCountries, 500))
