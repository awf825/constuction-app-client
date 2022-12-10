import React, { useEffect, useState } from 'react'
import axiosInstance from '../../utilities/axios'
import { IPhase } from "../../interfaces/IPhase" 
import { Link, useParams } from 'react-router-dom';

const Phases = (props: any) => {
    const routeParams = useParams();
    const [phases, setPhases] = useState<IPhase[]>([])

    useEffect(() => {
        axiosInstance.get(`/api/v1/index_by_project_id?project_id=${routeParams.project_id}`, {
            headers: { Authorization: `Bearer ${props?.userState?.accessToken}` }
        })
        .then(resp => { setPhases(resp.data) })
        .catch(err =>{ console.log(err) })
    }, [])

    return (
        <div>
            {
                phases?.map((phase, i)=> {
                    return (
                        <ul key={i+1}>
                            <li>Id: {phase.id}</li>
                            <li>Name: <Link to={`/procurables/${phase.id}`}>{phase.name}</Link></li>
                            <li>ProjectId: {phase.project_id}</li>
                        </ul>
                    )
                })
            }
        </div>
    )
}

export default Phases;