import React, { useState, useEffect } from 'react'
import { API_PREFIX } from '../constants'

export const Observaciones = () => {

    const [observaciones, setObservaciones] = useState([])

    const fetchObservaciones = () => {
        fetch(API_PREFIX + '/observaciones')
            .then(res => res.json())
            .then(obs => obs.sort((a, b) => +new Date(b.ts) - +new Date(a.ts)))
            .then(obs => setObservaciones(obs))
    }

    useEffect(() => {
        fetchObservaciones()
    }, [])

    return <table>
        <thead>
            <tr>
                <th>{'ob.ts'}</th>
                <th>{'ob.valia'}</th>
                <th>{'ob.usario'}</th>
            </tr>
        </thead>
        <tbody>
            {observaciones.map(ob => {
                return <tr key={ob.id}>
                    <td>{ob.ts}</td>
                    <td>{ob.valia}</td>
                    <td>{ob.usario}</td>
                </tr>
            })}
        </tbody>
    </table>
}

export default Observaciones