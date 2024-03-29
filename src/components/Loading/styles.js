import styled from 'styled-components';

export const Container = styled.div`
  z-index: 3;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #fff;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  user-select: none;

  img {
    width: 300px;
  }

  > div {
    width: 300px;
    color: #ef6c00;
  }

  p {
    font-size: 16px;
    font-family: 'Google Sans';
  }

  .MuiLinearProgress-bar1Indeterminate,
  .MuiLinearProgress-bar {
    background: #ef6c00;
  }

  .MuiLinearProgress-colorPrimary {
    background: #ef6c0050;
  }
`;
