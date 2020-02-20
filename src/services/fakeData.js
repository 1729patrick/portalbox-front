import bed from '~/assets/carac/bed.svg';
import car from '~/assets/carac/car.svg';
import move from '~/assets/carac/move.svg';
import shower from '~/assets/carac/shower.svg';
import dumbbell from '~/assets/carac/dumbbell.svg';
import gourmetSpace from '~/assets/carac/gourmetSpace.svg';
import partyRoom from '~/assets/carac/partyRoom.svg';

import {
  setFinalityFilter,
  saveFilterRequest,
} from '~/store/modules/filter/actions';

export const links = [
  {
    title: 'Alugar imóvel',
    to: '/imoveis',
    activeClass: '',
    onClick: ({ dispatch, history }) => {
      if (history.location.pathname !== '/imoveis') {
        history.push('/imoveis');
      }

      dispatch(
        setFinalityFilter({ finality: { value: 'rent', title: 'Alugar' } })
      );
      dispatch(saveFilterRequest());
    },
  },

  {
    title: 'Comprar imóvel',
    to: '/imoveis',
    activeClass: '',
    onClick: ({ dispatch, history }) => {
      if (history.location.pathname !== '/imoveis') {
        history.push('/imoveis');
      }

      dispatch(
        setFinalityFilter({ finality: { value: 'sale', title: 'Comprar' } })
      );
      dispatch(saveFilterRequest());
    },
  },
  {
    title: 'Anunciar meu Imóvel',
    to: '',
    activeClass: 'active',
    onClick: () => {},
  },
  {
    title: 'Contato',
    to: '/contato',
    activeClass: 'active',
    onClick: ({ history }) => {
      history.push('/contato');
    },
  },
];

export const optionsParticular = [
  { _id: 1, title: 'Quartos', type: 'range', name: 'bedroom' },
  { _id: 2, title: 'Banheiros', type: 'range', name: 'bathroom' },
  { _id: 4, title: 'Garagens', type: 'range', name: 'garage' },
  { _id: 5, title: 'Mobiliado', type: 'bool', name: 'furnished' },
  { _id: 6, title: 'Jardim', type: 'bool', name: 'garden' },
];

export const places = [
  { id: 10, title: 'Escola', color: '#8E24AA' },
  { id: 5, title: 'Hospital', color: '#0B8043' },
  { id: 9, title: 'Restaurante', color: '#E4C441' },
  { id: 4, title: 'Acadêmia', color: '#D50000' },
  { id: 11, title: 'Supermercado', color: '#9E69AF' },
  { id: 2, title: 'Banco', color: '#AD1457"' },
  { id: 1, title: 'Padaria', color: '#3F51B5' },
  { id: 8, title: 'Farmácia', color: '#795548' },
  { id: 3, title: 'Bar', color: '#7986CB' },
  { id: 6, title: 'Parque', color: '#F09300' },
  { id: 7, title: 'Estacionamento', color: '#D81B60' },
];

export const optionsParticulars = [
  { label: '1', value: 1 },
  { label: '2', value: 2 },
  { label: '3', value: 3 },
  { label: '4', value: 4 },
  { label: '5', value: 5 },
];

export const sessionsImmobiles = [
  { name: 'Novos', _id: 1, key: 'news' },
  { name: 'Destaques de venda', _id: 2, key: 'saleHighlights' },
  { name: 'Destaques de locação', _id: 3, key: 'rentalHighlights' },
  { name: 'Ofertas da semana', _id: 4, key: 'offersOfWeek' },
  // { name: 'Mais vistos da semana', _id: 5, key: 'moreViewedOfWeek' },
];

