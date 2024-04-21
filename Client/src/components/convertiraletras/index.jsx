export const numeroALetras=(numero, opciones = {}) =>{
  const defaults = {
    plural: "pesos",
    singular: "peso",
    centPlural: "centavos",
    centSingular: "centavo",
  };

  const config = { ...defaults, ...opciones };

  const unidades = [
    "",
    "un",
    "dos",
    "tres",
    "cuatro",
    "cinco",
    "seis",
    "siete",
    "ocho",
    "nueve",
  ];

  const decenas = [
    "",
    "diez",
    "veinte",
    "treinta",
    "cuarenta",
    "cincuenta",
    "sesenta",
    "setenta",
    "ochenta",
    "noventa",
  ];

  const especiales = [
    "diez",
    "once",
    "doce",
    "trece",
    "catorce",
    "quince",
    "dieciséis",
    "diecisiete",
    "dieciocho",
    "diecinueve",
  ];

  const centenas = [
    "",
    "ciento",
    "doscientos",
    "trescientos",
    "cuatrocientos",
    "quinientos",
    "seiscientos",
    "setecientos",
    "ochocientos",
    "novecientos",
  ];

  const miles = ["", "mil", "millones", "mil", "billón"];

  function convertirUnidades(numero) {
    return unidades[numero];
  }

  function convertirDecenas(numero) {
    if (numero < 10) {
      return convertirUnidades(numero);
    } else if (numero < 20) {
      return especiales[numero - 10];
    } else {
      const unidad = numero % 10;
      const decena = Math.floor(numero / 10);
      return (
        decenas[decena] + (unidad > 0 ? ` y ${convertirUnidades(unidad)}` : "")
      );
    }
  }

  function convertirCentenas(num) {
            if (num < 100) {
                return convertirDecenas(num);
            } else {
                const centena = Math.floor(num / 100);
                const resto = num % 100;
                return centenas[centena] + (resto > 0 ? " " + convertirDecenas(resto) : "");
            }
  }

  function convertirMiles(numero, indice) {
    if (numero === 1 && indice === 1) {
      return "mil";
    } else {
      return convertirCentenas(numero) + " " + miles[indice];
    }
  }

  function convertirNumeroALetras(numero) {
    if (numero === 0) {
      return "cero";
    }

    let resultado = "";
    let indice = 0;

    while (numero > 0) {
      const grupo = numero % 1000;
      if (grupo > 0) {
        resultado = convertirMiles(grupo, indice) + " " + resultado;
      }
      numero = Math.floor(numero / 1000);
      indice++;
    }

    return resultado.trim();
  }

  const parteEntera = Math.floor(numero);
  const parteDecimal = Math.round((numero - parteEntera) * 100);

  const letrasParteEntera = convertirNumeroALetras(parteEntera);
  const letrasParteDecimal = convertirNumeroALetras(parteDecimal);

  const moneda = parteEntera === 1 ? config.singular : config.plural;
  const centavos = parteDecimal === 1 ? config.centSingular : config.centPlural;

  return `${letrasParteEntera} ${moneda} con ${letrasParteDecimal} ${centavos}`;
}

// Ejemplo de uso
const cantidad = 900250150.45;
const resultado = numeroALetras(cantidad, {
  plural: "pesos",
  singular: "peso",
  centPlural: "centavos",
  centSingular: "centavo",
});

console.log(resultado);
// "Ciento veintitrés pesos con cuarenta y cinco centavos"








// export const convertirNumeroEnPalabras =(numero)=> {
//     const unidades = ["", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve"];
//     const especiales = ["", "once", "doce", "trece", "catorce", "quince", "dieciséis", "diecisiete", "dieciocho", "diecinueve"];
//     const decenas = ["", "diez", "veinte", "treinta", "cuarenta", "cincuenta", "sesenta", "setenta", "ochenta", "noventa"];
//     const centenas = ["", "ciento", "doscientos", "trescientos", "cuatrocientos", "quinientos", "seiscientos", "setecientos", "ochocientos", "novecientos"];

//     if (numero === 0) {
//         return "cero";
//     }

//     function convertirUnidades(num) {
//         return unidades[num];
//     }

//     function convertirDecenas(num) {
//         if (num < 10) {
//             return convertirUnidades(num);
//         } else if (num >= 11 && num <= 19) {
//             return especiales[num - 10];
//         } else {
//             const decena = Math.floor(num / 10);
//             const unidad = num % 10;
//             return decenas[decena] + (unidad > 0 ? " y " + convertirUnidades(unidad) : "");
//         }
//     }

//     function convertirCentenas(num) {
//         if (num < 100) {
//             return convertirDecenas(num);
//         } else {
//             const centena = Math.floor(num / 100);
//             const resto = num % 100;
//             return centenas[centena] + (resto > 0 ? " " + convertirDecenas(resto) : "");
//         }
//     }

//     if (numero < 1000) {
//         return convertirCentenas(numero);
//     } else {
//         const millones = Math.floor(numero / 1000000);
//         const miles = numero % 1000000;
//         return (millones > 0 ? convertirCentenas(millones) + " millones " : "") + convertirCentenas(miles);
//     }
// }

// // Ejemplo de uso
// const numeroIngresado = 900250150;
// const numeroEnPalabras = convertirNumeroEnPalabras(numeroIngresado);
// console.log(numeroEnPalabras); // Imprimirá "novecientos millones doscientos cincuenta mil ciento cincuenta"