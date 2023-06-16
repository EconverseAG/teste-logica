const products = [
  "preto-PP",
  "preto-M",
  "preto-G",
  "preto-GG",
  "preto-GG",
  "branco-PP",
  "branco-G",
  "vermelho-M",
  "azul-XG",
  "azul-XG",
  "azul-XG",
  "azul-P"
]

module.exports = () => {
  const transformProductStructure = (variants) => {
    const productStructure = {};

    variants.forEach((variant) => {
      const [color, size] = variant.split('-');

      if (!productStructure[color]) {
        productStructure[color] = {};
      }

      if (!productStructure[color][size]) {
        productStructure[color][size] = 1;
      } else {
        productStructure[color][size]++;
      }
    });

    return productStructure;
  }

  return transformProductStructure(products);
};