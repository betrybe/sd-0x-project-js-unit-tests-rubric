// Essa função recebe como parâmetro o nome de um personagem e retorna sua Classe e suas Frases.

//   O retorno será de acordo com a seguinte relação:

//        Nome        | Classe   | Frases
//        Arya        |  Rogue   | 'Not today', 'A girl has no name.'
//       Brienne      |  Knight  | 'Im No Lady, Your Grace.', 'I, Brienne Of Tarth, Sentence You To Die.'
//     Melissandre    | Sorcerer | 'Death By Fire Is The Purest Death.', 'For The Night Is Dark And Full Of Terrors.'

//   - Se o nome não estiver na tabela, a função retorna undefined.
//   - Se o nome estiver, a função retorna um objeto no formato abaixo:

//   {
//     name: 'Nome do Personagem',
//     class: 'Classe do Personagem' ,
//     phrases: ['frase1', 'frase2']
//   }

//   - OBS.: A função não é CASE SENSITIVE.

//   Elabore testes para verificar se a função está funcionando de acordo com o proposto.

//   Parâmetros:
//     - Uma string.

//   Comportamento:

//   - getCharacter('Arya') // Retorno : {
//     name: 'Arya',
//     class: 'Rogue' ,
//     phrases: ['Not today', 'A girl has no name.']
//   }

const characters = {
  arya: {
    name: 'Arya Stark',
    class: 'Rogue',
    phrases: ['Not today', 'A girl has no name.'],
  },
  brienne: {
    name: 'Brienne Tarth',
    class: 'Knight',
    phrases: ['Im No Lady, Your Grace.', 'I, Brienne Of Tarth, Sentence You To Die.'],
  },
  melissandre: {
    name: 'Melissandre',
    class: 'Necromancer',
    phrases: ['Death By Fire Is The Purest Death.', 'For The Night Is Dark And Full Of Terrors.'],
  },
};

const getCharacter = (name) => {
  if (name === undefined) {
    return undefined;
  }

  const lowered = name.toLowerCase();

  if (characters[lowered]) {
    return characters[lowered];
  }

  return undefined;
};

module.exports = getCharacter;