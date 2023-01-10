import './style.css'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'

const URL = "https://bible-api.com/BOOK+CHAPTER:VERSE"


async function getData(URL) {
    try {
        const response = await fetch(URL)
        const data = await response.json() //makes data into JSON object we can use
        document.getElementById("api-response").textContent = data.content;
    } catch (error) {
        console.log(error);
    }
}
getData(URL);