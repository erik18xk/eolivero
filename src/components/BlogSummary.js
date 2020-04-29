import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import "../styles/components/blog-summary.scss";

const BlogSummmary = ({ data }) => {
    console.log(data.path)
    const { title, description, path } = data
    return (
        <Link to={path}>
            <div className="blog blog__section">
                <div className="blog__tags">
                    {data.tags.map(el => (
                    <div className="blog__tags__element">
                        { el }
                    </div> ))}
                </div>
                <div className="blog__title">
                    { title }
                </div>
                <div className="blog__description">
                    { description }
                </div>
                <div className="blog__cta">
                    Read More
                </div>
            </div>
        </Link>
    )
}

export default BlogSummmary;