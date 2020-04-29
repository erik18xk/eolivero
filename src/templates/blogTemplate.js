import React from "react";
import { graphql } from "gatsby";
import Header from "../components/Header";
import Layout from "../components/Layout";
import "../styles/templates/blog-template.scss";


export default function Template({
    data,
                                }) {
    const { markdownRemark } = data
    const { frontmatter, html } = markdownRemark
    return (
        <Layout>
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
        </Layout>
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