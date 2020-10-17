import { htmlArea } from './rendering.js'

export default function invalidString (name) {
    // invalid if contains only spaces
    if(!name.trim()) {
        console.log("name is empty")
        htmlArea.innerHTML = ""
        return true
    } 
    else {
        return false
    }
}
