import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createUseStyles, useTheme } from 'react-jss'

import { getObservaciones }  from '../actions/observaciones'
import { API_PREFIX } from '../constants'

const useStyles = createUseStyles(theme => ({
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
}))

export const Observaciones = () => {

    const theme = useTheme()
    const classes = useStyles(theme)

    const dispatch = useDispatch()
    const observaciones = useSelector((state) => state.observaciones.observaciones)
    const loading = useSelector((state) => state.observaciones.loading)
    const error = useSelector((state) => state.observaciones.error)

    useEffect(() => {
        getObservaciones()(dispatch)
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

export default Observaciones