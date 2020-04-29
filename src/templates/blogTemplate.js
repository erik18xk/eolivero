import React from "react";
import { graphql } from "gatsby";
import Header from "../components/Header";

export default function Template({
    data,
                                }) {
    const { markdownRemark } = data
    const { frontmatter, html } = markdownRemark
    return (
        <>
            <Header siteTitle="eolivero"></Header>
            <div className="blog blog__container">
                <div className="blog__post">
                    <h1> { frontmatter.title }</h1>
                    <h2> { frontmatter.date }</h2>
                    <div
                        className="blog__content"
                        dangerouslySetInnerHTML={{ __html: html }}
                    />
                </div>
            </div>
        </>
    )
};

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`