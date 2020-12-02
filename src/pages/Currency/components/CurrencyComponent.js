import React from 'react'
import { CurrencyContext } from '../controller'

const CurrencyComponent = () => {
    const controller = React.useContext(CurrencyContext)

    const { handleInput, splitNumber, result } = controller

    return (
        <div className="flex flex-col justify-center p-4 mt-10">
            <input type="text" onChange={(e) => handleInput(e)} name="number" className="shadow appearance-none border rounded py-2 px-3 text-grey-darker"></input>
            <button
                onClick={() => splitNumber()}
                type="button"
                className="border border-indigo-500 text-indigo-500 rounded-md px-4 py-2 my-2 transition duration-500 ease select-none hover:text-white hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
            >
                Execute
        </button>
        <div className="text-center">
            <span>Result: </span>
            <p>{result}</p>
        </div>
        </div>
    )
}

export default CurrencyComponent