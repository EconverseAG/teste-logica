const productStructure = require('./productStructure');

test('test products structure', () => {
  expect(productStructure()).toStrictEqual({ 
    "preto": { 
      "PP": 1, 
      "M": 1, 
      "G": 1, 
      "GG": 2 
    }, 
    "branco": { 
      "PP": 1, 
      "G": 1 
    }, 
    "vermelho": { 
      "M": 1 
    }, 
    "azul": { 
      "XG": 3, 
      "P": 1 
    }
  })
})
