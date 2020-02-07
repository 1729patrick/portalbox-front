import styled from 'styled-components';
import NumberFormat from 'react-number-format';

export const Content = styled.div`
  overflow-y: auto;
  max-height: 25em;

  > span {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: 6px;
    margin: 20px 0;
  }

  .MuiSlider-root {
    width: calc(100% - 16px);
    color: ${props => props.theme.headerFilter.price.range.backgroundColor};
  }

  .MuiSlider-valueLabel {
    left: calc(-50% + -20px);

    span {
      width: 74px;
      height: 74px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      font-family: 'Google Sans', Roboto, Arial, Helvetica, sans-serif !important;
    }
  }

  .MuiSlider-thumb:hover,
  .Mui-focusVisible,
  .MuiSlider-active {
    > span {
      transform: scale(1) translateY(-60px) !important;
    }
  }

  .MuiSlider-thumb {
    height: 18px;
    width: 18px;
    margin-top: -8px;
  }

  .MuiSlider-track,
  .MuiSlider-rail {
    height: 3px;
  }
`;

export const Values = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Input = styled(NumberFormat)`
  text-align: center;
  height: 40px;
  border: none;
  background: #eee;
  border-radius: 50px;
  width: 49%;
  font-size: 14px;
  padding: 0 13px;
  font-weight: 500;
  color: #333;
`;
