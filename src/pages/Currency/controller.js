/* eslint-disable use-isnan */
/* eslint-disable react/prop-types */
import React from 'react'

const initialState = {
    number: "",
    result: "",
    message: "",
    showError: false,
    disable: false,
    handleInput: () => { },
    splitNumber: () => { },
}

export const CurrencyContext = React.createContext(initialState)
export const { Provider: CurrencyProvider, Consumer: CurrencyConsumer } = CurrencyContext

export const CurrencyController = ({ children }) => {

    const [state, setState] = React.useState(initialState)

    const handleInput = (val) => {
        const value = val.target.value
        const name = val.target.name

        const number = Number.parseFloat(value.split('.').join(""))

        if (number < 99) {
            setState((prevState) => ({
                ...prevState,
                message: 'Minimal angka 99',
                showError: true,
                disable: true
            }))
        } else if (number >= Math.pow(1 * 10, 9)) {
            setState((prevState) => ({
                ...prevState,
                message: 'Max angka 1 milyar',
                showError: true,
                disable: true
            }))
        } else {
            setState((prevState) => ({
                ...prevState,
                showError: false,
                disable: false
            }))
        }

        setState((prevState) => ({
            ...prevState,
            [name]: number
        }))
    }


    const splitNumber = () => {
        let temp = []
        let value = state.number
        const keyValue = [100000, 50000, 20000, 10000, 5000, 2000, 1000, 500, 200, 100]
        keyValue.forEach(item => {
            if (value >= item) {
                let resResult = value
                value = value % item
                let amount = (resResult - value) / item
                let nominal = item
                if (nominal >= 1000) {
                    nominal = item.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, '.')
                }
                temp.push({ nominal: nominal, amount: amount })
            }
        })

        let result = ""
        temp.forEach(val => {
            result = result + `${val.nominal}(x${val.amount}), `
        })
        result = result + `sisa ${value},`
        setState((prevState) => ({
            ...prevState,
            result: result
        }))
        return result
    }

    return (
        <CurrencyProvider value={{ ...state, handleInput: handleInput, splitNumber: splitNumber }}>
            {children}
        </CurrencyProvider>
    )
}