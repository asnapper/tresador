import { actionTypes } from '../actions/observaciones'

const initalState = {
    loading: false,
    error: undefined,
    observaciones: []
}

export default (state = initalState, action) => {
    switch (action.type) {
        case actionTypes.GET_OBSERVACIONES:
            return { ...state, loading: true, error: undefined }
        case actionTypes.GET_OBSERVACIONES_ERROR:
            return { ...state, loading: false, error: action.payload }
        case actionTypes.GET_OBSERVACIONES_SUCCESS:
            return { ...state, loading: false, error: undefined, observaciones: action.payload }
    }
    return state
}