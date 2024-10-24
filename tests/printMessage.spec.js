const { info, printMessage } = require('../src/printMessage');

describe('2 - Implemente o caso de teste para a função `printMessage`', () => {
  it ('Testa a propriedade personagem no objeto.', () => {
    let info = {
      personagem: 'Margarida',
      origem: 'Pato Donald',
      nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    };

      // Garante que o objeto possui a propriedade personagem
      expect(info).toHaveProperty('personagem');
    
      // Garante que a função retorna a mensagem correta
      expect(printMessage(info)).toBe('Boas vindas, Margarida');
  });
});

describe('3 - Ainda sobre a função `printMessage`, adicione os casos de teste a seguir`', () => {
  it ('Testa a informação de boas vindas.', () => {
    let info = {
      personagem: 'Margarida',
      origem: 'Pato Donald',
      nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    };

    // Verifica se a mensagem contém "Boas vindas"
    expect(printMessage(info)).toMatch(/Boas vindas/);
  });
  
  it ('Testa a informação referente ao nome da personagem.', () => {
    let info = {
      personagem: 'Margarida',
      origem: 'Pato Donald',
      nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    };

    // Verifica se a mensagem contém o nome "Margarida"
    expect(printMessage(info)).toMatch(/Margarida/);
  });
});

describe('4 - Crie um fluxo de exceção para a função `printMessage`', () => {
  it ('Testa o fluxo de exceção da função printMessage.', () => {
    
  });
});
