import styled from 'styled-components';

import DefaultButton from '~/components/Button';

export const Container = styled.div`
  padding: 0 40px;
  background: #fff;
  width: 350px;
  border-radius: 6px;
  box-shadow: 0 2px 24px 0 rgba(0, 0, 0, 0.16);
  text-align: center;
  display: flex;
  flex-direction: column;
  height: min-content;

  h4 {
    font-size: 25px;
    color: #555;
    position: relative;
    margin-top: 35px;
  }

  ul {
    margin-top: 15px;

    li {
      height: 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #666;

      & + li {
        border-top: 1px solid #eee;
      }
    }
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-top: 15px;
    background: transparent;
    box-shadow: none;
    border-top: 1px solid #eee;
  }
`;

export const Button = styled(DefaultButton).attrs(props => ({
  background: props.theme.immobileDetails.price.button.backgroundColor,
  color: props.theme.immobileDetails.price.button.color,
}))`
  margin-top: auto;
  width: 100%;
  margin: 25px 0;
`;

export const Highlighter = styled.div`
  position: absolute;
  font-size: 14px;
  background: ${props =>
    props.theme.immobileDetails.price.highlighter.backgroundColor};
  padding: 7px 10px;
  border-radius: 25px;
  color: ${props => props.theme.immobileDetails.price.highlighter.color};
  left: -55px;
  top: -13px;
  font-weight: 500;
  text-align: center;

  @media screen and (max-width: 768px) {
    left: -40px;
  }
`;
