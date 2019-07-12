function q (sel) {
    return document.querySelector(sel)
  }
  
function qs (sel) {
    return document.querySelectorAll(sel)
  }


function displayMusicData (data) {
const songList = document.createElement('div')
songList.classList.add('planet', 'ba', 'bw2', 'purple')
songList.innerHTML = `
    <h3>${artist.name}</h3>
    <p>Population: ${artist.song}</p>
    <p>Climate: ${artist.album}</p>
    <button class="get-song-data" data-url="${song.url}">Find out more about ${artist.name}</button>
`
return songList
}
// code for player
// function displayMusicData (results) {
// fetch(results)
//     .then(res => res.json())
//     .then(function (data) {
//     const dataDisplay = q('#artist')
//     dataDisplay.innerHTML = `
//         <h3>More info about ${data.artist}</h3>
//         <dl>
//         <dt>album</dt>
//         <dd>${data.album}</dd>
//         </dl>
//     `
//     })
// }


document.addEventListener('DOMContentLoaded', function () {
    fetch('https://itunes-api-proxy.glitch.me/search?term=Radiohead&entity=song')
// returns the data to you as a JS object
        .then(function (response) {
// return response.json also returns a promise
            return response.json()
        })
// takes JS object and does things with it
        .then(function(data) {
           console.log(data);
             //return 'something here'
        })
})
// submits artist input when search button is pressed. preventDefault stops the page from reloading when the submit button is pressed. 
// document.querySelector('#artist').addEventListener('click', function(event.preventDefault()))
 
/*************************************************************************
 * ******* getting information from submit field
 * 
 * 
 * document.addEventListener('DOMContentLoaded', function() {
 *  q('form).addEventListener('submit'), function (event) {
    * event.preventDefault()
    * const searchTerm = q('#submit').value
    * const url = '}'
 * 
 *  fetch(url)
 *      .then(response => response.json())
 *      .then(function (data) {
 *          resultsDiv.innerHTML = ''
 *          for (let )
 * }
 * }})
 * 
 * function planetNode in examples  will display selected information when a search is submitted. 
 * 
 * 
 */

// data.results