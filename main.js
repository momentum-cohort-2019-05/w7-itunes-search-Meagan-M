let button = document.querySelector('#submit')
let input = document.querySelector('#search')
let output = document.querySelector('#output')
let cors = 'https://cors-anywhere.herokuapp.com/'

function handleClick(e) {
    document.querySelector('.player').src=e.target.dataset['url'];
    document.querySelector('.player').autoplay=true;
    document.querySelector('.currentSong').innerHTML=e.target.dataset['songname'];
}

button.addEventListener('click', (e) => {
    fetch(cors + 'https://itunes-api-proxy.glitch.me/search?term='+input.value)
    
    .then(response => response.json())
    .then(function (data) {
        let finalHTML = ''

        data.results.forEach( song => {
            finalHTML += `
            <div class ="col s4 m4 l4"> 
            <div class="card" style="width: 18rem;">
            <img src="${song.artworkUrl100}" 
            class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${song.artistName}</h5>
              <span>${song.trackName}</span>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <button onClick="handleClick(event)" class="btn btn-primary" data-songname="${song.trackName}" data-url="${song.previewUrl}">Listen</button>                        
            </div>
          </div>
          </div>
       `
    })
    
     output.innerHTML = finalHTML;
    //  document.querySelector('.btn.btn-primary').addEventListener('click', function(e) {
    //     console.log('clicked');
    //     console.log(e.target.dataset['url']);
    //     document.querySelector('.player').src=e.target.dataset['url'];
    // });
  })
.catch( error => console.log(error))
})