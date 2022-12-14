import React, { useEffect, useState } from 'react'
import axiosInstance from '../../utilities/axios'
import { IPhase } from "../../interfaces/IPhase" 
import { Link, useParams } from 'react-router-dom';
import Collapsible from '../widgets/Collapsible';

const Phases = (props: any) => {
    const routeParams = useParams();
    const [procurablesByPhase, setProcurablesByPhase] = useState<any>()
    const [phaseNames, setPhaseNames] = useState<string[]>([])

    useEffect(() => {
        axiosInstance.get(`/api/v1/index_procurables_phases_by_project_id?project_id=${routeParams.project_id}`, {
            headers: { Authorization: `Bearer ${props?.userState?.accessToken}` }
        })
        .then(resp => { 
            //debugger
            console.log(resp.data)
            // setPhaseNames(Object.keys(resp.data))
            setProcurablesByPhase(resp.data) 
        })
        .catch(err =>{ console.log(err) })
    }, [])

    return (
        <div>
            {
                procurablesByPhase && Object.keys(procurablesByPhase).map((pbp, i) => {
                    const nested = procurablesByPhase[pbp]
                    return (
                        <div key={i}>
                            <Collapsible
                                title={pbp}
                            >
                                {
                                    nested.map((nest: any) => {
                                        return (
                                            <div>
                                                <Collapsible
                                                    title={nest.name}
                                                >
                                                    <ul>
                                                        <li>{nest.created_at}</li>
                                                        <li>{nest.account_id}</li>
                                                        <li>{nest.division_id}</li>
                                                        <li>{nest.id}</li>
                                                        <li>{nest.subcontractor}</li>
                                                        <li>{nest.updated_at}</li>
                                                    </ul>
                                                </Collapsible>
                                            </div>
                                        )
                                    })
                                }
                            </Collapsible>
                        </div>

                    )
                })
            }
        </div>
    )
}

export default Phases;