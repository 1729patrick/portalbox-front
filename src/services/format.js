export const formatPrice = valueFloat => {
  return `R$ ${valueFloat.toLocaleString(navigator.language, {
    minimumFractionDigits: 2,
  })}`;
};

export const formatTitleImmobile = immobile => {
  const {
    type,
    address: { neighborhood },
    price,
  } = immobile;

  const finality =
    price.rent >= 0 && price.sale >= 0
      ? ' para Venda e Locação'
      : price.sale >= 0
      ? ' para Venda'
      : price.rent >= 0
      ? ' para Locação'
      : '';

  return `${type.name}${finality} no bairro ${neighborhood.name}`;
};
