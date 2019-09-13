import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  top: 0;
  left: 0;
  padding-top: 125px;

  div {
    width: 100%;
    height: 5px;
  }

  .MuiLinearProgress-bar1Indeterminate,
  .MuiLinearProgress-bar {
    background: #ef6c00;
  }

  @media screen and (max-width: 768px) {
    section {
      padding-top: 105px;
    }
  }
`;
