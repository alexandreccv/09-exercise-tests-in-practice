const sum = require('../src/sum');

describe('1 - Crie os casos de teste da funcão `Sum`', () => {

  it ('Testa se ao receber "4" e "5" como parâmetro, retorna "9" como resultado', () => {
    
    expect(sum(4,5)).toEqual(9);
  });

  it ('Testa se ao receber "0" nos dois parâmetros, retorna o resultado "0"', () => {
    
    expect(sum(0,0)).toEqual(0);
  });
  
  it ('Testa se dispara um erro, caso receba como parâmetro uma string', () => {
    
    expect(() => sum(4,"8")).toThrowError();
  });

  it ('Testa se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")', () => {
    
    expect(() => sum(4, "5")).toThrowError(new Error('parameters must be numbers'));
  });
});
