import React from 'react';
import PropTypes from 'prop-types';

import { Title, City, Neighborhoods } from './styles';

import Card from '~/components/_admin/Card';
import Input from '~/components/Input';

const List = ({ cities, handleNewCityClick, handleEditCityClick }) => {
  return (
    <Card>
      <Title>
        <h1>Cidades e Bairros</h1>
        <button type="button" onClick={handleNewCityClick}>
          Nova cidade
        </button>
      </Title>

      {cities.map(city => (
        <City key={city.name}>
          <span>
            <h2>{city.name}</h2>
            <button type="button" onClick={() => handleEditCityClick(city)}>
              Editar cidade
            </button>
          </span>

          <Neighborhoods>
            <label>Bairros</label>

            {city.neighborhoods.map(neighborhood => (
              <Input
                key={neighborhood.name}
                disabled
                placeholder="Digite o nome do bairro"
                value={neighborhood.name}
              />
            ))}
          </Neighborhoods>
        </City>
      ))}
    </Card>
  );
};

List.propTypes = {
  cities: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      neighborhoods: PropTypes.arrayOf(
        PropTypes.shape({
          _id: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
        })
      ),
    })
  ).isRequired,
  handleNewCityClick: PropTypes.func.isRequired,
  handleEditCityClick: PropTypes.func.isRequired,
};

export default List;
