/* eslint-disable react/prop-types */
import React from 'react'

const initialState = {
    number: "",
    result: "",
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

        setState((prevState) => ({
            ...prevState,
            [name]: Number.parseFloat(value.split('.').join(""))
        }))
    }

    const splitNumber = () => {
        let temp = []
        let temp2 = state.number
        const keyValue = [100000, 50000, 20000, 10000, 5000, 2000, 1000, 500, 200, 100]
        keyValue.forEach(item => {
            if (temp2 >= item) {
                let sisa = temp2
                temp2 = temp2 % item
                let amount = (sisa - temp2) / item
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
        result = result + `sisa ${temp2},`
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