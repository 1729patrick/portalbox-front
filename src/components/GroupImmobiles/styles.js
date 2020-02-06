import styled from 'styled-components';

export const Container = styled.div`
  h1 {
    font-size: 30px;
    color: #333;
  }

  > div {
    display: grid;
    grid-template-columns: ${props =>
      props.count < 3
        ? 'repeat(3, minmax(260px, 1fr))'
        : 'repeat(auto-fit, minmax(260px, 1fr))'};

    overflow-y: hidden;
    grid-gap: 13px;
    z-index: 1;
    margin: 7px -13px -13px;
    padding: 13px;

    @media screen and (max-width: 575px) {
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    }
  }

  > p {
    margin-top: 20px;
    color: #666;
    font-weight: 500;
    font-size: 16px;
    cursor: pointer;
    width: max-content;
    padding-bottom: 5px;
    border-bottom: 2px solid transparent;

    &:hover {
      border-color: #555;
    }
  }
`;
