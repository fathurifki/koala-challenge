import React from 'react'
import CurrencyComponent from './components/CurrencyComponent'
import { CurrencyController } from './controller'

const Currency = () => {
    return (
        <CurrencyController>
            <CurrencyComponent />
        </CurrencyController>
    )
}

export default Currency