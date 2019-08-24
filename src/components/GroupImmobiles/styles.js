import styled from 'styled-components';

export const Container = styled.div`
  h1 {
    font-size: 30px;
    color: #333;
    margin-bottom: 20px;
  }

  > div {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    grid-template-rows: repeat(2, 1fr);
    /* grid-auto-rows: 0; */
    overflow-y: hidden;
    grid-gap: 15px;
    z-index: 1;
    margin: -15px;
    padding: 15px;
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
