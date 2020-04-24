import React from "react";
import Link from "gatsby-link";
import Layout from '../../components/layouts/index/index';

// import '../css/Gallery.module.scss'; // add some style if you want!

export default function Index({ data, location }) {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <Layout location={location}>
      <div className="blog-posts">
        {posts
          .filter(post => post.node.frontmatter.title.length > 0)
          .map(({ node: post }) => {
            return (
              <div className="blog-post-preview" key={post.id}>
                <h1>
                  <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
                </h1>
                <h2>{post.frontmatter.date}</h2>
                <p>{post.excerpt}</p>
              </div>
            );
          })}
      </div>
    </Layout>
  );
}

export const postRUQuery = graphql`
  query IndexRUBlogQuery {
    allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] },
        filter: {
            fields: { langKey: { regex: "/(ru|any)/" } }
        }
    ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`;