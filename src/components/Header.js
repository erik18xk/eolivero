import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import "../styles/components/header.scss";

const Header = ({ siteTitle }) => (
    <div className="container container__header">
        <div className="container__logo">
            { siteTitle }
        </div>
        <div className="container__nav">
            More+
        </div>
    </div>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
};

Header.defaultProps = {
    siteTitle: ``,
};

export default Header;