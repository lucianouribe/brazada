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
    // case 'mente':
    //   return 'mte y cpo'
    //   break;
    default:
      return word
  }
}
