export const formatPrice = valueFloat => {
  return `R$ ${valueFloat.toLocaleString(navigator.language, {
    minimumFractionDigits: 2,
  })}`;
};

export const formatTitleImmobile = immobile => {
  console.log(immobile);
  // secondParticular = getParticular({
  //   title: secondParticular.title,
  //   pos: secondParticular.value > 1,
  //   value: secondParticular.value,
  // });
  // const { rent, sale } = immobile.price;
  // const priceRent = rent
  //   ? ` por R$ ${rent.toLocaleString(navigator.language, {
  //       minimumFractionDigits: 2,
  //     })}/mês`
  //   : ' com preço sob consulta';
  // const rentFormatted =
  //   typeof rent === 'number' && rent >= 0 ? ` para alugar${priceRent}` : '';
  // const priceSale = sale
  //   ? ` por R$ ${sale.toLocaleString(navigator.language, {
  //       minimumFractionDigits: 2,
  //     })}`
  //   : '';
  // const saleFormatted =
  //   typeof sale === 'number' && sale >= 0
  //     ? typeof rent === 'number' && rent >= 0
  //       ? ` e para vender${priceSale}`
  //       : ` para vender${priceSale}`
  //     : ' com preço sob consulta';
  // const area = [...particularsSpotlight, ...particulars].find(
  //   particular => particular.title === 'totalArea'
  // );
  // const areaFormatted = area
  //   ? ` ${getParticular({
  //       title: area.title,
  //       pos: 'simple',
  //       value: area.value,
  //     })}`
  //   : '';
  // return `${immobile.type.name} com ${firstParticular}, ${secondParticular},${areaFormatted}${rentFormatted}${saleFormatted}`;
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
