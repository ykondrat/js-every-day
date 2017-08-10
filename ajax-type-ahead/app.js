const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = [];

fetch(endpoint)
    .then(blob => blob.json())
        .then(data => cities.push(...data));

function findMatches(wordToMatch, cities) {
    return (cities.filter(place => {
        const regex = new RegExp(wordToMatch, 'gi');
        return place.city.match(regex) || place.state.match(regex)
    }));
}

function dispayMatches() {
    const matchArray = findMatches(this.value, cities);
    const html = matchArray.map(place => {
        const regex = new RegExp(this.value, 'gi');
        const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
        return `
        <li>
            <span> ${cityName}, ${place.state}</span>
            <span> ${place.population} </span>
        </li>
            `; 
    }).join('');
    suggestions.innerHTML = html;   
}

const searchInput = document.querySelector('.search-input');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', dispayMatches);
searchInput.addEventListener('keyup', dispayMatches);