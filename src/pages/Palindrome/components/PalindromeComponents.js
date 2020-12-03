import React from 'react'
import { PalindromeContext } from '../controller'

const PalindromeComponents = () => {
    const controller = React.useContext(PalindromeContext)
    const { handleInput, palindromeChecker, result, words, reset } = controller

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
            <span className="mb-2 text-lg font-medium">Input Words</span>
            <div className="flex flex-col" >
                <input value={words} autoComplete="off" type="text" name="words" onChange={(e) => handleInput(e)} className="shadow appearance-none border rounded py-2 px-3 text-grey-darker"></input>
                <button
                    disabled={words.length === 0}
                    onClick={() => palindromeChecker()}
                    type="button"
                    className="mt-4 border border-indigo-500 text-indigo-500 rounded-md px-4 py-2 my-2 transition duration-500 ease select-none hover:text-white hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
                >
                    Execute
                </button>
            </div>
            <span onClick={() => reset()} className="text-center underline cursor-pointer text-blue-500">Reset</span>
            <div className="text-center p-4 font-medium text-lg">
                <span>Status:</span>
                <p className={`${result === true ? "text-blue-500" : "text-red-500"}`}>{words.length !== 0 && valueSwitch(result)}</p>
            </div>
        </div>
    )
}

export default PalindromeComponents