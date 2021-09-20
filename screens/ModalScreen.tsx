import * as React from 'react';

import AddPartyForm from '../components/form/AddPartyForm';

export default function ModalScreen({title='Modal'} : {title: string}) {
  return (
      <AddPartyForm />
  );
};