export const getParticular = ({ title, pos, value }) => {
  const particulars = {
    bedroom: {
      true: '%@%$% quartos',
      false: '%@%$% quarto',
      icon: bed,
    },
    bathroom: {
      true: '%@%$% banheiros',
      false: '%@%$% banheiro',
      icon: shower,
    },
    garage: { true: '%@%$% vagas', false: '%@%$% vaga', icon: car },
    totalArea: {
      true: 'Área total: %@%$% m²',
      false: 'Área total: %@%$% m²',
      simple: '%@%$% m²',
      icon: move,
    },
    academy: { true: 'Academias', false: 'Academia', icon: dumbbell },
    barbecueGrill: { true: 'Churrasqueiras', false: 'Churrasqueira', icon: '' },
    gourmetSpace: {
      true: 'Espaços Gourmet',
      false: 'Espaço Gourmet',
      icon: gourmetSpace,
    },
    garden: {
      true: 'Jardins',
      false: 'Jardim',
      icon: '',
    },
    pool: {
      true: 'Piscinas',
      false: 'Piscina',
      icon: '',
    },
    partyRoom: {
      true: 'Salões de festas',
      false: 'Salão de festas',
      icon: partyRoom,
    },
    gamesRoom: {
      true: 'Salões de jogos',
      false: 'Salão de jogos',
      icon: partyRoom,
    },
    airConditioning: {
      true: 'Ar-condicionado: %@%$%',
      false: 'Ar-condicionado',
    },
    elevator: {
      true: 'Elevadores',
      false: 'Elevador',
    },
    fireplace: {
      true: 'Lareiras',
      false: 'Lareira',
    },
    laundry: {
      true: 'Lavanderias',
      false: 'Lavanderia',
    },
    furnished: {
      true: 'Mobiliados',
      false: 'Mobiliado',
    },
    reception: {
      true: 'Recepções',
      false: 'Recepção',
    },
    porcelain: {
      true: 'Porcelanatos',
      false: 'Porcelanato',
    },
    laminateFlooring: {
      true: 'Pisos laminado',
      false: 'Piso laminado',
    },
    corner: {
      true: 'Imóvel de esquina',
      false: 'Imóvel de esquina',
    },
    gatedCommunity: {
      true: 'Condomínio fechado',
      false: 'Condomínio fechado',
    },
    intercom: {
      true: 'Interfones',
      false: 'Interfone',
    },
    security24h: {
      true: 'Segurança 24h',
      false: 'Segurança 24h',
    },
    alarm: {
      true: 'Alarmes',
      false: 'Alarme',
    },
    watchman: {
      true: 'Vigias',
      false: 'Vigia',
    },
    balconie: {
      true: 'Varandas: %@%$%',
      false: 'Varanda',
    },
    office: {
      true: 'Escritórios',
      false: 'Escritório',
    },
    diningRoom: {
      true: 'Sala de jantar',
      false: 'Sala de jantar',
    },
    buildingArea: {
      true: 'Área construida: %@%$% m²',
      false: 'Área construida: %@%$% m²',
    },
    area: { true: 'm²', false: 'm²', icon: move },
  };

  if (pos === 'simple' && !particulars[title][pos]) {
    return particulars[title][value > 1].replace('%@%$%', value);
  }

  if (particulars[title] && particulars[title][pos])
    return particulars[title][pos].replace('%@%$%', value);

  return null;
};

export const allParticulars = [
  {
    label: 'Lazer',
    particulars: [
      {
        label: 'Academia',
        name: 'academy',
        type: 'bool',
      },
      {
        label: 'Churrasqueira',
        name: 'barbecueGrill',
        type: 'bool',
      },
      {
        label: 'Espaço Gourmet',
        name: 'gourmetSpace',
        type: 'bool',
      },
      {
        label: 'Jardim',
        name: 'garden',
        type: 'bool',
      },
      {
        label: 'Piscina',
        name: 'pool',
        type: 'bool',
      },
      {
        label: 'Salão de festas',
        name: 'partyRoom',
        type: 'bool',
      },
      {
        label: 'Salão de jogos',
        name: 'gamesRoom',
        type: 'bool',
      },
    ],
  },
  {
    label: 'Comodidades',
    particulars: [
      {
        label: 'Ar-condicionado',
        name: 'airConditioning',
        type: 'range',
      },
      {
        label: 'Elevador',
        name: 'elevator',
        type: 'bool',
      },
      {
        label: 'Lareira',
        name: 'fireplace',
        type: 'bool',
      },
      {
        label: 'Lavanderia',
        name: 'laundry',
        type: 'bool',
      },
      {
        label: 'Mobiliado',
        name: 'furnished',
        type: 'bool',
      },
      {
        label: 'Recepção',
        name: 'reception',
        type: 'bool',
      },
      {
        label: 'Porcelanato',
        name: 'porcelain',
        type: 'bool',
      },
      {
        label: 'Piso laminado',
        name: 'laminateFlooring',
        type: 'bool',
      },
      {
        label: 'Imóvel de esquina',
        name: 'corner',
        type: 'bool',
      },
    ],
  },
  {
    label: 'Segurança',
    particulars: [
      {
        label: 'Condomínio fechado',
        name: 'gatedCommunity',
        type: 'bool',
      },
      {
        label: 'Interfone',
        name: 'intercom',
        type: 'bool',
      },
      {
        label: 'Segurança 24h',
        name: 'security24h',
        type: 'bool',
      },
      {
        label: 'Alarme',
        name: 'alarm',
        type: 'bool',
      },
      {
        label: 'Vigia',
        name: 'watchman',
        type: 'bool',
      },
    ],
  },
  {
    label: 'Cômodos',
    particulars: [
      {
        label: 'Varandas',
        name: 'balconie',
        type: 'range',
      },
      {
        label: 'Escritório',
        name: 'office',
        type: 'bool',
      },
      {
        label: 'Sala de jantar',
        name: 'diningRoom',
        type: 'bool',
      },
      {
        label: 'Área construida',
        name: 'buildingArea',
        type: 'number',
        placeholder: 'Digite o tamanho do imóvel',
      },
    ],
  },
];

export const getRate = title => {
  const rates = {
    condominium: 'Condomínio',
    iptu: 'IPTU',
    fireInsurance: 'Seguro de incêndio',
  };

  return rates[title];
};

export const typesPhone = [
  { _id: 'whatsapp', name: 'WhatsApp' },
  { _id: 'smartphone', name: 'Celular' },
  { _id: 'fixed', name: 'Fixo' },
];

export const typesEmail = [
  { _id: 'general', name: 'Geral' },
  { _id: 'rent', name: 'Locação' },
  { _id: 'sale', name: 'Venda' },
];
