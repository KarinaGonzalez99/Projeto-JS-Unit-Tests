/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const circle = require('../src/circle');

/*
  A função `circle` recebe o raio de um círculo e retorna um objeto contendo suas informações: Raio, Área e Circunferência.
  Se não for especificado um raio, a função retorna `undefined`.
  Escreva pelo menos seis testes para essa função para garantir que a implementação de `circle` está correta.

  Parâmetros:
    - Um número inteiro. Exemplos: 1; 3;
  Comportamento:
    - circle(1) // Retorno: {radius: 1, area: 3.14, circumference: 6.28}
    - circle(7) // Retorno: {radius: 7, area: 153.86, circumference: 43.96}
    - circle(3) // Retorno: {radius: 3, area: 28,26, circumference: 18.84}

  DICA: Números de ponto flutuante em JavaScript são imprecisos!  Para testar, vá no console do navegador e faça `0.2 + 0.1`.
        Uma solução pra isso pode ser fazer a soma no seguinte formato: `parseFloat((0.2 + 0.1).toPrecision(2))`.
        Outra dica: que tal pesquisar se existe um matcher que compara valores próximos?
        Use esse conhecimento para te ajudar a lidar com possíveis problemas que esses testes trarão!
*/

describe('4 - Implemente os casos de teste para a função `circle`', () => {
  it('Verifica 1', () => { // dentro do circle colocar uma string aleatoria, porque qualquer valor que tiver dentro será string
    expect(circle(' ')).toBe(undefined); // Teste se circle retorna undefined, caso o parâmetro passado não seja um número.
  });
  it('Verifica 2', () => { // colocar qual o tipo typeof, coloca rum valor dentro (22), no caso aleatorio, mas no valor em numeros pra manter qualquer valor que colocar em numero, e o object, que seria o que eu queria testar
    expect(typeof circle(22)).toBe('object'); // Teste se circle retorna um objeto.
  });
  it('Verifica 3', () => { // checar se tem 3 keys (radius, area, circunferencia) = object.key; com um valor aleatorio dentro do circle (22), e conferindo o seu tamanhocom length
    expect(Object.keys(circle(22)).length).toBe(3); // Teste se o objeto retornado possui 3 propriedades.
  });
  it('Verifica 4', () => { 
    expect(circle()).toBe(undefined); // Teste se a função, quando não recebe nenhum parâmetro, retorna undefined.
  });
  it('Verifica 5', () => { // circle com raio 2, dando match no object com key circumference, com valor de 12.56
    expect(circle(2)).toMatchObject({circumference: (12.56)}); // Teste se dentro do objeto retornado, a função retorna uma `key` com `value` igual à circunferência correta para um círculo de raio 2.
  });
  it('Verifica 6', () => { 
    expect(circle(3)).toMatchObject({area: (28.259999999999998)}); // Teste se dentro do objeto retornado, a função retorna uma `key` com `value` igual à área correta para um círculo de raio 3.
  });
  it('Verifica 7', () => { 
    expect(circle(3)).toMatchObject({radius: 3, area: 28.259999999999998, circumference: 18.84}); // Teste se a função retorna, em um objeto, os dados corretos de um círculo de raio 3.
  });
  });
