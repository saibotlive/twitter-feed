import React from 'react';
import 'jest-styled-components';
import { shallow } from 'enzyme';
import Main from './';

global.fetch = jest.fn(() => ({
  json: () => ({
    tweets: [
      {
        entities: {
          urls: [{ display_url: 'display', expanded_url: 'expanded' }]
        },
        text: 'text',
        user: {
          profile_background_image_url: 'url',
          profile_link_color: 'black'
        }
      }
    ]
  })
}));

const props = {
  match: {
    params: {
      id: 'test'
    }
  }
};

it('renders Main component', () => {
  const comp = shallow(<Main {...props} />);
  expect(comp).toMatchSnapshot();
});
