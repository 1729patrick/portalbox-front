import styled from 'styled-components';
import theme from '~/styles/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.div`
  font-weight: 500;
  font-size: 15px;
  color: #444;
  margin-bottom: 3px;
  justify-content: space-between;
  display: flex;

  label span {
    color: #777;
    font-weight: 500;
    margin-left: 4px;
    font-size: 13px;
  }

  > span {
    color: #d50000 !important;
  }
`;



const styles = {
  option: (provided, state) => {
    return {
      ...provided,
      borderBottom: '1px solid #eee',
      color: state.isSelected ? theme.select.color : '#444',
      backgroundColor: state.isSelected
        ? theme.select.backgroundColor
        : state.isFocused
        ? '#eee'
        : 'transparent',
      padding: 14,
      cursor: 'pointer',

      '&:active': {
        background: state.isSelected ? theme.select.backgroundColor : '#fff',
      },
    };
  },

  menu: (provided, state) => ({
    ...provided,
    margin: 0,
    borderRadius: state.selectProps.menuIsOpen ? '0 0 6px 6px' : 6,
  }),

  indicatorSeparator: provided => ({
    ...provided,
    background: 'transparent',
  }),
  menuList: (provided, state) => ({
    ...provided,
    margin: 0,
    padding: 0,
    borderRadius: state.selectProps.menuIsOpen ? '0 0 6px 6px' : 6,
    border: 'none',
  }),

  control: (_, state) => ({
    height: 37,
    display: 'flex',
    border: '1px solid #ccc',
    borderRadius: state.selectProps.menuIsOpen ? '6px 6px 0 0' : 6,
    cursor: 'pointer',
  }),

  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition, border: 'none' };
  },
};

export default styles;
