/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const assert = require('assert');
const getCharacter = require('../src/getCharacter');

/*
  Essa função recebe como parâmetro o nome de um personagem e retorna sua Classe e suas Frases.

  O retorno será de acordo com a seguinte relação:

       Nome        | Classe   | Frases
       Arya        |  Rogue   | 'Not today', 'A girl has no name.'
      Brienne      |  Knight  | 'Im No Lady, Your Grace.', 'I, Brienne Of Tarth, Sentence You To Die.'
    Melissandre    | Sorcerer | 'Death By Fire Is The Purest Death.', 'For The Night Is Dark And Full Of Terrors.'

  - Se o nome não estiver na tabela, a função retorna undefined.
  - Se o nome estiver, a função retorna um objeto no formato abaixo:

  {
    name: 'Nome do Personagem',
    class: 'Classe do Personagem' ,
    phrases: ['frase1', 'frase2']
  }

  - OBS.: A função não é CASE SENSITIVE.

  Elabore testes para verificar se a função está funcionando de acordo com o proposto.

  Parâmetros:
    - Uma string.

  Comportamento:

  - getCharacter('Arya') // Retorno : {
    name: 'Arya',
    class: 'Rogue' ,
    phrases: ['Not today', 'A girl has no name.']
  }

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/
const arya = {
  name: 'Arya Stark',
  class: 'Rogue',
  phrases: ['Not today', 'A girl has no name.'],
};

const brienne = {
  name: 'Brienne Tarth',
  class: 'Knight',
  phrases: ['Im No Lady, Your Grace.', 'I, Brienne Of Tarth, Sentence You To Die.'],
};

const melissandre = {
  name: 'Melissandre',
  class: 'Necromancer',
  phrases: ['Death By Fire Is The Purest Death.', 'For The Night Is Dark And Full Of Terrors.'],
};

describe('8 - Implemente os casos de teste para a função `getCharacter`', () => {
  it('Verifica se a função `getCharacter` retorna o objeto do personagem corretamente.', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se a função, quando não recebe nenhum parâmetro, retorna undefined.
    assert.strictEqual(getCharacter(), undefined);
    // Teste se a função retorna o objeto correto para o parâmetro 'Arya',
    assert.deepStrictEqual(getCharacter('Arya'), arya);
    // Teste se a função retorna o objeto correto para o parâmetro 'Brienne',
    assert.deepStrictEqual(getCharacter('Brienne'), brienne);
    // Teste se a função retorna o objeto correto para o parâmetro 'Melissandre',
    assert.deepStrictEqual(getCharacter('Melissandre'), melissandre);
    // Teste se a função se os parâmetros não são Case Sensitive.
    assert.deepStrictEqual(getCharacter('MeLissandre'), melissandre);
    // Teste se ao passar um nome que não está na tabela, a função retorna undefined.
    assert.strictEqual(getCharacter('Melissandresss'), undefined);
  });
});
