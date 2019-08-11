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
`;

export const Button = styled(DefaultButton).attrs({
  color: '#fff',
  background: 'rgb(239, 108, 0)',
})`
  margin-top: auto;
  width: 100%;
  margin: 25px 0;
`;

export const Highlighter = styled.div`
  position: absolute;
  font-size: 14px;
  background: rgb(239, 108, 0);
  padding: 7px 10px;
  border-radius: 25px;
  color: #fff;
  left: -55px;
  top: -13px;
  font-weight: 500;
  text-align: center;
`;
