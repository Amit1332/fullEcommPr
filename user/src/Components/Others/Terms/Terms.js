import React from 'react'
import "../Terms/Terms.css"
import Tabs from './Tabs/Tabs'

function Terms() {
    return (
        <>
            <div className="container-fluid p-3 mt-4 m-0">
                <div className="term-nav pt-2 d-flex justify-content-between ">
                    <div className="term-nav-left mt-3"> <h3>Term & Conditions</h3></div>
                </div>
              

                    <Tabs/>
                </div>
        </>
    )
}

export default Terms