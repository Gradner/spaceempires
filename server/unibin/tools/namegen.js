var namePool = [
  ['ast', 'tan', 'bar', 'min', 'dae', 'kat', 'rog', 'pur', 'gor', 'ack', 'mes', 'dor', 'leg', 'pak', 'rem', 'cor', 'bal'],
  ['eis', 'est', 'ire', 'oor', 'hin', 'eft', 'ort', 'jin', 'fus', 'cus', 'alt', 'met', 'jor', 'lin', 'tes', 'mor', 'nie'],
  ['vie', 'vae', 'dan', 'nur', 'bek', 'des', 'mal', 'den', 'vis', 'xin', 'por', 'vee', 'lor', 'vin', 'xae', 'yur', 'iss'],
  ['leer', 'heim', 'rault', 'gault', 'dest', 'brach', 'oord', 'eint', 'lour', 'osset', 'drach', 'trach', 'morde', 'tine'],
  ['dran', 'trost', 'ober', 'dosin', 'mesa', 'dore', 'amn', 'des', 'drin', 'fors', 'crol', 'tuk', 'pos', 'rend', 'vex'],
  ['tal', 'gar', 'bin', 'dey', 'rey', 'yun', 'bral', 'brai', 'hest', 'odd', 'fes', 'yar', 'kor', 'krast', 'fral', 'ris']
]

function createName(maxLength){
  var name = '';
  var nameLength = Math.floor(Math.random() * maxLength) + 1;
  for(var i = 0; i < nameLength; i++){
    var pool = namePool[Math.floor(Math.random() * namePool.length)];
    var pick = pool[Math.floor(Math.random() * pool.length)];
    name += pick;
  }
  return name;
}

function romanNumeral(number){
  switch(number){
    case 1:
      return "I";
      break;
    case 2:
      return "II";
      break;
    case 3:
      return "III";
      break;
    case 4:
      return "IV";
      break;
    case 5:
      return "V";
      break;
    case 6:
      return "VI";
      break;
    case 7:
      return "VII";
      break;
    case 8:
      return "VIII";
      break;
    case 9:
      return "IX";
      break;
    case 10:
      return "X";
      break;
    case 11:
      return "XI";
      break;
    case 12:
      return "XII";
      break;
    case 13:
      return "XIII";
      break;
    case 14:
      return "XIV";
      break;
    case 15:
      return "XV";
      break;
    case 16:
      return "XVI";
      break;
    case 17:
      return "XVII";
      break;
    case 18:
      return "XVIII";
      break;
    case 19:
      return "XIX";
      break;
    case 20:
      return "XX";
      break;
  }
}

module.exports = {
  createName: createName,
  romanNumeral: romanNumeral,
}
