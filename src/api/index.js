import axios from "axios";

const THE_MOVIE_API_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZmFkNWRmYTM3NTc2NGVmMzcwN2MzNmYyNDgyNWNkMiIsIm5iZiI6MTczODQ3MTAyMC4wMzQsInN1YiI6IjY3OWVmNjZjMTc0MmI0NGExNGNiNTkzMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6HpiT8QOzyyNuvup1ReU4wXmOh0DP8N0dTKbbrdIw_0'

export const movieAPIInstance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        Authorization: `Bearer ${THE_MOVIE_API_TOKEN}`
    },
    responseType: 'json'
})