import styled from 'styled-components';

export const Container = styled.div`
  h1 {
    font-size: 30px;
    color: #444;
  }

  > div {
    overflow: hidden;
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    grid-template-rows: repeat(2, 1fr);
    grid-auto-rows: 0;
    grid-gap: 15px;
  }

  > p {
    margin-top: 20px;
    color: #666;
    font-weight: 500;
    font-size: 16px;
    cursor: pointer;
    width: max-content;
    padding-bottom: 5px;

    &:hover {
      padding-bottom: 4px;
      border-bottom: 1px solid #555;
    }
  }
`;
