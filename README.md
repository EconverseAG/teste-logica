# Teste Lógico - Econverse

## Descrição
Esse repositório possui o teste da Econverse para avaliar as habilidades de lógica do candidato em questão.

## Como funciona este repositório?
No repositório em questão, existe um teste criado com Jest que deve ser rodado para verificar se a estrutura condiz com o que buscamos. Seu código deve ser colocado no arquivo [productStructure.js](./productStructure.js). Sinta-se livre para estruturar da forma que preferir, desde que o retorno seja criado de acordo com resultado que esperamos na seção seguinte, levando em consideração que no seu código o retorno deve ser dinámico, baseado no array inicial fornecido no arquivo em questão.

## Problema
Nosso cliente cadastrou na plataforma as variantes dos produtos sem especificação. E pediu para criarmos um seletor de variantes na página de produto. Mas a seguinte estrutura de dados não funciona bem para o desenvolvimento de um seletor de variantes.

```javascript
[
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
```

Precisamos que essa estrutura seja convertida para o seguinte formato.

```javascript
{ 
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
}
```

## Como testar?
Para testar seu código, basta apenas rodar o seguinte comando:
```bash
yarn test
```

O resultado deve ser semelhante ao seguinte:
```bash
PASS  ./index.test.js
✓ test products structure (4 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        1.34 s
Ran all test suites.
✨  Done in 2.41s.
```
