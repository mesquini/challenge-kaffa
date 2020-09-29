// Reject common values.
const REJECT_LIST = [
  '00000000000000',
  '11111111111111',
  '22222222222222',
  '33333333333333',
  '44444444444444',
  '55555555555555',
  '66666666666666',
  '77777777777777',
  '88888888888888',
  '99999999999999',
];

const STRICT_STRIP_REGEX = /[-\/.]/g;
const LOOSE_STRIP_REGEX = /[^\d]/g;

export function strip(cnpj: string, isStrict: boolean = false): string {
  const regex = isStrict ? STRICT_STRIP_REGEX : LOOSE_STRIP_REGEX;
  return (cnpj || '').toString().replace(regex, '');
}

export function format(cnpj: string): string {
  return strip(cnpj).replace(
    /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/,
    '$1.$2.$3/$4-$5',
  );
}

export function isValid(cnpj: string, isStrict: boolean = false): boolean {
  const stripped = strip(cnpj, isStrict);

  // CNPJ must be defined
  if (!stripped) {
    return false;
  }

  // CNPJ must have 14 chars
  if (stripped.length !== 14) {
    return false;
  }

  if (REJECT_LIST.includes(stripped)) {
    return false;
  }

  // Valida DVs
  var tamanho = stripped.length - 2;
  var numeros = stripped.substring(0, tamanho);
  var digitos = stripped.substring(tamanho);
  var soma = 0;
  var pos = tamanho - 7;

  for (var i = tamanho; i >= 1; i--) {
    soma += Number(numeros.charAt(tamanho - i)) * pos--;
    if (pos < 2) pos = 9;
  }

  var resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
  if (resultado !== Number(digitos.charAt(0))) return false;

  tamanho = tamanho + 1;
  numeros = stripped.substring(0, tamanho);
  soma = 0;
  pos = tamanho - 7;

  for (i = tamanho; i >= 1; i--) {
    soma += Number(numeros.charAt(tamanho - i)) * pos--;
    if (pos < 2) pos = 9;
  }

  resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
  if (resultado !== Number(digitos.charAt(1))) return false;

  return true;
}
