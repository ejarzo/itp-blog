import React from 'react';
import { Helmet } from 'react-helmet';
import Color from 'color';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import { TAGS } from '../utils/tags';
import PostsList from '../components/postsList';
import { rhythm } from '../utils/typography';

const TagsTemplate = ({ data, location, pageContext }) => {
  const siteTitle = data.site.siteMetadata.title;

  const posts = data.allMarkdownRemark.edges;

  const { label, color } = TAGS[pageContext.tag];
  const title = data.site.siteMetadata.title;
  const totalCount = data.allMarkdownRemark.totalCount;

  // const tagHeader = `${totalCount} post${totalCount === 1 ? '' : 's'}`;

  return (
    <Layout location={location} title={siteTitle}>
      <Helmet title={`${label} | ${title}`} />
      <h1
        style={{
          color: Color(color).darken(0.1),
          textShadow: `-1px 2px 2px ${Color(color).darken(0.3)}`,
          marginBottom: rhythm(2),
        }}
      >
        {label}
      </h1>

      <PostsList posts={posts} />
    </Layout>
  );
};

export default TagsTemplate;

export const pageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            tags
          }
        }
      }
    }
  }
`;
