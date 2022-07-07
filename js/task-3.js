import { convert } from './aux_func.js';

console.log('Type : String Number Boolean');

let func1 = console.log;
convert(func1);

let obj = { name: 'Maxim' };
convert(obj);

let sym = Symbol('key');
console.log(typeof sym, ': ', String(sym), '\'not supported\'', Boolean(sym));

let func2 = Number;
convert(func2);

let emptyString = '';
convert(emptyString);

let num1 = 0;
convert(num1);

let num2 = - 10;
convert(num2);

let str = '-105';
convert(str);