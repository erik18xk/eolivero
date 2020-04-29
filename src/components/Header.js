import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import "../styles/components/header.scss";

const Header = (props, { siteTitle }) => {
    console.log(siteTitle)
    return (
        <div className={`container container__header${props.activeValue ? '--hidden' : ''}`}>
            <div className="container__logo">
                eolivero
            </div>
            <div className="container__nav" onClick={props.onClick}>
                {`${props.changeValue ? 'Close' : 'More+'}`}
            </div>
        </div>
    )
}

Header.propTypes = {
    siteTitle: PropTypes.string,
};

Header.defaultProps = {
    siteTitle: ``,
};

export default Header;