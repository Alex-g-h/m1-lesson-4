/**
 * Function converts variable and output result
 * @param {*} variable Variable to convert
 */
export function convert(variable) {
  console.log(typeof variable, ': ', String(variable), Number(variable), Boolean(variable));
}