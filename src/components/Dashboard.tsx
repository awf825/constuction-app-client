import React, { useEffect, useState } from 'react'
import axiosInstance from '../utilities/axios'
import { IProject } from "../interfaces/IProject" 
import { Link } from 'react-router-dom';
import { useAuth } from "../hooks/useAuth";

const Dashboard = (props: any) => {
    const [projects, setProjects] = useState<IProject[]>([])
    const jwt = props?.userState?.accessToken;
    const user = useAuth(jwt)

    useEffect(() => {
        axiosInstance.get(`/api/v1/projects`, {
            headers: {
                Authorization: `Bearer ${jwt}`,
                "Content-Type": "application-json"
            }
        })
        .then(resp => {
          setProjects(resp.data)
        })
        .catch(err =>{
          console.log(err)
        })
    }, [])

    return (
        <div>
            <h2>Welcome User #{user?.user_id}</h2>
            {
                projects?.map((project, i)=> {
                    return (
                        <ul key={i+1}>
                            <li>Id: {project.id}</li>
                            <li>Name: <Link to={`/phases/${project.id}`}>{project.name}</Link></li>
                            <li>User_id: {project.user_id}</li>
                        </ul>
                    )
                })
            }
        </div>
    )
}

export default Dashboard;