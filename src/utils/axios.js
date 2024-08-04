import axios from "axios";

const instance = axios.create({
     baseURL: "https://api.themoviedb.org/3",
     headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NmUxYmEwZGVjNGI1N2QzZmY5ZGM5ZDU5MTEyYjVmZCIsIm5iZiI6MTcyMjQ5MzA1Mi41NjE5NjksInN1YiI6IjY2Mzg4MzAwYjc2Y2JiMDEyOTYyNmZmYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.c6XTIGUPDy5dBR2bvMyr2BfmSx0e9pwPHF26noAnWgY'
      }
})
export default instance