/* eslint-disable react/prop-types */
import * as React from 'react';

const Header = ({ path }) => {
    return (
        <React.Fragment>
            <div className="relative bg-white w-full h-16 shadow-md">
                <div className="flex flex-row justify-center h-full p-4">
                    <span className="font-bold text-black flex flex-col justify-center">{path}</span>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Header