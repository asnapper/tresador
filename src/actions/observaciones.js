import { API_PREFIX } from '../constants'

export const actionTypes = {
    GET_OBSERVACIONES: 'GET_OBSERVACIONES',
    GET_OBSERVACIONES_SUCCESS: 'GET_OBSERVACIONES_SUCCESS',
    GET_OBSERVACIONES_ERROR: 'GET_OBSERVACIONES_ERROR',
}

export const getObservaciones = () => {
    return (dispatch) => {
        dispatch({ type: actionTypes.GET_OBSERVACIONES })
        fetch(API_PREFIX + '/observaciones')
            .then(res => res.json())
            .then(observaciones => {
                dispatch({ type: actionTypes.GET_OBSERVACIONES_SUCCESS, payload: observaciones })
            })
            .catch(error => dispatch({ type: actionTypes.GET_OBSERVACIONES_ERROR, payload: error }))
    }
}