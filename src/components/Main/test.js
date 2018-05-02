import React from 'react';
import 'jest-styled-components';
import { shallow } from 'enzyme';
import { Wrapper, ErrorMessage } from './Styles';
import Main from './';

const tweetsData = {
  tweets: [
    {
      entities: {
        urls: [{ url: 'display', expanded_url: 'expanded' }]
      },
      text: 'text',
      user: {
        profile_background_image_url: 'url',
        profile_link_color: 'black'
      }
    }
  ]
};

const props = {
  match: {
    params: {
      id: 'test'
    }
  }
};

it('renders Main component', () => {
  global.fetch = jest.fn(() => ({
    json: () => tweetsData
  }));
  const comp = shallow(<Main {...props} />);

  expect(comp).toMatchSnapshot();
});

it('callApi with error', async () => {
  global.fetch = jest.fn(() => ({
    json: () => ({ error: {} })
  }));

  const comp = shallow(<Main {...props} />);
  await comp.instance().callApi();
  comp.update();
  expect(comp.find(ErrorMessage).prop('children')).toEqual('Twitter handle does not exist');
});

it('renders Container with prop bgURL', async () => {
  global.fetch = jest.fn(() => ({
    json: () => tweetsData
  }));

  const {
    match: { params }
  } = props;
  const id = params.id;

  const comp = shallow(<Main {...props} />);
  await comp.instance().callApi(id);
  const { tweets } = comp.state('response');
  comp.update();
  expect(comp.find(Wrapper)).toHaveStyleRule(
    'background-image',
    `url(${tweets[0].user.profile_background_image_url})`
  );
});
