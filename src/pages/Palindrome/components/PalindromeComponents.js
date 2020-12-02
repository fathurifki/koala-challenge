import React from 'react'
import { PalindromeContext } from '../controller'

const PalindromeComponents = () => {
    const controller = React.useContext(PalindromeContext)
    const { handleInput, palindromeChecker, result } = controller

    const valueSwitch = (val) => {
        if (val === false) {
            return 'FALSE'
        } else if (val === true) {
            return 'TRUE'
        }
        else {
            return ''
        }
    }

    return (
        <div className="flex flex-col justify-center p-4 mt-10">
            <input name="words" onChange={(e) => handleInput(e)} className="shadow appearance-none border rounded py-2 px-3 text-grey-darker"></input>
            <button
                onClick={() => palindromeChecker()}
                type="button"
                className="border border-indigo-500 text-indigo-500 rounded-md px-4 py-2 my-2 transition duration-500 ease select-none hover:text-white hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
            >
                Execute
        </button>
            <span className="text-center">Status:</span>
            <p>{valueSwitch(result)}</p>
        </div>
    )
}

export default PalindromeComponents