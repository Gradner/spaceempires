var namePool = [
  ['ast', 'tan', 'bar', 'min', 'dae', 'kat', 'rog', 'pur', 'gor', 'ack', 'mes', 'dor', 'leg', 'pak', 'rem', 'cor', 'bal'],
  ['eis', 'est', 'ire', 'oor', 'hin', 'eft', 'ort', 'jin', 'fus', 'cus', 'alt', 'met', 'jor', 'lin', 'tes', 'mor', 'nie'],
  ['vie', 'vae', 'dan', 'nur', 'bek', 'des', 'mal', 'den', 'vis', 'xin', 'por', 'vee', 'lor', 'vin', 'xae', 'yur', 'iss'],
  ['leer', 'heim', 'rault', 'gault', 'dest', 'brach', 'oord', 'eint', 'lour', 'osset', 'drach', 'trach', 'morde', 'tine'],
]

function createName(maxLength){
  var name = '';
  var nameLength = Math.floor(Math.random() * maxLength) + 1;
  for(var i = 0; i < nameLength; i++){
    var pool = namePool[Math.floor(Math.random() * namePool.length)];
    console.log(pool);
    var pick = pool[Math.floor(Math.random() * pool.length)];
    name += pick;
  }
  return name;
}

module.exports = {
  createName: createName,
}
