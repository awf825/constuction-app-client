import React from 'react'
import Table from 'react-bootstrap/Table';

const ProcurablesTable = (props: any) => {
    const d = props.data
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Submittal #</th>
                    <th>Submittal Date</th>
                    <th>Architect review Period (in weeks?)</th>
                    <th>Submittal Return Date</th>
                    <th>Field Measure Date</th>
                    <th>Field Measure Activity</th>
                    <th>Lead time (in weeks?)</th>
                    <th>Date available</th>
                    <th>Activity Needed For</th>
                    <th>Date Needed</th>
                    <th>Subcontractor</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{d.submittal_number}</td>
                    <td>{d.submittal_date}</td>
                    <td>{d.architect_review_period}</td>
                    <td>{d.submittal_return_date}</td>
                    <td>{d.field_measure_date}</td>
                    <td>{d.field_measure_activity}</td>
                    <td>{d.lead_time}</td>
                    <td>{d.date_available}</td>
                    <td>{d.activity_needed_for}</td>
                    <td>{d.date_needed}</td>
                    <td>{d.subcontractor}</td>
                </tr>
            </tbody>
        </Table>
    )
}

export default ProcurablesTable