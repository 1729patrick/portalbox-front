import React, { useState, useEffect, useMemo } from 'react';

import { Container, Infos, ImagesWrapper } from './styles';

import Price from './components/Price';
import Maps from './components/Maps';
import Images from './components/Images';
import Financing from './components/Financing';
import Details from './components/Details';
import Preview from './components/Preview';

import Loading from '~/components/Loading';

import api from '~/services/api';

export default function ImmobileDetails({ match }) {
  const [preview, setPreview] = useState({});
  const [immobile, setImmobile] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadImmobile = async () => {
      const { _id } = match.params;

      const response = await api.get(`public/immobiles/${_id}/details`);

      setImmobile(response.data);

      setLoading(false);
    };

    loadImmobile();
  }, [match]);

  const address = useMemo(() => {
    const { address = {} } = immobile;

    const number = address.number ? `, ${address.number}` : '';
    const neighborhood = address.neighborhood
      ? `, ${address.neighborhood.name}`
      : '';
    const city = address.city ? `${address.city.name} - ` : '';

    return `${address.street}${neighborhood}${number} - ${city}SC`;
  }, [immobile]);

  const handlePreviewOpen = (page, args) => {
    setPreview({
      isOpen: true,
      page,
      args,
    });
  };

  const getArgsPreview = () => {
    return {
      location: immobile.map,
      images: immobile.images,
      address,
    };
  };

  const openImage = imageIndex => {
    handlePreviewOpen(
      'images',
      typeof imageIndex === 'number'
        ? {
            ...getArgsPreview(),
            initialImage: imageIndex,
          }
        : getArgsPreview()
    );
  };

  const openMap = () => handlePreviewOpen('map', getArgsPreview());

  if (loading) return <Loading />;

  return (
    <Container scrollDisabled={preview.isOpen}>
      <ImagesWrapper>
        <Images openPreview={openImage} immobile={immobile} />
      </ImagesWrapper>

      <Infos>
        <Details openPreview={openMap} immobile={immobile} address={address} />
        <Price immobile={immobile} />
      </Infos>

      <Maps openPreview={openMap} address={address} />

      <Financing immobile={immobile} />

      {preview.isOpen && (
        <Preview onClose={() => setPreview({})} {...preview} />
      )}
    </Container>
  );
}
