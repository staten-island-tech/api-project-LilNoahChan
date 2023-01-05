import './style.css'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'

const URL = "https://rickandmortyapi.com/"

async function(URL) (
    try {
        const response = await fetch(URL)
        const data = await response.json()
        document.body.innerHTML = data
    } catch (error) {
        console.log(error)
    }
)