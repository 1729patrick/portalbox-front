/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { FiX } from 'react-icons/fi';

import Input from '~/components/Input';
import Select from '~/components/Select';

import { CardMails, Mail } from './styles';
import { typesEmail } from '~/services/fakeData';

const showInPortalOptions = [
  { _id: true, name: 'Sim' },
  { _id: false, name: 'Não' },
];

const Mails = ({
  values,
  setFieldValue,
  errors,
  setFieldTouched,
  touched,
  formSubmitted,
}) => {
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
      setEmails(e => [
        ...e,
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

  const handleValueChange = (index, field, value) => {
    setEmails(
      emails.map((p, i) => {
        if (i === index) return { ...p, [field]: value };
        return p;
      })
    );
  };

  const getStatus = (list, index, field) => {
    if (!list.emails) {
      return null;
    }
    return list.emails[index] ? list.emails[index][field] : null;
  };

  const getError = () =>
    typeof errors.emails === 'string' ? errors.emails : '';

  return (
    <CardMails>
      <div>
        <h1>E-mails</h1>

        <span>{getError()}</span>
      </div>

      {emails.map(({ email, type, showInPortal }, index) => (
        <Mail key={String(index)}>
          <Input
            type="text"
            placeholder="Endereço de e-mail"
            value={email}
            setValue={value => handleValueChange(index, 'email', value)}
            error={getStatus(errors, index, 'email')}
            setTouched={() => {
              setFieldTouched(String(`emails[${index}].email`));
            }}
            touched
            formSubmitted={formSubmitted}
          />

          <div>
            <Select
              placeholder="Tipo do telefone"
              selected={type}
              setSelected={selected =>
                handleValueChange(index, 'type', selected)
              }
              options={typesEmail}
              error={getStatus(errors, index, 'type')}
              setTouched={() => {
                setFieldTouched(String(`emails[${index}].type`));
              }}
              touched
              formSubmitted={formSubmitted}
            />
            <Select
              placeholder="Exibir no PORTAL?"
              label="Exibir no PORTAL?"
              value={showInPortal}
              setSelected={selected =>
                handleValueChange(index, 'showInPortal', selected)
              }
              options={showInPortalOptions}
              error={getStatus(errors, index, 'showInPortal')}
              setTouched={() => {
                setFieldTouched(String(`emails[${index}].showInPortal`));
              }}
              touched
              formSubmitted={formSubmitted}
            />
          </div>
          <button type="button">
            <FiX color="#666" size={25} onClick={() => removeEmail(index)} />
            <span onClick={() => removeEmail(index)}>Excluir</span>
          </button>
        </Mail>
      ))}

      <button type="button" onClick={() => addEmail({})}>
        + Adicionar e-mail
      </button>
    </CardMails>
  );
};

Mails.propTypes = {
  values: PropTypes.shape({
    emails: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.shape({
          _id: PropTypes.string,
          name: PropTypes.string,
        }),
        showInPortal: PropTypes.bool,
        email: PropTypes.string,
      })
    ).isRequired,
  }).isRequired,
  setFieldValue: PropTypes.func.isRequired,
  errors: PropTypes.shape({
    emails: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(
        PropTypes.shape({
          type: PropTypes.string,
          showInPortal: PropTypes.string,
          email: PropTypes.string,
        })
      ),
    ]),
  }),
  setFieldTouched: PropTypes.func.isRequired,
  touched: PropTypes.shape({
    emails: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.bool,
        showInPortal: PropTypes.bool,
        email: PropTypes.bool,
      })
    ),
  }).isRequired,
  formSubmitted: PropTypes.bool.isRequired,
};

Mails.defaultProps = {
  errors: {
    emails: {
      type: '',
      showInPortal: '',
      email: '',
    },
  },
};

export default Mails;
