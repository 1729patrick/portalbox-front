const styles = {
  option: (provided, state) => {
    return {
      ...provided,
      borderBottom: '1px solid #eee',
      color: state.isSelected ? '#fff' : '#444',
      backgroundColor: state.isSelected
        ? 'rgb(239,108,0)'
        : state.isFocused
        ? '#eee'
        : 'transparent',
      padding: 14,
      cursor: 'pointer',

      '&:active': {
        background: state.isSelected ? 'rgb(239,108,0)' : '#fff',
      },
    };
  },

  menu: (provided, state) => ({
    ...provided,
    margin: 0,
    borderRadius: state.selectProps.menuIsOpen ? '0 0 4px 4px' : 4,
    boxShadow: '0 15px 40px rgba(0, 0, 0, 0.2)',
  }),

  indicatorSeparator: provided => ({
    ...provided,
    background: 'transparent',
  }),
  menuList: (provided, state) => ({
    ...provided,
    margin: 0,
    padding: 0,
    borderRadius: state.selectProps.menuIsOpen ? '0 0 4px 4px' : 4,
    border: 'none',
  }),

  control: (_, state) => ({
    height: 44,
    display: 'flex',
    border: '1px solid #ddd',
    borderRadius: state.selectProps.menuIsOpen ? '4px 4px 0 0' : 4,
    boxShadow: state.selectProps.menuIsOpen && '0 15px 40px rgba(0, 0, 0, 0.2)',
    cursor: 'pointer',
  }),

  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition, border: 'none' };
  },
};

export default styles;
