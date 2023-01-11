import './style.css'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'

const URL = "https://bible-api.com/BOOK+CHAPTER:VERSE"


async function getData(URL) {
    try {
        const response = await fetch(URL)
        const data = await response.json(); 
        console.log(data.data);
        console.log (response);
        return data;
    } catch (error) {
        console.log(error);
    }
}
getData(URL);