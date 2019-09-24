import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import Radio from '~/components/Radio';
import Input from '~/components/Input';
import Switch from '~/components/Switch';

import { Container, Label } from './styles';

import { optionsParticulars, allParticulars } from '~/services/fakeData';

import Picker from '~/components/_admin/Picker';

export default function Particulars({ onClose, open, values, setFieldValue }) {
  const path = useMemo(() => values.allParticulars, [values.allParticulars]);

  if (!open) return null;

  const renderParticular = ({ name, label, type, placeholder }) => {
    if (type === 'bool')
      return (
        <Switch
          style={{ background: 'blue' }}
          key={name}
          title={label}
          value={path[name]}
          setValue={value => setFieldValue(`allParticulars.${name}`, value)}
        />
      );

    if (type === 'range')
      return (
        <Radio
          key={name}
          label={label}
          options={optionsParticulars}
          style={{ marginBottom: 10 }}
          showClear
          checked={path[name]}
          setChecked={value => setFieldValue(`allParticulars.${name}`, value)}
        />
      );

    if (type === 'number')
      return (
        <Input
          key={name}
          type={type}
          label={label}
          placeholder={placeholder}
          value={path[name]}
          setValue={value => setFieldValue(`allParticulars.${name}`, value)}
        />
      );
  };

  return (
    <Picker title="Todas características" onClose={onClose} path={path}>
      <Container>
        {allParticulars.map(scopeParticular => (
          <span key={scopeParticular.label}>
            <Label>{scopeParticular.label}</Label>

            {scopeParticular.particulars.map(renderParticular)}
          </span>
        ))}
      </Container>
    </Picker>
  );
}

Particulars.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  values: PropTypes.shape().isRequired,
  setFieldValue: PropTypes.func.isRequired,
};
