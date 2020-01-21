import React, { useState } from 'react'
import Observaciones from './Observaciones'
import { API_PREFIX } from '../constants'

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


    return <div>
        <button onClick={handlePageViewClick}>Click Me Bitch!</button>

        <Observaciones />
    </div>
}

export default App