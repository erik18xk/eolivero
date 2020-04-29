/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header"
import "../styles/components/layout.scss"

const Layout = ({ children }) => {

    const [active, setActive] = useState(false);

    const handleChange = () => {
        setActive(!active)
        console.log(`Tha value of active is ${active}`)
    }
    console.log(active)
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
    `)

    return (
        <>
            <div className={`menu__overlay${active ? '' : '--hidden'}`}>
                <Header onClick={handleChange} changeValue={active} activeValue={!active}/>
                <ul className="menu__items">
                    <li className="menu__item"> Blog </li>
                    <li className="menu__item"> POC </li>
                    <li className="menu__item"> Concierge </li>
                    <li className="menu__item"> About </li>
                    <li className="menu__item"> Projects </li>
                    <li className="menu__item"> Hire Me </li>
                </ul>
            </div>
            <Header siteTitle={data.site.siteMetadata.title} onClick={handleChange} activeValue={active}/>
            <div className={`eolivero-main${active ? '--hidden' : ''}`}>
                <div className="main__section">{children}</div>
                <footer>
                    © {new Date().getFullYear()}, Built with
                    {` `}
                    <a href="https://www.gatsbyjs.org">Gatsby</a>
                </footer>
            </div>
        </>
    )
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout;