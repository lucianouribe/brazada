export const menus = {menus: ['natacion', 'gimnasio', 'hidro', 'mente']}

export function ortografica(word){
  switch (word) {
    case 'natacion':
      return 'natación'
      break;
    case 'bebes':
      return 'bebés'
      break;
    case 'ninos':
      return 'niños'
      break;
    case 'mamas':
      return 'mamás'
      break;
    case 'jovenes':
      return 'jóvenes'
      break;
    case 'natacion libre':
      return 'natación libre'
      break;
    case 'entrenamiento':
      return 'natación entrenamiento'
      break;
    case 'gimnacio':
      return 'gimnasio'
      break;
    case 's_gimnasio':
      return 'gimnasio'
      break;
    case 's_tono':
      return 'salón tono'
      break;
    case 's_mente':
      return 'salón mente y cuerpo'
      break;
    case 's_espera':
      return 'salón espera'
      break;
    // case 'hidro':
    //   return 'hidroaeróbicos'
    //   break;
    case 'especial':
      return 'hidro especial'
      break;
    case 'mision':
      return 'misión'
      break;
    case 'vision':
      return 'visión'
      break;
    default:
      return word
  }
}


export function formatPrice(pay) {
  pay = parseInt(pay)
  // filtro para monedas con centavos
  // return `$${pay.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')}`;
  // filtro para monedas sin centavos
  return `$${pay.toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')}`;
}

export function timeFixer(time) {
  if(time > 0 && time < 10){
    return '0' + time
  } else if (time === 0 ){
    return time + '0'
  } else {
    return time
  }
}

export function aemer(time) {
  if(time == 12) {
    return time
  } else if (time < 12) {
    return time + 'am'
  } else {
    return time + 'pm'
  }
}

export function createMarkup(text) {
  text = text.replace(/(?:\r\n|\r|\n)/g, '<br />');
  return {__html: `${text}`};
}

export function sortNumber(a,b) {
  return a - b;
}

export function capitalizer(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function destildador(texto) {
  texto = texto.allReplace({'á': 'a', 'é': 'e', 'í':'i', 'ó':'o', 'ú':'u'})
  return texto
}

String.prototype.allReplace = function(obj) {
    var retStr = this;
    for (var x in obj) {
        retStr = retStr.replace(new RegExp(x, 'g'), obj[x]);
    }
    return retStr;
};
