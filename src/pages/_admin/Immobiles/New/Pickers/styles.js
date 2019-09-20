import styled from 'styled-components';

import DefaultButton from '~/components/Button';

export const Container = styled.div`
  background: #fff;
  top: 0;
  bottom: 0;
  left: 0;
  position: fixed;
  z-index: 2;
  flex-direction: column;
  box-shadow: 0 2px 24px 0 rgba(0, 0, 0, 0.16);
  width: calc(25% + 20px);

  display: flex;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 75px;
    min-height: 75px;
    padding: 0 30px;
    margin-bottom: 30px;
    border-bottom: 1px solid #ddd;

    h1 {
      font-weight: 500;
      font-size: 21px;
      color: #000;
    }

    svg {
      cursor: pointer;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Content = styled.div`
  flex: 1;
  padding: 0 30px;
  overflow-y: auto;
  display: flex;
`;

export const SubmitButton = styled(DefaultButton).attrs({
  background: 'rgb(239, 108, 0)',
  color: '#fff',
})`
  bottom: 0;
  display: flex;
  justify-content: center;
  margin-top: auto;
  width: 100%;
`;

export const SubmitButtonWrapper = styled.div`
  padding: 15px 30px;
`;
