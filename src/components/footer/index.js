import * as React from 'react';
import history from '../../utils/history'
const Footer = () => {

    const stateHistory = (params) => {
        if (params === 'palindrome') {
            history.push('/palindrome')
        } else if (params === 'currency') {
            history.push('/currency')
        }
    }

    return (
        <React.Fragment>
            <div className="border-t flex flex-row bg-white w-full h-16 justify-center items-center shadow-x-md">
                <div onClick={() => stateHistory('palindrome')} className="flex rounded-md w-1/2 flex-col justify-center items-center p-2 transition duration-500 ease-in-out hover:shadow-lg">
                    <span>🖊️</span>
                    <span> Palindrome </span>
                </div>
                <div onClick={() => stateHistory('currency')} className="flex rounded-md w-1/2 flex-col justify-center items-center p-2 transition duration-500 ease-in-out hover:shadow-lg">
                    <span>💲</span>
                    <span> Currency </span>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Footer