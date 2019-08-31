import styled from 'styled-components';
import DefaultButton from '~/components/Button';

export const Container = styled.div`
  background: #fff;
  top: 0;
  bottom: 0;
  left: 0;
  position: fixed;
  z-index: 2;
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 24px 0 rgba(0, 0, 0, 0.16);
  min-width: calc(25% + 20px);

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 75px;
    padding: 0 30px;
    margin-bottom: 30px;
    border-bottom: 1px solid #ddd;

    h1 {
      font-weight: 500;
      font-size: 21px;
    }

    svg {
      cursor: pointer;
    }
  }
`;

export const Content = styled.div`
  flex: 1;
  align-items: stretch;
  display: flex;
  padding: 0 30px 30px;

  form {
    flex: 1;
    display: flex;
    flex-direction: column;

    > div {
      margin-bottom: 15px;
    }
  }
`;

export const SubmitButton = styled(DefaultButton).attrs({
  background: 'rgb(239, 108, 0)',
  color: '#fff',
})`
  display: flex;
  justify-content: center;
  margin: auto 0 0 auto;
  width: 100%;
`;
