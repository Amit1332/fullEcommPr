import React from 'react'
import "./CataLoguesHeadingNav.css"
const HeadingNav = ({title}) => {
    return (
        <div className='container-fluid catalog_nav_heading p-0 kk'  >
            <nav class="navbar bg-body-tertiary shadow-0  ">
                <div class="container-fluid p-0 sd">
                <div className="term-nav-left mt-3"> <h3>{title}</h3></div>

                    <a class="navbar-brand"></a>
                    <form className="d-flex rounded-pill" role="search" style={{border :"1px solid #D0D5DD"}}>
                    <span  className="input-group-text" id="addon-wrapping"><i class="ri-search-line"></i></span>
                        <input className="form-control me-2 border-0  search" type="search" placeholder="Search by product name" aria-label="Search" />
                    </form>
                </div>
            </nav>
        </div>
    )
}

export default HeadingNav;