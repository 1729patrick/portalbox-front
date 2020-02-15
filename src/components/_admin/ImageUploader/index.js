import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useDropzone } from 'react-dropzone';
import { MdClose } from 'react-icons/md';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import {
  Container,
  DragAndDrop1,
  SaveButton,
  Images,
  Dropzone,
  ImageSmall,
} from './styles';

import DragAndDrop from './DragAndDrop';

export default function ImageUploader({ images, setImages }) {
  const [uploaderOpen, setUploaderOpen] = useState(false);
  const [imagesLocal, setImagesLocal] = useState(images);

  const imagesSize = useMemo(() => {
    const { length } = imagesLocal;

    if (!length) {
      return null;
    }

    return length > 1 ? `${length} fotos` : `${length} foto`;
  }, [imagesLocal]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: acceptedimages => {
      setUploaderOpen(true);

      const newimages = acceptedimages.map(image => {
        let [, ...description] = image.name.split('.').reverse();
        description = description.reverse().join('.');
        return {
          ...image,
          description,
          file: URL.createObjectURL(image),
          id: (Math.random() * 10000).toFixed(0),
          image,
        };
      });

      setImagesLocal([...imagesLocal, ...newimages]);
    },
  });

  const handleDescriptionChange = (e, id) => {
    const description = e.target.value;

    setImagesLocal(
      imagesLocal.map(image =>
        image.id === id ? { ...image, description } : image
      )
    );
  };

  const handleFileRemove = id => {
    setImagesLocal(imagesLocal.filter(image => image.id !== id));
  };

  const handleSave = () => {
    setUploaderOpen(false);

    setImages(imagesLocal);
  };

  const handleClose = () => {
    setUploaderOpen(false);
    setImagesLocal(images);
  };

  const getContent = () => {
    if (images.length)
      return (
        <Images onClick={() => setUploaderOpen(true)}>
          {images.map((image, index) => (
            <ImageSmall key={index} source={image.file}>
              <div />
              <h3>{image.description}</h3>
            </ImageSmall>
          ))}
        </Images>
      );

    return (
      <Images>
        <Dropzone {...getRootProps({ className: 'dropzone' })}>
          <input {...getInputProps()} />
          <p>Arraste as fotos ou clique aqui para selecionar</p>
        </Dropzone>
      </Images>
    );
  };

  if (!uploaderOpen) {
    return getContent();
  }

  return (
    <Container>
      <DragAndDrop1>
        <header>
          <section>
            <h1>Fotos do imóvel</h1>
            <MdClose color="#555" size={35} onClick={handleClose} />
          </section>

          <Dropzone {...getRootProps({ className: 'dropzone' })}>
            <input {...getInputProps()} />
            <p>Arraste as fotos ou clique aqui para selecionar</p>
          </Dropzone>

          {imagesSize && (
            <span>
              <h2>{imagesSize}</h2>
              <SaveButton type="button" text="Salvar" onClick={handleSave} />
            </span>
          )}
        </header>

        <DndProvider backend={HTML5Backend}>
          <DragAndDrop
            cards={imagesLocal}
            setCards={setImagesLocal}
            handleDescriptionChange={handleDescriptionChange}
            handleFileRemove={handleFileRemove}
          />
        </DndProvider>
      </DragAndDrop1>
    </Container>
  );
}

ImageUploader.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  setImages: PropTypes.func.isRequired,
};
