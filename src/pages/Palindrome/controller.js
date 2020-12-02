/* eslint-disable react/prop-types */
import React from 'react'

const initialState = {
    words: "",
    result: null,
    palindromeChecker: () => { },
}

export const PalindromeContext = React.createContext(initialState)
export const { Provider: PalindromeProvider } = PalindromeContext

export const PalindromeController = ({ children }) => {
    const [state, setState] = React.useState(initialState)

    const handleInput = (val) => {
        const value = val.target.value
        const name = val.target.name

        setState((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }


    function removeSpecials(str) {
        var lower = str.toLowerCase();
        var upper = str.toUpperCase();
      
        var res = "";
        for(var i=0; i<lower.length; ++i) {
            if(lower[i] != upper[i] || lower[i].trim() === '')
                res += str[i];
        }
        return res;
      }
      
      function palindromeChecker() {
      
        let newText = removeSpecials(state.words)
      
        let replace = newText.split(' ').join('')
      
        let charArray = replace.toLowerCase().split("")
        
        let result = charArray.every((letter, index) => {
            return letter === charArray[charArray.length - index - 1];
        })
        
        setState((prevState) => ({
            ...prevState,
            result: result
        }))

        return result
      }
      

    return (
        <PalindromeProvider value={{ ...state, handleInput: handleInput, palindromeChecker: palindromeChecker }}>
            {children}
        </PalindromeProvider>
    )
}