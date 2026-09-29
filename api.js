
export function nowPlaying() {
    return fetch("https://api.themoviedb.org/3/movie/now_playing", {
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NDM1MTU3MjFmOTg4OWY5NThhOGI4MzQzMTlhNWZhNiIsIm5iZiI6MTc5MDU4MTUwMC4wODMwMDAyLCJzdWIiOiI2YWJhMWFmY2JiMzA3MjI2ZjFmMmFiYzciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.2fg7TRlre-ehFZZNbJT13AZAlcoApGSO4ZNU0iN-W6c'
        }
    })
        .then(response => response.json())
        .then(data => data)
}


export function popular() {
    return fetch("https://api.themoviedb.org/3/movie/popular", {
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NDM1MTU3MjFmOTg4OWY5NThhOGI4MzQzMTlhNWZhNiIsIm5iZiI6MTc5MDU4MTUwMC4wODMwMDAyLCJzdWIiOiI2YWJhMWFmY2JiMzA3MjI2ZjFmMmFiYzciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.2fg7TRlre-ehFZZNbJT13AZAlcoApGSO4ZNU0iN-W6c'

        }
    })
        .then(response => response.json())
        .then(data => data)
}