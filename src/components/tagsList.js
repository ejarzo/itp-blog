import React from 'react';
import Color from 'color';
import { TAGS } from '../utils/tags';
import { rhythm, scale } from '../utils/typography';
import { Link } from 'gatsby';

const getStyle = (tag) => ({
  color: Color(TAGS[tag].color).darken(0.3),
  padding: '5px 5px',
  lineHeight: 1,
  borderRadius: 4,
  background: `${Color(TAGS[tag].color).fade(0.8)}`,
  marginRight: 8,
  fontWeight: 'normal',
  textDecoration: 'none',
  display: 'inline-block',
  // border: `1px solid ${Color(TAGS[tag].color).fade(0.8)}`,
  boxShadow: `2px 2px 0 ${Color(TAGS[tag].color).fade(0.5)}`,
  fontSize: '0.8em',
});

export default ({ tags = [] }) =>
  tags.map((tag) => (
    <Link
      to={`/tags/${tag.replace(/_/g, '-').toLowerCase()}`}
      className="tag font--monospace"
      key={tag}
      style={getStyle(tag)}
    >
      {TAGS[tag].label}
    </Link>
  ));
