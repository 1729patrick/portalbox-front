import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form } from '@rocketseat/unform';

import { Container, Card, SubmitButton } from './styles';

import CreateImmobileSchema from '~/schemas/CreateImmobileSchema';

import ImagesUploader from '~/components/_admin/ImageUploader';

import { createImmobilesRequest } from '~/store/modules/immobiles/actions'


import Rate from './Pickers/Rate';

import Address from './Cards/Address'
import Particulars from './Cards/Particulars'
import Map from './Cards/Map'
import Price from './Cards/Price'
import Owner from './Cards/Owner'
import Config from './Cards/Config'

export default function New() {
  const dispatch = useDispatch()

  const [images, setImages] = useState([])
  const [sessions, setSessions] = useState([])
  const [ showRate, setShowRate] = useState(false)

  const handleSessionChange = (_id)=> {
    const index = sessions.indexOf(_id) ;
      if(index=== -1){
        return setSessions([...sessions, _id])
      }

      setSessions(sessions.filter((_, i) => i !==index))
  }

  return (
    <Container>
      <Form
        onSubmit={data => dispatch(createImmobilesRequest({...data, sessions}, images))}
        schema={CreateImmobileSchema}
      >
        <Card><Address /></Card>

        <Card><Particulars></Particulars></Card>

        <Card><Map></Map></Card>

        <Card><Price openRatePicker={()=> setShowRate(true)}></Price></Card>

        <Card>
          <div>
            <h1>Fotos</h1>
            <p>Adicione ao menos uma foto</p>
          </div>

          <ImagesUploader name="images" onSave={setImages}/>
        </Card>

        <Card><Owner></Owner></Card>

        <Card>
        <Config sessions={sessions} handleSessionChange={handleSessionChange}></Config>

        </Card>


        <SubmitButton text="Salvar" />
      </Form>

      {showRate && <Rate onClose={()=>setShowRate(false)}></Rate>}
    </Container>
  );
}
