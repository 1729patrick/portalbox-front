import React from 'react';
import PropTypes from 'prop-types';
import { useDrop } from 'react-dnd';
import update from 'immutability-helper';

import { Images } from './styles';
import ImageCard from '../ImageCard';

export default function DragAndDrop({
  cards,
  setCards,
  handleDescriptionChange,
  handleFileRemove,
}) {
  const findCard = id => {
    const card = cards.filter(c => `${c.id}` === id)[0];
    return {
      card,
      index: cards.indexOf(card),
    };
  };

  const moveCard = (id, atIndex) => {
    const { card, index } = findCard(id);
    setCards(
      update(cards, {
        $splice: [[index, 1], [atIndex, 0, card]],
      })
    );
  };

  const [, drop] = useDrop({ accept: 'card' });

  const renderImage = image => (
    <ImageCard
      key={image.id}
      id={String(image.id)}
      moveCard={moveCard}
      findCard={findCard}
      image={image}
      handleDescriptionChange={handleDescriptionChange}
      handleFileRemove={handleFileRemove}
    />
  );

  return <Images ref={drop}>{cards.map(image => renderImage(image))}</Images>;
}

DragAndDrop.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  setCards: PropTypes.func.isRequired,
  handleDescriptionChange: PropTypes.func.isRequired,
  handleFileRemove: PropTypes.func.isRequired,
};
