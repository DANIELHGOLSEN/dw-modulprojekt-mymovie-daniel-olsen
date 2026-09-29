let rootElm = document.querySelector("#root")

import { popular } from "./api.js"
let popularMovies = []

import { nowPlaying } from "./api.js"
let nowPlaying = []

function render() {
    console.log(popularMovies);

}
function init() {
    popular()
        .then(data => {
            popularMovies = data.results
            render()
        })
}
init()