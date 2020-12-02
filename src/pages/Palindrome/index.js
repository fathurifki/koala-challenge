import React from 'react'
import PalindromeComponents from './components/PalindromeComponents'
import { PalindromeController } from './controller'

const Palindrome = () => {
    return (
        <PalindromeController >
            <PalindromeComponents />
        </PalindromeController>
    )
}

export default Palindrome