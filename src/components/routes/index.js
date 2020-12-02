/* eslint-disable react/prop-types */
import React from 'react'
import { Router, Route } from 'react-router-dom'
import history from '../../utils/history'
import Footer from '../footer'
import Header from '../header'

const CustomRoutes = ({ component: Component, ...rest }) => {
    const regexPath = new RegExp('\\w+', 'g')
    const newPath = regexPath.exec(rest.path)?.map((val) => val.toUpperCase().toString())
    return (
        <div className={`relative h-screen m-auto max-w-md bg-white`}>
            <div className="flex flex-col h-screen">
                <div className="flex flex-col h-screen">
                    <Header path={newPath} />
                    <div className="w-full overflow-auto h-screen">
                        <Router history={history}>
                            <Route {...rest} render={(props) => (
                                <Component {...props} />
                            )}></Route>
                        </Router>
                    </div>
                    <div className="bottom-0 w-full shadow-lg">
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomRoutes