import React, { useState } from 'react'
import { Provider } from 'react-redux'
import Observaciones from './Observaciones'
import { API_PREFIX } from '../constants'
import store from '../store'

export const App = () => {


    const handlePageViewClick = (event) => {
        fetch(API_PREFIX + '/page_view', {
            method: 'POST',
            body: JSON.stringify({ 'usario_fk': 1, 'valia': 3 }),
            headers: {
                'content-type': 'application/json'
            }
        })
    }


    return <Provider store={store}>
        <button onClick={handlePageViewClick}>Click Me Bitch!</button>

        <Observaciones />
    </Provider>
}

export default App