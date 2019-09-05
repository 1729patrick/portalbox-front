import bed from '~/assets/carac/bed.svg';
import car from '~/assets/carac/car.svg';
import move from '~/assets/carac/move.svg';
import shower from '~/assets/carac/shower.svg';
import dumbbell from '~/assets/carac/dumbbell.svg';
import gourmetSpace from '~/assets/carac/gourmetSpace.svg';
import partyRoom from '~/assets/carac/partyRoom.svg';

export const links = [
  { title: 'Alugar imóvel' },
  { title: 'Comprar imóvel' },
  { title: 'Anunciar meu imóvel' },
  { title: 'Área do cliente' },
  { title: 'Quem somos' },
  { title: 'Contato' },
];

export const optionsLocale = [
  { id: 1, title: 'Centro' },
  { id: 2, title: 'São Jorge' },
  { id: 3, title: 'Agostini' },
  { id: 4, title: 'Andreatta' },
  { id: 6, title: 'Estrela' },
];

export const optionsType = [
  { _id: 1, name: 'Apartamento' },
  { _id: 2, name: 'Casa' },
  { _id: 4, name: 'Kitnet' },
  { _id: 3, name: 'Sala comercial' },
  { _id: 5, name: 'Cobertura' },
  { _id: 6, name: 'Chacará' },
  { _id: 7, name: 'Armazém' },
];

export const optionsParticular = [
  { id: 1, title: 'Quartos', type: 'range', valueToChange: 3 },
  { id: 2, title: 'Banheiros', type: 'range', valueToChange: 2 },
  { id: 4, title: 'Garagens', type: 'range', valueToChange: 1 },
  { id: 6, title: 'Porteiro', type: 'bool' },
  { id: 7, title: 'Piscina', type: 'bool' },
];

export const optionsParticularAdvanced = [
  { id: 1, title: 'Triplex', type: 'bool' },
  { id: 2, title: 'Adega', type: 'bool' },
  { id: 4, title: 'Aquecimento a gás', type: 'bool' },
  { id: 6, title: 'Salão de festas', type: 'bool' },
  { id: 7, title: 'Heliponto', type: 'bool' },
];

export const listTypes = [
  {
    id: 1,
    title: 'Apartamento',
    image: 'https://d2wpq6lms06dik.cloudfront.net/3212/177978373.jpg',
  },
  {
    id: 2,
    title: 'Casa',
    image:
      'https://privilegeimobiliaria.com.br/wp-content/uploads/2018/11/zzzzz.jpg',
  },
  {
    id: 3,
    title: 'Kitnet',
    image:
      'http://bko.com.br/wp-content/uploads/2016/07/Apartamento-Studio-1080x500.jpg',
  },
  {
    id: 4,
    title: 'Sala comercial',
    image: 'https://www.seulugaraqui.com/arquivos/fotos/14-10-03_15:42:51.jpg',
  },
  {
    id: 5,
    title: 'Cobertura',
    image:
      'http://www.borgesi.com.br/wp-content/uploads/2017/04/coberura-luxo-vista.jpg',
  },

  {
    id: 6,
    title: 'Chacará',
    image:
      'https://imganuncios.mitula.net/rural_inhumas_6160009540386309339.jpg',
  },
  {
    id: 7,
    title: 'Armazém',
    image:
      'https://aglomeradodigital.com.br/wp-content/uploads/2018/05/galpao-velho-casa-de-luxo-18.jpg',
  },
];

