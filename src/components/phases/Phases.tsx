import React, { useEffect, useState } from 'react'
import axiosInstance from '../../utilities/axios'
import { IPhase } from "../../interfaces/IPhase" 
import { Link, useParams } from 'react-router-dom';
import Collapsible from '../widgets/Collapsible';

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
            <Collapsible
                title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            >
                Consectetur adipiscing elit pellentesque habitant morbi tristique.
                Pulvinar pellentesque habitant morbi tristique. Vel quam elementum
                pulvinar etiam. Pulvinar pellentesque habitant morbi tristique senectus
                et netus et. Elementum integer enim neque volutpat. Faucibus in ornare
                quam viverra orci sagittis. Amet volutpat consequat mauris nunc congue
                nisi vitae suscipit. Dui accumsan sit amet nulla. Proin sagittis nisl
                rhoncus mattis. Enim nulla aliquet porttitor lacus. Arcu odio ut sem
                nulla pharetra diam sit amet. Gravida rutrum quisque non tellus orci ac
                auctor augue
            </Collapsible>
            <hr />
            <Collapsible
                title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            >
                Consectetur adipiscing elit pellentesque habitant morbi tristique.
                Pulvinar pellentesque habitant morbi tristique. Vel quam elementum
                pulvinar etiam. Pulvinar pellentesque habitant morbi tristique senectus
                et netus et. Elementum integer enim neque volutpat. Faucibus in ornare
                quam viverra orci sagittis. Amet volutpat consequat mauris nunc congue
                nisi vitae suscipit. Dui accumsan sit amet nulla. Proin sagittis nisl
                rhoncus mattis. Enim nulla aliquet porttitor lacus. Arcu odio ut sem
                nulla pharetra diam sit amet. Gravida rutrum quisque non tellus orci ac
                auctor augue
                <Collapsible title="INNER">COLLAPSE ME INSIDE</Collapsible>
            </Collapsible>
            <hr/>
            {/* {
                phases?.map((phase, i)=> {
                    return (
                        <ul key={i+1}>
                            <li>Id: {phase.id}</li>
                            <li>Name: <Link to={`/procurables/${phase.id}`}>{phase.name}</Link></li>
                            <li>ProjectId: {phase.project_id}</li>
                        </ul>
                    )
                })
            } */}
        </div>
    )
}

export default Phases;