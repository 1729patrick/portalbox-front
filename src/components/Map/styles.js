import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  background: #fff;

  @media screen and (max-width: 768px) {
    padding: 0 20px;
  }
`;

export const MapWrapper = styled.div`
  height: 100%;
  flex: 1;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 2px 4px 8px 0px rgba(46, 61, 73, 0.2);
`;

export const MarkerList = styled.div`
  width: 320px;
  padding: 10px 0 10px 50px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: column;

    p {
      font-size: 15.5px;
      font-weight: 500;
      color: #333;
      margin: 16px 0 12px 0;
      padding-bottom: 16px;
      border-bottom: 1px solid #eee;

      span {
        color: #777;
        font-size: 13px;
        font-weight: 400;
      }
    }

    .MuiFormControlLabel-label {
      width: 100%;
      display: flex;
      align-items: center;

      svg {
        margin-right: 7px;
      }
    }

    .MuiFormControlLabel-labelPlacementStart {
      margin-left: 0 !important;
    }
  }

  h4 {
    font-weight: 500;
    color: #777;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
