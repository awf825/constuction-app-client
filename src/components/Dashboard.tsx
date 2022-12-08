import React, { useEffect, useState } from 'react'
import axios from 'axios'

interface IMovie {
    name: string,
    genre: string,
    year: number
}

const Dashboard = () => {
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
            <p>This is the dashboard</p>
        </div>
    )
}

export default Dashboard;