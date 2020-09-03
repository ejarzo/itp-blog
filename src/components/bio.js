import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

import { rhythm } from '../utils/typography';

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          socialUrls {
            twitter
            github
            portfolio
          }
        }
      }
    }
  `);

  const { author, socialUrls } = data.site.siteMetadata;
  return (
    <div style={{ display: `flex`, marginBottom: rhythm(2.5) }}>
      <div className="font--monospace">
        By <strong>Elias Jarzombek</strong> [
        <a href={socialUrls.portfolio}>Website</a>{' '}
        <a href={socialUrls.github}>Github</a>{' '}
        <a href={socialUrls.twitter}>Twitter</a>]
      </div>
    </div>
  );
};

export default Bio;
