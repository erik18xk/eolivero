import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/seo"
import Blog from "../components/BlogSummary";

const BlogPage = ({ data }) => {
    const post = data.allMarkdownRemark.edges
    console.log(post)
    return (
        <Layout>
            <SEO title="Blog" />
            {post.map(({ node, idx }) => <Blog data={node.frontmatter} key={1}/>)}
        </Layout>
    )
}

export default BlogPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            tags
            description
            path
          }
        }
      }
    }
  }
`