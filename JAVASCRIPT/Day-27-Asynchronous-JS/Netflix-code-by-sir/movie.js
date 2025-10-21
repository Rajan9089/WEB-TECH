
let form = document.querySelector('.movieForm');
let searchTerm = document.querySelector('.searchTerm')
let movieContainer = document.querySelector('.movieContainer')
form.addEventListener('submit', async (e) => {
    e.preventDefault()
    console.log(searchTerm.value);
    let url = `https://api.tvmaze.com/search/shows?q=${searchTerm.value}`;
    let res = await fetch(url)
    let data = await res.json()
    createUi(data)
    searchTerm.value = ""
})

function createUi(data) {
    movieContainer.innerHTML = ""
    console.log(data);
    data.forEach((el) => {

        if (el.show?.image?.medium) {  // optional chaining 
            let card = document.createElement('div')
            card.classList.add('movies');
            let img = document.createElement('img')
            img.src = el.show.image.medium;
            let title = document.createElement('h3')
            title.textContent = el.show.name
            let lang = document.createElement('p')
            lang.textContent = el.show.language;
            card.appendChild(img)
            card.appendChild(title)
            card.appendChild(lang)
            movieContainer.appendChild(card)

        }
    })
}

