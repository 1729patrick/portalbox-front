import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { Container, Content, ClearButton, SaveButton } from './styles';

import { saveFilterRequest } from '~/store/modules/filter/actions';

export default function PopupLayout({ label, children, onClick }) {
  const dispatch = useDispatch();

  const handleSave = () => {
    dispatch(saveFilterRequest());
  };

  return (
    <Container>
      <Content onClick={onClick}>
        <label>{label}</label>

        {children}
      </Content>

      <ClearButton type="button" className="clear">
        Limpar
      </ClearButton>
      <SaveButton type="button" onClick={handleSave} className="save">
        Salvar
      </SaveButton>
    </Container>
  );
}

PopupLayout.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
