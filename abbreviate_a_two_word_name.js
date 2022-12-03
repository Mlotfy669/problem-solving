// Abbreviate a Two Word Name
function abbrevName(name) {
  return name.split(' ').map((n) => n[0].toUpperCase()).join('.');
}

console.log(abbrevName('Mahmoud Mohamed Lotfy'));