import React, { useState, useEffect, useCallback } from 'react';
import { FiX } from 'react-icons/fi';

import Card from '~/components/_admin/Card';
import Input from '~/components/Input';
import Select from '~/components/Select';

import { Mail } from './styles';
import { typesEmail } from '~/services/fakeData';

const showInPortalOptions = [
  { _id: true, name: 'Sim' },
  { _id: false, name: 'Não' },
];

export default function Emails({ values, setFieldValue, errors }) {
  const [emails, setEmails] = useState(
    values.emails.map(email => ({
      ...email,
      showInPortal: showInPortalOptions.find(
        ({ _id }) => _id === email.showInPortal
      ),
    }))
  );

  useEffect(() => {
    setFieldValue(
      'emails',
      emails.map(email => ({ ...email, showInPortal: email.showInPortal._id }))
    );
  }, [emails, setFieldValue]);

  const addEmail = useCallback(
    ({
      type = { _id: 'general', name: 'Geral' },
      email = '',
      showInPortal = { _id: false, name: 'Não' },
    }) => {
      setEmails(emails => [
        ...emails,
        {
          type,
          email,
          showInPortal,
        },
      ]);
    },
    []
  );

  useEffect(() => {
    if (values.emails.length === 0) addEmail({});
  }, [addEmail, values.emails.length]);

  const removeEmail = index => {
    setEmails(emails.filter((_, i) => i !== index));
  };

  const setValue = (index, field, value) => {
    setEmails(
      emails.map((p, i) => {
        if (i === index) return { ...p, [field]: value };
        return p;
      })
    );
  };

  const getError = (index, field) => {
    if (!errors.emails) {
      return '';
    }
    return errors.emails[index] ? errors.emails[index][field] : '';
  };

  return (
    <Card>
      <div>
        <h1>E-mails</h1>
      </div>

      {emails.map(({ email, type, showInPortal }, index) => (
        <Mail key={index}>
          <Input
            type="text"
            placeholder="Endereço de e-mail"
            value={email}
            setValue={value => setValue(index, 'email', value)}
            error={getError(index, 'email')}
          />

          <div>
            <Select
              placeholder="Tipo do telefone"
              selected={type}
              setSelected={selected => setValue(index, 'type', selected)}
              options={typesEmail}
              error={getError(index, 'type')}
            />
            <Select
              placeholder="Exibir no PORTAL?"
              label="Exibir no PORTAL?"
              value={showInPortal}
              setSelected={selected =>
                setValue(index, 'showInPortal', selected)
              }
              options={showInPortalOptions}
              error={getError(index, 'showInPortal')}
            />
          </div>
          <button type="button">
            <FiX color="#666" size={25} onClick={() => removeEmail(index)} />
            <p onClick={() => removeEmail(index)}>Excluir</p>
          </button>
        </Mail>
      ))}

      <button type="button" onClick={() => addEmail({})}>
        + Adicionar e-mail
      </button>
    </Card>
  );
}
