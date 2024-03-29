import React from 'react';
import _ from 'lodash';
import { graphql, Link } from 'gatsby';
import Bio from '../components/bio';
import Layout from '../components/layout';
import SEO from '../components/seo';
import PostsList from '../components/postsList';
import { TAGS } from '../utils/tags';
import TagsList from '../components/tagsList';
import Color from 'color';
import { rhythm } from '../utils/typography';

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMarkdownRemark.edges;

  let tags = [];
  posts.forEach((edge) => {
    if (_.get(edge, `node.frontmatter.tags`)) {
      tags = tags.concat(edge.node.frontmatter.tags);
    }
  });
  tags = _.uniq(tags);
  console.log('TAGS');
  console.log(tags);
  tags.forEach((tag) => {
    const tagPath = `/tags/${tag.replace(/_/g, '-').toLowerCase()}/`;
  });

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <Bio />
      {/* <TagsList tags={tags} /> */}
      <div
        style={{
          paddingBottom: rhythm(0.5),
          borderBottom: '3px dashed rgba(139, 122, 89, 0.1)',
          marginBottom: rhythm(2),
        }}
      >
        {/* <span>Categories: </span> */}
        {tags.map((tag) => (
          <Link
            style={{
              color: Color(TAGS[tag].color).darken(0.2),
              padding: '1px 3px',
              borderRadius: 2,
              // textShadow: `-1px 1px 2px ${Color(TAGS[tag].color).lighten(0.1)}`,
              background: `${Color(TAGS[tag].color).fade(0.8)}`,
              // background: 'none',
              // textDecoration: 'none',
              marginRight: 8,
              fontWeight: 'bold',
            }}
            to={`tags/${tag.replace(/_/g, '-').toLowerCase()}`}
          >
            {TAGS[tag].label}
          </Link>
        ))}
      </div>

      <h2>All Posts</h2>
      <PostsList posts={posts} />
    </Layout>
  );
};

export default BlogIndex;

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
