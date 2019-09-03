import React, { Fragment } from 'react';


import { Container, Label, Switch, Radio, Input } from './styles';

import { optionsParticulars } from '~/services/fakeData';

import Picker from '..';

import {allParticulars} from '~/services/fakeData';

export default function Particulars({ initialData, onClose, open , onSave}) {
  if (!open) return  null;

  const renderParticular = ({ name, label, type, placeholder,  }) => {
    if (type === 'bool')
      return (
        <Switch
          key={name}
          name={name}
          label={label}
          style={{ marginBottom: 10 }}
        />
      );

    if (type === 'range')
      return (
        <Radio
          key={name}
          name={name}
          label={label}
          options={optionsParticulars}
          optional={false}
          style={{ marginBottom: 10 }}
          showClear
        />
      );

    if (type === 'number')
      return (
        <Input
          key={name}
          type={type}
          name={name}
          label={label}
          placeholder={placeholder}
        />
      );
  };

  return (
    <Picker
    title="Todas características" 
    onClose={onClose}
    open={open}
    initialData={initialData}
    onSave={onSave}>
      <Container>
        {allParticulars.map(scopeParticular => (
          <Fragment key={scopeParticular.label}>
            <Label>{scopeParticular.label}</Label>

            <span>{scopeParticular.particulars.map(renderParticular)}</span>
          </Fragment>
        ))}

      </Container>
    </Picker>
  );
}
