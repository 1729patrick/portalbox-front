import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Container, Infos, ImagesWrapper } from './styles';

import Price from './Price';
import Maps from './Maps';
import Images from './Images';
import Financing from './Financing';
import Details from './Details';

import Preview from './Preview';

import api from '~/services/api';

export default function PlaceDetails({ match }) {
  const [preview, setPreview] = useState({});
  const [immobile, setImmobile] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadImmobile = async () => {
      const { _id } = match.params;

      const response = await api.get(`immobiles/${_id}/details`);

      setImmobile(response.data);

      setLoading(false);
    };

    loadImmobile();
  }, [match]);

  const handlePreviewOpen = (page, args) => {
    setPreview({
      isOpen: true,
      page,
      args,
    });
  };

  const openImage = imageIndex => {
    const defaultArgs = { location: immobile.map, images: immobile.images };

    handlePreviewOpen(
      'images',
      typeof imageIndex === 'number'
        ? {
            ...defaultArgs,
            initialImage: imageIndex,
          }
        : defaultArgs
    );
  };

  const openMap = () =>
    handlePreviewOpen('map', {
      location: immobile.map,
    });

  if (loading)
    return (
      <div
        style={{
          zIndex: 3,
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          background: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
          display: 'flex',
        }}
      >
        <CircularProgress style={{ color: '#ef6c00' }} />;
      </div>
    );

  return (
    <Container scrollDisabled={preview.isOpen}>
      <ImagesWrapper>
        <Images openPreview={openImage} immobile={immobile} />
      </ImagesWrapper>

      <Infos>
        <Details openPreview={openMap} immobile={immobile} />
        <Price immobile={immobile} />
      </Infos>

      <Maps openPreview={openMap} immobile={immobile} />

      <Financing immobile={immobile} />

      {preview.isOpen && (
        <Preview onClose={() => setPreview({})} {...preview} />
      )}
    </Container>
  );
}
