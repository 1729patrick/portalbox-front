import React from 'react';

// import { Container } from './styles';

import MyCompany from './Cards/MyCompany';
import Address from './Cards/Address';
import Phones from './Cards/Phones';

export default function Company() {
  return (
    <div>
      <MyCompany />
      <Address />
      <Phones />
    </div>
  );
}
