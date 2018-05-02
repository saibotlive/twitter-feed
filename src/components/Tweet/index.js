import React from 'react';
import PropTypes from 'prop-types';
import { Container, Header, Link } from './Styles';

const Tweet = ({ tweet }) => {
  const { entities, text, user } = tweet;
  const withLink = text.indexOf('http') !== -1;
  const links = text.slice(text.indexOf('http')).split(' ');

  const headerTxt = withLink ? text.slice(0, text.indexOf('http')) : text;

  return (
    <Container>
      <Header>{headerTxt}</Header>
      {withLink &&
        entities.urls.map((link, i) => (
          <Link
            color={user.profile_link_color}
            href={link.url}
            key={`link-${i}`}
            target="_blank"
          >
            {links[i]}
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
