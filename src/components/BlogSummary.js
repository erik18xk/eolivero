import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import "../styles/components/blog-summary.scss";

const BlogSummmary = () => {
    return (
        <div className="blog blog__section">
            <div className="blog__tags">
                Business
            </div>
            <div className="blog__title">
                This is an example of a title for my blog
            </div>
            <div className="blog__description">
                This is the description for my blog and I really hope that everybody love it
            </div>
            <div className="blog__cta">
                Read More
            </div>
        </div>
    )
}

export default BlogSummmary;