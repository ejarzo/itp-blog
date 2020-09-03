import React from 'react';
import { rhythm } from '../utils/typography';
import { Link } from 'gatsby';
import TagsList from '../components/tagsList';

export default ({ posts = [] }) =>
  posts.map(({ node }) => {
    const { frontmatter, fields, excerpt } = node;
    const { tags } = frontmatter;
    const title = frontmatter.title || fields.slug;
    return (
      <article key={fields.slug}>
        <header style={{ marginBottom: rhythm(1 / 4) }}>
          <h3 style={{ marginBottom: 0 }}>
            <Link style={{ boxShadow: `none` }} to={fields.slug}>
              {title}
            </Link>
          </h3>
          <small>{frontmatter.date}</small>
          <div>
            <TagsList tags={tags} />
          </div>
        </header>
        <section>
          <p
            dangerouslySetInnerHTML={{
              __html: frontmatter.description || excerpt,
            }}
          />
        </section>
      </article>
    );
  });
