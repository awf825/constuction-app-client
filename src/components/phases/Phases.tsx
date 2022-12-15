import React, { useEffect, useState } from 'react'
import axiosInstance from '../../utilities/axios'
import { IPhase } from "../../interfaces/IPhase" 
import { Link, useParams } from 'react-router-dom';
import Collapsible from '../widgets/Collapsible';
import ProcurablesTable from '../tables/ProcurablesTable';

const Phases = (props: any) => {
    const routeParams = useParams();
    const [procurablesByPhase, setProcurablesByPhase] = useState<any>()

    useEffect(() => {
        axiosInstance.get(`/api/v1/index_procurables_phases_by_project_id?project_id=${routeParams.project_id}`, {
            headers: { Authorization: `Bearer ${props?.userState?.accessToken}` }
        })
        .then(resp => { 
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
                                                    title={nest.procurable_name}
                                                >
                                                    <ProcurablesTable data={nest}/>
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