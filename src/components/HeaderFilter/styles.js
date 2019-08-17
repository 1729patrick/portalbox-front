import styled from 'styled-components';

export const Container = styled.aside`
  display: flex;
  align-items: center;
  height: 50px;
  width: 100%;
  user-select: none;
  padding-left: 50px;

  @media screen and (max-width: 768px) {
    padding-left: 10px;
    padding-bottom: 10px;
    overflow-x: auto;
    height: 40px;
  }
`;
