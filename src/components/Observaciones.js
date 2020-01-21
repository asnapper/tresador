import React, { useState, useEffect } from 'react'
import injectSheet from 'react-jss'
import { API_PREFIX } from '../constants'

const styles = theme => ({
    root: {
        textAlign: 'left',
        width: '100%'
    },
    header: {
        backgroundColor: theme.backgroundColor,
        color: theme.textColor,
        fontWeight: 'bold'
    },
    row: {
        color: theme.textColor
    }
})

export const Observaciones = ({ classes }) => {


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

    return <table className={classes.root}>
        <thead className={classes.header}>
            <tr>
                <th>{'ob.ts'}</th>
                <th>{'ob.valia'}</th>
                <th>{'ob.usario_fk'}</th>
            </tr>
        </thead>
        <tbody>
            {observaciones.map(ob => {
                return <tr key={ob.id}  className={classes.row}>
                    <td>{ob.ts}</td>
                    <td>{ob.valia}</td>
                    <td>{ob.usario_fk}</td>
                </tr>
            })}
        </tbody>
    </table>
}

export default injectSheet(styles)(Observaciones)