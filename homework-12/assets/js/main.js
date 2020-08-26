let currentPage = 1;

document.addEventListener('DOMContentLoaded', ()=>{
    fillFilmsSelect().then(renderFilmsSelect);
    let part;
    document.querySelector('#filmsSelect').addEventListener('change', ()=>{
        part = +document.querySelector('#filmsSelect').value;
    })

    document.querySelector('#getInfoButton').addEventListener('click', ()=>{
        if(!part) {
            alert('Choose a part')
            return
        }
        showIntro(part)
        setTimeout(() => {
            document.querySelector('.episode-description').click()
        }, 60000);
    })

    document.querySelector('#getCharacters').addEventListener('click', ()=>{
        if(!part) {
            alert('Choose a part')
            return
        }
        getCharacters(part).then(renderCharacters)
    })
    document.querySelector('#getPlanets').addEventListener('click', ()=>{
        getPlanets().then(renderPlanets);
    })
})

const fillFilmsSelect = () =>{
    return sendRequest(`https://swapi.dev/api/films/`)
    .then(res => res.results.map(film => `<option value='${film.episode_id}'>${film.title}</option>`).join(''))
}

const renderFilmsSelect = (films) =>{
    document.querySelector('#filmsSelect').innerHTML = `
        <option selected>Choose a film</option>
        ${films}
    `
}

const getPlanets = (planetsPage = 1) =>{
    return sendRequest(`https://swapi.dev/api/planets/?page=${planetsPage}`)
    .then(res => res.results.map(planet => `<li class="list-group-item">${planet.name}</li>`).join(''))
}

const renderPlanets = (planets) =>{
    document.querySelector('#output').innerHTML = `
    <div class='col-12 d-flex justify-content-center align-items-center flex-column'>
        <ul class="list-group">
            ${planets}
        </ul>
        <div class="btn-group text-center" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-outline-warning" id='prevPlanet'>Prev</button>
            <button type="button" class="btn btn-outline-warning" id='nextPlanet'>Next</button>
        </div>
    </div>
    `
    
    document.querySelector('#prevPlanet').addEventListener('click', ()=>{
        if(currentPage < 2){
            currentPage = 2
            console.log('That`s a first page')
        }
        getPlanets(--currentPage).then(renderPlanets);
    })
    document.querySelector('#nextPlanet').addEventListener('click', ()=>{
        sendRequest('https://swapi.dev/api/planets/').then(res => {
            const pagesCount = res.count/10;
            if( currentPage < pagesCount){
                getPlanets(++currentPage).then(renderPlanets);
            }
            else{
                console.log('That`s a last page')
            }
        })
    })
}

const showIntro = (film) =>{
    return sendRequest(`https://swapi.dev/api/films/${film}/`)
    .then(res => {
        document.querySelector('.content__block').classList.add('d-none');
        document.querySelector('footer').classList.add('d-none');
        document.querySelector('#episodeBlock').classList.remove('d-none');
        document.querySelector('#episodeName').innerText = res.title.toLowerCase();
        document.querySelector('#episodeNumber').innerText = `Episode ${romanize(res.episode_id)}`;
        document.querySelector('#episodeText').innerText = res.opening_crawl.toLowerCase();
        let audio = new Audio('./assets/music/main_theme.mp3');
        audio.play()
        document.addEventListener('click', ()=>{
            document.querySelector('#episodeBlock').classList.add('d-none');
            audio.pause()
            document.querySelector('.content__block').classList.remove('d-none');
            document.querySelector('footer').classList.remove('d-none');
        })
    })
    .catch(console.log())
}

const getCharacters = (film) =>{
    return sendRequest(`https://swapi.dev/api/films/${film}/`)
    .then(res => httpToHttps(res.characters).map(sendRequest))
    .then(res => Promise.all(res))
    .then(res => res.map(el => {
        return {
            name: el.name,
            birthYear: el.birth_year,
            gender: el.gender,
            imgPath: `./assets/img/${checkGender(el.gender)}.png`
        }
    }))
    .catch(console.log())
}

const httpToHttps = (urlArray) =>{
    return urlArray.map(el =>{
        let http = el.slice(0,4)
        let url = el.slice(4)
        if(url[0] === 's'){
            return el;
        }
        else{
            return`${http}s${url}`
        }
    })
}

const checkGender = (gender) => {
    if(gender === 'n/a' || gender === 'none'){
        return 'robot'
    }
    else{
        return gender;
    }
}

const renderCharacters = (array) =>{
    document.querySelector('#output').innerHTML = array.map(element => {
        return `<div class='col-xs-12 col-sm-6 col-md-3 text-center character-card card'>
        <div class='card-body'>
        <img class="card-img-top" src='${element.imgPath}'>

            <h2>${element.name}</h2>
            <h3>Year: ${element.birthYear}</h3>
        </div>
        </div>`
    }).join('');
}

const sendRequest = (url) =>{
    return fetch(url)
    .then(res => res.json())
    .catch(console.log)
}

const romanize = (num)=> {
    if (isNaN(num))
        return NaN;
    var digits = String(+num).split(""),
        key = ["","c","cc","ccc","cd","d","dc","dcc","dccc","cm",
               "","x","xx","xxx","xl","l","lx","lxx","lxxx","xc",
               "","i","ii","iii","iv","v","vi","vii","viii","ix"],
        roman = "",
        i = 3;
    while (i--)
        roman = (key[+digits.pop() + (i * 10)] || "") + roman;
    return Array(+digits.join("") + 1).join("m") + roman;
}