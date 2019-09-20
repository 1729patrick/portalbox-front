import React from 'react';
import PropTypes from 'prop-types';
import { useDrag, useDrop } from 'react-dnd';
import { MdModeEdit, MdRemoveCircle } from 'react-icons/md';

import { Card, Image } from './styles';

export default function ImageCard({
  id,
  image,
  handleFileRemove,
  handleDescriptionChange,
  moveCard,
  findCard,
}) {
  const originalIndex = findCard(id).index;
  const [{ isDragging }, drag] = useDrag({
    item: { type: 'card', id, originalIndex },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const [, drop] = useDrop({
    accept: 'card',
    canDrop: () => false,
    hover({ id: draggedId }) {
      if (draggedId !== id) {
        const { index: overIndex } = findCard(id);
        moveCard(draggedId, overIndex);
      }
    },
  });
  const opacity = isDragging ? 0 : 1;
  return (
    <Card ref={node => drag(drop(node))} style={{ opacity }}>
      <MdRemoveCircle
        color="#d50000"
        size={24}
        onClick={() => handleFileRemove(id)}
      />

      <Image source={image.file} />

      <span>
        <p>
          <MdModeEdit color="#333" size={15} /> Descrição
        </p>

        <textarea
          value={image.description}
          onChange={e => handleDescriptionChange(e, id)}
        />
      </span>
    </Card>
  );
}

ImageCard.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.shape().isRequired,
  handleFileRemove: PropTypes.func.isRequired,
  handleDescriptionChange: PropTypes.func.isRequired,
  moveCard: PropTypes.func.isRequired,
  findCard: PropTypes.func.isRequired,
};
