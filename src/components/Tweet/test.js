import React from 'react';
import 'jest-styled-components';
import { shallow } from 'enzyme';
import { Header, Link, Img } from './Styles';
import Tweet from './';

const props = {
  tweet: {
    entities: {
      urls: [{ display_url: 'display', expanded_url: 'expanded' }]
    },
    text: 'This is a tweet http://twitter.com',
    user: {
      profile_background_image_url: 'url',
      profile_link_color: '000000'
    }
  }
};

it('renders Tweet component', () => {
  const comp = shallow(<Tweet {...props} />);
  expect(comp).toMatchSnapshot();
});

it('renders Tweet text', () => {
  const comp = shallow(<Tweet {...props} />);
  expect(comp.find(Header).prop('children')).toBe('This is a tweet ');
});

it('renders Tweet without Link', () => {
  const newProps = { ...props, tweet: { ...props.tweet, text: 'No link' } };
  const comp = shallow(<Tweet {...newProps} />);
  expect(comp.find(Link).exists()).toBe(false);
});

it('renders Tweet with Img', () => {
  const newProps = {
    ...props,
    tweet: {
      ...props.tweet,
      entities: { ...props.tweet.entities, media: [{ media_url: 'img-url', id_str: 'str' }] }
    }
  };
  const comp = shallow(<Tweet {...newProps} />);
  console.log('xtest', comp.html());
  expect(comp.find(Img).exists()).toBe(true);
});

it('renders Tweet Link with hex color black', () => {
  const comp = shallow(<Tweet {...props} />);
  expect(comp.find(Link)).toHaveStyleRule('color', '#000000');
});
