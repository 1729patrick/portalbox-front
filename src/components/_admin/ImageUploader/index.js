import React, { useState, useMemo } from 'react';
import { useDropzone } from 'react-dropzone';
import { MdModeEdit, MdRemoveCircle, MdClose } from 'react-icons/md';

import Slider from '~/components/Slider';
import {
  Container,
  DragAndDrop,
  Image,
  SaveButton,
  Images,
  ImageSlider,
  Dropzone,
} from './styles';

export default function ImageUploader({ onSave, onClose }) {
  const [images, setImages] = useState([]);
  const [uploaderOpen, setUploaderOpen] = useState(false);

  const imagesSize = useMemo(() => {
    const { length } = images;

    if (!length) {
      return null;
    }

    return length > 1 ? `${length} fotos` : `${length} foto`;
  }, [images]);

  const handleDropImage = acceptedimages => {
    setUploaderOpen(true);

    const newimages = acceptedimages.map(file => {
      let [, ...description] = file.name.split('.').reverse();
      description = description.reverse().join('.');
      return { ...file, description, preview: URL.createObjectURL(file) };
    });

    setImages([...images, ...newimages]);
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: handleDropImage,
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

  if (!uploaderOpen) {
    return (
      <Images>
        {images.length ? (
          <Slider>
            {images.map((image, index) => (
              <ImageSlider key={index} source={image.preview} />
            ))}
          </Slider>
        ) : (
          <Dropzone {...getRootProps({ className: 'dropzone' })}>
            <input {...getInputProps()} />
            <p>Arraste as fotos ou clique aqui para selecionar</p>
          </Dropzone>
        )}
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
              <SaveButton
                text="Salvar"
                onClick={() => setUploaderOpen(false)}
              />
            </span>
          )}
        </header>

        <aside>
          {images.map((file, index) => (
            <div key={index}>
              <MdRemoveCircle
                color="#d50000"
                size={24}
                onClick={() => handleFileRemove(index)}
              />

              <Image source={file.preview} />

              <span>
                <p>
                  <MdModeEdit color="#444" size={15} /> Descrição
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
