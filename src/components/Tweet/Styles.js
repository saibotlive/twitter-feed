import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  padding: 20px;
  margin: 0 0 20px 0;
  border-radius: 20px;
  background: white;

  @media screen and (min-width: 600px) {
    width: 48%;
  }
`;

export const Header = styled.div`
  font-size: 1.5rem;
  margin: 0 0 20px 0;
`;

export const Link = styled.a`
  font-size: 1.5rem;
  text-decoration: none;
  color: ${props => `#${props.color}`};
  word-break: break-word;
  display: inline-block;
  margin: 0 0 20px 0;
`;

export const Img = styled.img`
  display: block;
  max-width: 100%;
  border-radius: 5px;
  margin: 0 auto;
`;
