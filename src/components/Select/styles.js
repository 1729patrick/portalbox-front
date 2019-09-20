import styled from 'styled-components';
// import theme from '~/styles/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.div`
  font-weight: 500;
  font-size: 15px;
  color: #333;
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

export const GroupLabel = styled.div`
  display: flex;
  align-items: center;

  p {
    color: rgb(239, 108, 0);
  }

  span {
    line-height: 20px;
    text-align: center;
    margin-left: auto;
    color: #444;
    background: #eee;
    border-radius: 50%;
    width: 20px;
    height: 20px;
  }
`;

const styles = {
  option: (provided, state) => {
    return {
      ...provided,
      borderBottom: '1px solid #f1f1f1',
      // color: state.isSelected ? theme.select.color : '#333',
      color: state.isSelected ? '#fff' : '#333',
      backgroundColor: state.isSelected
        ? // ? theme.select.backgroundColor
          'rgb(239,108,0)'
        : state.isFocused
        ? '#f1f1f1'
        : 'transparent',
      padding: '10px 15px',
      cursor: 'pointer',
      fontWeight: 500,

      '&:active': {
        background: state.isSelected ? 'rgb(239,108,0)' : '#fff',
      },
    };
  },

  menu: (provided, state) => ({
    ...provided,
    marginTop: 0,
    border: 'none',
    boxShadow: '0 0 30px 6px rgba(31, 51, 73, 0.1)',
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
  }),

  control: (_, state) => ({
    height: 39,
    display: 'flex',
    border: '1px solid #ddd',
    borderRadius: state.selectProps.menuIsOpen ? '6px 6px 0 0' : 6,
    cursor: 'pointer',
    fontWeight: 500,
  }),

  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition, border: 'none' };
  },
};
export default styles;
