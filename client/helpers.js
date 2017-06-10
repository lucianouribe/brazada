export const menus = {menus: ['natacion', 'gimnacio', 'hidro', 'mente']}

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
    case 'natacion libre':
      return 'natación libre'
      break;
    default:
      return word
  }
}

export function formatPrice(pay) {
  pay = parseInt(pay)
  return `$${pay.toFixed(1).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')}`;
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
