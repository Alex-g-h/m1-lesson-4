import { convert } from './aux_func.js';

console.log('Type : String Number Boolean');

let str = 'text';
convert(str);

let num = 15;
convert(num);

let tBigInt = 13n;
convert(tBigInt);

let bool = true;
convert(bool);

let tNull = null;
convert(tNull);

let tUndefined = undefined;
convert(tUndefined);

let tSymbol = Symbol('id');
console.log(typeof tSymbol, ': ', String(tSymbol), '\'not supported\'', Boolean(tSymbol));

let tObject = { a: 1, b: 'smth' };
convert(tObject);
