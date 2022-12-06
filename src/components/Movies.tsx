import React, { useEffect, useState } from 'react'
import axios from 'axios'

interface IMovie {
    name: string,
    genre: string,
    year: number
}

const Movies = () => {
    const [movies, setMovies] = useState<IMovie[]>([])

    useEffect(() => {
        // axios.get("https://still-mountain-45465.herokuapp.com/api/movies")
        axios.get(`${process.env.REACT_APP_API_URL}/api/v1/movies`)
        .then(resp => {
          console.log(resp)
          setMovies(resp.data)
        })
        .catch(err =>{
          console.log(err)
        })
    }, [])

    return (
        <div>
            {
                movies && movies.map((movie, i) =>
                    <ul key={i}>
                    <li>{movie.name}</li>
                    <li>{movie.genre}</li>
                    <li>{movie.year}</li>
                    </ul>
                )
            }
        </div>
    )
}

export default Movies;