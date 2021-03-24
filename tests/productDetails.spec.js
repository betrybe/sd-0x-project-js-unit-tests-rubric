/* eslint-disable no-unused-vars */

const assert = require('assert');
const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

const mask = 'Máscara';
const alcohol = 'Álcool Gel';

const products = productDetails(mask, alcohol);
const returnArray = () => {
  if (typeof products === 'object') return 'object';
};

const equalObject = () => {
  const initialMaterial = Object.values(productDetails(mask, mask));
  if (initialMaterial[0].name === initialMaterial[1].name) return true;
  return false;
};

const validateStrings = (array) => {
  const validation = array.map((item) => {
    const { details: { productId } } = item;
    const regex = /\w*123\b/gmi;
    const isValid = regex.test(productId);
    
    if (isValid) return item;
    return false;
  });

  if (validation.includes(false)) return false;
  return true;
};

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    assert.deepStrictEqual(typeof productDetails(mask, alcohol), 'object');
    assert.strictEqual(productDetails(mask, alcohol).length === 2, true);
    assert.deepStrictEqual(returnArray(), 'object');
    assert.deepStrictEqual(equalObject(), true);
    assert.deepStrictEqual(validateStrings(products), true);
  });
});
