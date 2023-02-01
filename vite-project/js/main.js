import '../style.css'

 
const DOMSelectors = {
form: document.getElementById('form'),
search: document.getElementById('search'),
result:document.getElementById('result'),
}


const apiURL = 'https://api.lyrics.ovh';




DOMSelectors.form.addEventListener('submit', no => {
    no.preventDefault();
    const searchValue = DOMSelectors.search.value.trim()

    if (!searchValue) {
        alert("no results")
    }
    else {
        searchSong(searchValue)
    }
})



async function searchSong(searchValue) {
    const searchResult = await fetch(`${apiURL}/suggest/${searchValue}`)
    const data = await searchResult.json();


    showData(data)
}



function showData(data) {

    result.innerHTML = `
    <ul class="song-list">
      ${data.data
            .map(song => `<li>
                    <div>
                        <img src="${song.artist.picture}" alt="${song.title} by ${song.artist.name} Cover">
                        <strong>${song.artist.name}</strong> - ${song.title} 
                    </div>
                    
                </li>`
            )
            .join('')}
    </ul>
  `;
}