export const listImmobiles = [
  {
    id: 1,
    images:
      'https://cdn.cyrela.com.br/Files/Imagens/Imoveis/2235/imovel/132043120495224766-apartamento-moema-by-cyrela-lounge-festas-636x295-.jpg',
    type: 'Apartamento',
    priceFormatted: 'R$ 1720,00/mês',
    address: 'Rua Maria Lúcia da Paz - Gleba Fazenda Palhano, Londrina - PR',
    roomsFormatted: '3 quartos',
    garagesFormatted: '1 vaga',
    bathroomsFormatted: '2 banheiros',
    area: 150,
    location: { lat: -26.724933, lng: -53.532206 },
  },
  {
    id: 2,
    images:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjocCT4RaWTDhVjx6VHwd6ip-Ig86FvyObT7jztIc1oNLYZDXDbg',
    type: 'Apartamento',
    priceFormatted: 'R$ 1720,00/mês',
    address: 'Rua Maria Lúcia da Paz - Gleba Fazenda Palhano, Londrina - PR',
    roomsFormatted: '3 quartos',
    garagesFormatted: '1 vaga',
    bathroomsFormatted: '2 banheiros',
    area: 150,
    location: { lat: -26.724933, lng: -53.532206 },
  },
  {
    id: 3,
    images:
      'https://resources.aluguetemporada.com.br/info/files/live/sites/br/files/contributed/shared/marketing/imagens/Owner%20Marketing/Posts_Blog_Owner/Novidades_AT/luxury-rentals-big--ts-2015-09-21T16%3A28%3A20_773-05%3A00.jpg',
    type: 'Apartamento',
    priceFormatted: 'R$ 1720,00/mês',
    address: 'Rua Maria Lúcia da Paz - Gleba Fazenda Palhano, Londrina - PR',
    roomsFormatted: '3 quartos',
    garagesFormatted: '1 vaga',
    bathroomsFormatted: '2 banheiros',
    area: 150,
    location: { lat: -26.724933, lng: -53.532206 },
  },
  {
    id: 4,
    images:
      'https://i2.wp.com/trendy.pt/wp-content/uploads/2019/02/Casas-de-Luxo-Portugal.jpg?resize=657%2C360&ssl=1',
    type: 'Apartamento',
    priceFormatted: 'R$ 1720,00/mês',
    address: 'Rua Maria Lúcia da Paz - Gleba Fazenda Palhano, Londrina - PR',
    roomsFormatted: '3 quartos',
    garagesFormatted: '1 vaga',
    bathroomsFormatted: '2 banheiros',
    area: 150,
    location: { lat: -26.724933, lng: -53.532206 },
  },
  {
    id: 5,
    images:
      'https://s2.glbimg.com/s2Vf9NNIOux1YO6Ev-x8F7OqEb4=/smart/e.glbimg.com/og/ed/f/original/2018/10/26/gd8_onehaus_c04-piscina_r08.jpg',
    type: 'Apartamento',
    priceFormatted: 'R$ 1720,00/mês',
    address: 'Rua Maria Lúcia da Paz - Gleba Fazenda Palhano, Londrina - PR',
    roomsFormatted: '3 quartos',
    garagesFormatted: '1 vaga',
    bathroomsFormatted: '2 banheiros',
    area: 150,
    location: { lat: -26.724933, lng: -53.532206 },
  },
  {
    id: 6,
    images:
      'https://permuti.com/wp-content/uploads/2017/09/Mod01-05-1170x586.jpg',
    type: 'Apartamento',
    priceFormatted: 'R$ 1720,00/mês',
    address: 'Rua Maria Lúcia da Paz - Gleba Fazenda Palhano, Londrina - PR',
    roomsFormatted: '3 quartos',
    garagesFormatted: '1 vaga',
    bathroomsFormatted: '2 banheiros',
    area: 150,
    location: { lat: -26.724933, lng: -53.532206 },
  },
  {
    id: 7,
    images:
      'http://media-room5.trivago.com/wp-content/uploads/2018/02/09112455/hoteis-fazenda-sc-curucaca-bom-retiro-area-externa.jpg',
    type: 'Apartamento',
    priceFormatted: 'R$ 1720,00/mês',
    address: 'Rua Maria Lúcia da Paz - Gleba Fazenda Palhano, Londrina - PR',
    roomsFormatted: '3 quartos',
    garagesFormatted: '1 vaga',
    bathroomsFormatted: '2 banheiros',
    area: 150,
    location: { lat: -26.724933, lng: -53.532206 },
  },
  {
    id: 8,
    images:
      'http://www.cimentoitambe.com.br/wp-content/uploads/2016/07/Loteamento.jpg',
    type: 'Apartamento',
    priceFormatted: 'R$ 1720,00/mês',
    address: 'Rua Maria Lúcia da Paz - Gleba Fazenda Palhano, Londrina - PR',
    roomsFormatted: '3 quartos',
    garagesFormatted: '1 vaga',
    bathroomsFormatted: '2 banheiros',
    area: 150,
    location: { lat: -26.724933, lng: -53.532206 },
  },
];

export const images = [
  {
    source:
      'https://www.imovelweb.com.br/noticias/wp-content/uploads/2014/02/imovel-1-1024x584.jpg',
    description: 'Área de lazer',
  },
  {
    source:
      'https://resources.aluguetemporada.com.br/info/files/live/sites/br/files/contributed/shared/marketing/imagens/Owner%20Marketing/Posts_Blog_Owner/Novidades_AT/luxury-rentals-big--ts-2015-09-21T16%3A28%3A20_773-05%3A00.jpg',
    description: 'Sala de jantar',
  },
  {
    source:
      'https://i2.wp.com/trendy.pt/wp-content/uploads/2019/02/Casas-de-Luxo-Portugal.jpg?resize=657%2C360&ssl=1',
    description: 'Piscina',
  },
  {
    source:
      'https://s2.glbimg.com/s2Vf9NNIOux1YO6Ev-x8F7OqEb4=/smart/e.glbimg.com/og/ed/f/original/2018/10/26/gd8_onehaus_c04-piscina_r08.jpg',
    description: 'Járdim',
  },
  {
    source:
      'https://permuti.com/wp-content/uploads/2017/09/Mod01-05-1170x586.jpg',
    description: 'Salão de festas',
  },
  {
    source:
      'http://hansenimoveis.com/wp-content/uploads/2015/05/Casas-de-luxo-Encontro-das-%C3%81guas.jpg',
    description: 'Sala de estar',
  },
  {
    source:
      'http://www.cimentoitambe.com.br/wp-content/uploads/2016/07/Loteamento.jpg',
    description: 'Localização do terreno',
  },
  {
    source:
      'http://media-room5.trivago.com/wp-content/uploads/2018/02/09112455/hoteis-fazenda-sc-curucaca-bom-retiro-area-externa.jpg',
    description: 'Armazém de ferramentas',
  },
  {
    source:
      'http://imoveis.culturamix.com/blog/wp-content/uploads/sites/1/nggallery/mantenha-a-organizacao/Mantenha-a-Organiza%C3%A7%C3%A3o-1.jpg',
    description: 'Banheiro para visitas',
  },
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
  { name: 'Mais vistos da semana', _id: 5, key: 'moreViewedOfWeek' },
];

export const particularsIcons = {
  bedroom: bed,
  bathroom: shower,
  garage: car,
  area: move,
};

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
