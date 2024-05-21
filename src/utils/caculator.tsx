export type TCalculator = 'add' | 'sub' | 'mul' | 'div';

interface ICalculator {
  add: () => number;
  sub: () => number;
  mul: () => number;
  div: () => number;
}

export const calculate = (x: number, y: number, type: TCalculator): number => {
  const calculator: ICalculator = {
    add: (): number => x + y,
    div: (): number => x - y,
    mul: (): number => x * y,
    sub: (): number => x / y,
  };
  return calculator[type]();
};
