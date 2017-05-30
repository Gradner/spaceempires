var namePool = [
  ['ast', 'tan', 'bar', 'min', 'dae', 'kat', 'rog', 'pur', 'gor', 'ack', 'mes', 'dor', 'leg', 'pak', 'rem', 'cor', 'bal'],
  ['eis', 'est', 'ire', 'oor', 'hin', 'eft', 'ort', 'jin', 'fus', 'cus', 'alt', 'met', 'jor', 'lin', 'tes', 'mor', 'nie'],
  ['vie', 'vae', 'dan', 'nur', 'bek', 'des', 'mal', 'den', 'vis', 'xin', 'por', 'vee', 'lor', 'vin', 'xae', 'yur', 'iss'],
  ['leer', 'heim', 'rault', 'gault', 'dest', 'brach', 'oord', 'eint', 'lour', 'osset', 'drach', 'trach', 'morde', 'tine'],
]

function createName(maxLength){
  var name;
  var nameLength = Math.floor(Math.random() * maxLength) + 1;
  for(var i = 0; i < nameLength; i++){
    var pool = Math.round(Math.random() * namePool.length);
    var pick = Math.round(Math.random() * namePool[pool].length);
    name += namePool[pool][pick];
  }
  return name;
}

module.exports = {
  createName: createName,
}
