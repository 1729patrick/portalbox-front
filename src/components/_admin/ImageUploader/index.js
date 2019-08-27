import React, { useState, useMemo, useEffect, useRef } from 'react';
import { useDropzone } from 'react-dropzone';
import { MdClose } from 'react-icons/md';
import { useField } from '@rocketseat/unform';
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

export default function ImageUploader({ name, onSave }) {
  const ref = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  const [uploaderOpen, setUploaderOpen] = useState(false);
  const [images, setImages] = useState(defaultValue || []);
  const [imagesSaved, setImagesSaved] = useState(defaultValue || []);

  useEffect(() => setImages(imagesSaved), [imagesSaved, uploaderOpen]);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'dataset.images',
    });
  }, [ref.current, fieldName]); // eslint-disable-line

  const imagesSize = useMemo(() => {
    const { length } = images;

    if (!length) {
      return null;
    }

    return length > 1 ? `${length} fotos` : `${length} foto`;
  }, [images]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: acceptedimages => {
      setUploaderOpen(true);

      const newimages = acceptedimages.map(file => {
        let [, ...description] = file.name.split('.').reverse();
        description = description.reverse().join('.');

        return {
          ...file,
          description,
          preview: URL.createObjectURL(file),
          id: (Math.random() * 10000).toFixed(0),
          file,
        };
      });
      setImages([...images, ...newimages]);
    },
  });

  const handleDescriptionChange = (e, id) => {
    const description = e.target.value;

    setImages(
      images.map(image => (image.id === id ? { ...image, description } : image))
    );
  };

  const handleFileRemove = id => {
    setImages(images.filter(image => image.id !== id));
  };

  const handleSave = () => {
    setImagesSaved(images);
    setUploaderOpen(false);

    onSave(images)
  };

  const getContent = () =>
    imagesSaved.length ? (
      <Images onClick={() => setUploaderOpen(true)}>
        {imagesSaved.map((image, index) => (
          <ImageSmall key={index} source={image.preview}>
            <div />

            <h3>{image.description}</h3>
          </ImageSmall>
        ))}
      </Images>
    ) : (
      <Images>
        <Dropzone {...getRootProps({ className: 'dropzone' })}>
          <input {...getInputProps()} />
          <p>Arraste as fotos ou clique aqui para selecionar</p>
        </Dropzone>
      </Images>
    );

  if (!uploaderOpen) {
    return (
      <>
        <input ref={ref} hidden data-images={imagesSaved.length} />
        {error}

        {getContent()}
      </>
    );
  }

  return (
    <Container>
      <DragAndDrop1>
        <header>
          <section>
            <h1>Fotos do imóvel</h1>
            <MdClose
              color="#555"
              size={35}
              onClick={() => setUploaderOpen(false)}
            />
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
            cards={images}
            setCards={setImages}
            handleDescriptionChange={handleDescriptionChange}
            handleFileRemove={handleFileRemove}
          />
        </DndProvider>
      </DragAndDrop1>
    </Container>
  );
}
