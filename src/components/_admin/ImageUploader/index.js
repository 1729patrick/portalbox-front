import React, { useState, useMemo, useEffect, useRef } from 'react';
import { useDropzone } from 'react-dropzone';
import { MdModeEdit, MdRemoveCircle, MdClose } from 'react-icons/md';
import { useField } from '@rocketseat/unform';

import {
  Container,
  DragAndDrop,
  Image,
  SaveButton,
  Images,
  Dropzone,
  ImageSmall,
} from './styles';

export default function ImageUploader({ name, ...rest }) {
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
        return { ...file, description, preview: URL.createObjectURL(file) };
      });

      setImages([...images, ...newimages]);
    },
  });

  const handleDescriptionChange = (e, index) => {
    const description = e.target.value;

    setImages(
      images.map((file, i) => (i === index ? { ...file, description } : file))
    );
  };

  const handleFileRemove = index => {
    setImages(images.filter((_, i) => i !== index));
  };

  const handleSave = () => {
    setImagesSaved(images);
    setUploaderOpen(false);
  };

  if (!uploaderOpen) {
    return imagesSaved.length ? (
      <>
        <input ref={ref} hidden data-images={imagesSaved} />

        <Images onClick={() => setUploaderOpen(true)}>
          {imagesSaved.map((image, index) => (
            <ImageSmall key={index} source={image.preview}>
              <div />

              <h3>{image.description}</h3>
            </ImageSmall>
          ))}
        </Images>
        {error}
      </>
    ) : (
      <Images>
        <Dropzone {...getRootProps({ className: 'dropzone' })}>
          <input {...getInputProps()} />
          <p>Arraste as fotos ou clique aqui para selecionar</p>
        </Dropzone>
      </Images>
    );
  }

  return (
    <Container>
      <DragAndDrop>
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

        <aside>
          {images.map((file, index) => (
            <div key={index}>
              {images.length > 1 && (
                <MdRemoveCircle
                  color="#d50000"
                  size={24}
                  onClick={() => handleFileRemove(index)}
                />
              )}

              <Image source={file.preview} />

              <span>
                <p>
                  <MdModeEdit color="#333" size={15} /> Descrição
                </p>
                <textarea
                  value={file.description}
                  onChange={e => handleDescriptionChange(e, index)}
                />
              </span>
            </div>
          ))}
        </aside>
      </DragAndDrop>
    </Container>
  );
}
