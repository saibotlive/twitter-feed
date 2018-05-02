import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tweet from '../Tweet';
import { Container, ErrorMessage, Wrapper } from './Styles';

class Main extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.object.isRequired
    })
  };

  state = {
    response: []
  };

  componentDidMount() {
    const {
      match: { params }
    } = this.props;
    const id = params.id || 'cnnbrk';
    this.callApi(`/user/${id}`);
  }

  callApi = async url => {
    const response = await fetch(url);
    const body = await response.json();
    this.setState({ response: body });
  };

  render() {
    const { response } = this.state;
    if (response.error) {
      return response.error && <ErrorMessage>Twitter handle does not exist</ErrorMessage>;
    } else
      return (
        <Wrapper bgURL={response.tweets && response.tweets[0].user.profile_background_image_url}>
          <Container>
            {response.tweets &&
              response.tweets.map((tweet, i) => <Tweet key={`tweet${i}`} tweet={tweet} />)}
          </Container>
        </Wrapper>
      );
  }
}

export default Main;
