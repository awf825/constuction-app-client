import React, { useEffect, useState } from 'react'
import axiosInstance from '../../utilities/axios'
import { IProcurable } from "../../interfaces/IProcurable" 
import { Link, useParams } from 'react-router-dom';

const Procurables = (props: any) => {
    const routeParams = useParams();
    const [procurables, setProcurables] = useState<IProcurable[]>([])

    useEffect(() => {
        axiosInstance.get(`/api/v1/index_by_phase_id?phase_id=${routeParams.phase_id}`, {
            headers: { Authorization: `Bearer ${props?.userState?.accessToken}` }
        })
        .then(resp => { setProcurables(resp.data) })
        .catch(err =>{ console.log(err) })
    }, [])

    return (
        <div>
            {
                procurables?.map((procurable, i)=> {
                    return (
                        <ul key={i+1}>
                            <li>Id: {procurable.id}</li>
                            <li>Subcontractor: {procurable.subcontractor}</li>
                            <li>Name: {procurable.name}</li>
                            <li>PhaseId: {procurable.phase_id}</li>
                        </ul>
                    )
                })
            }
        </div>
    )
}

export default Procurables;