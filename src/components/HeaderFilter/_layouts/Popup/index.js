import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { Container, Content, ClearButton, SaveButton } from './styles';

import { saveFilterRequest } from '~/store/modules/filter/actions';

export default function PopupLayout({
  label,
  children,
  onClick,
  onClear,
  showClear,
}) {
  const dispatch = useDispatch();

  const handleSave = () => {
    dispatch(saveFilterRequest());
  };

  const handleClear = () => {
    setTimeout(() => {
      onClear();
    }, 0);
  };

  return (
    <Container>
      <Content onClickCapture={onClick}>
        <label>{label}</label>

        {children}

        {showClear && (
          <ClearButton type="button" onClick={handleClear}>
            Limpar
          </ClearButton>
        )}
      </Content>

      <SaveButton type="button" onClick={handleSave}>
        Salvar
      </SaveButton>
    </Container>
  );
}

PopupLayout.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  showClear: PropTypes.bool,
};

PopupLayout.defaultProps = {
  showClear: false,
};
