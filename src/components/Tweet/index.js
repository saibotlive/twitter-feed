import React from 'react';
import PropTypes from 'prop-types';
import { Container, Header, Link } from './Styles';

const Tweet = ({ tweet }) => {
  const { entities, text, user } = tweet;
  const headerTxt = text.indexOf('http') !== -1 ? text.slice(0, text.indexOf('http')) : text;

  return (
    <Container>
      <Header>{headerTxt}</Header>
      {entities &&
        entities.urls.map((link, i) => (
          <Link
            color={user.profile_link_color}
            href={link.expanded_url}
            key={`link-${i}`}
            target="_blank"
          >
            {link.display_url}
          </Link>
        ))}
    </Container>
  );
};

Tweet.propTypes = {
  tweet: PropTypes.shape({
    entities: PropTypes.object.isRequired,
    text: PropTypes.string.isRequired,
    user: PropTypes.object.isRequired
  })
};

export default Tweet;
