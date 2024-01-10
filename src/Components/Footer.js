import React from 'react'
import Font from 'react-font';
import { NavLink } from 'react-router-dom'
import { CiHeart } from "react-icons/ci";
function Footer() {
    return (
        <footer className="d-flex flex-wrap justify-content-center align-items-center py-3  border-top sticky-bottom  bgBrandDark textlightbrand">
            <Font family="Satisfy">
                <span className="mb-3 mb-md-0">© 2023 made by
                    <NavLink
                        to={'/'}
                        className={'fs-4 textlightbrand '}
                        style={{ textDecoration: 'none' }}>
                      {" "}  Yelmouss
                    </NavLink> with <CiHeart /> </span>
            </Font>

        </footer>
    )
}

export default Footer