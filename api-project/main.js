import './style.css'

const DOMSelectors = {
    SSB: document.getElementById("SSB"),
    SM: document.getElementById("SM"),
    LOZ: document.getElementById("LOZ"),
    SPL: document.getElementById("SPL"),
    MSS: document.getElementById("MSS"),
    amiibos: document.getElementById("likeTheActualAmiibos"),
}

const amiiboSerieses = {
    SSB: "0x00",
    SM: "0x01",
    LOZ: "0x09",
    SPL: "0x04",
    MSS: "0x0E",

}

const URL = "https://amiiboapi.com/api/amiibo/?amiiboSeries="


async function fartyMcFartster(URL) {
    try {

        const response = await fetch(URL);
        const data = await response.json();

        data.amiibo.forEach(x =>

            DOMSelectors.amiibos.insertAdjacentHTML("beforeend",
                `
                <div class="wholeThing">
                <img src="${x.image}" alt="Image of ${x.name}" class="theImage">
      
                <div class="nameAndStuff">
                <h1> ${x.name} </h1>
     

      <div class= "bio">
      <h2>Game: ${x.gameSeries} </h2>
      <h2>Release in NA: ${x.release.na} </h2>
      <h2>Release in JP: ${x.release.jp} </h2>
      <h2>Release in EU: ${x.release.eu} </h2>
      <h2>Release in AU: ${x.release.au} </h2>
      
      </div>
      </div>
      </div>
      `
            )
        )


    } catch (error) {
        console.log(`${error}`)
    }
}

function clearData() {
    DOMSelectors.amiibos.innerHTML = ""
}


DOMSelectors.SSB.addEventListener("click", function () {

    clearData();
    fartyMcFartster(`${URL}${amiiboSerieses.SSB}`)

})
DOMSelectors.SM.addEventListener("click", function () {

    clearData();
    fartyMcFartster(`${URL}${amiiboSerieses.SM}`)

})
DOMSelectors.LOZ.addEventListener("click", function () {

    clearData();
    fartyMcFartster(`${URL}${amiiboSerieses.LOZ}`)

})
DOMSelectors.SPL.addEventListener("click", function () {

    clearData();
    fartyMcFartster(`${URL}${amiiboSerieses.SPL}`)

})
DOMSelectors.MSS.addEventListener("click", function () {

    clearData();
    fartyMcFartster(`${URL}${amiiboSerieses.MSS}`)

})