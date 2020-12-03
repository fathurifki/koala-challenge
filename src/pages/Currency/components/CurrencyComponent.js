import React from 'react'
import { CurrencyContext } from '../controller'

const CurrencyComponent = () => {
    const controller = React.useContext(CurrencyContext)

    const { handleInput, splitNumber, result, message, showError, disable, number } = controller

    const convert = (val) => {
        if (isNaN(val)) {
            return ''
        } else {
            return val.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, '.')
        }
    }
    return (
        <div className="flex flex-col justify-center p-4 mt-10 ">
            <span className="mb-2 text-lg font-medium">Input Number</span>
            <form className="flex flex-col" onSubmit={() => splitNumber()}>
                <input value={convert(number)} type="text" onChange={(e) => handleInput(e)} name="number" className="shadow appearance-none border rounded py-2 px-3 text-grey-darker"></input>
                <div className="text-center p-4 font-medium text-lg text-red-800">
                    {
                        showError && <p>{message}</p>
                    }
                </div>
                <button
                    disabled={disable}
                    onClick={() => splitNumber()}
                    type="button"
                    className="border border-indigo-500 text-indigo-500 rounded-md px-4 py-2 my-2 transition duration-500 ease select-none hover:text-white hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
                >
                    Execute
                </button>
            </form>
            <div className="text-center p-4 font-medium text-lg">
                <span>Result: </span>
                <p>{isNaN(number) ? "" : result}</p>
            </div>
        </div>
    )
}

export default CurrencyComponent