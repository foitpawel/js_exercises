const uppercaseName = table => {
  let names = [];

  table.map(el => {
    names.push(el.split(' '));
  });
  
  for (let i=0; i<names.length; i++) {
    for(let j=0; j<names[i].length; j++) {
      names[i][j] = names[i][j].charAt(0).toUpperCase() + names[i][j].slice(1).toLowerCase();
    }
    names[i] = names[i].join(' ');
  }
  
return names;
}

module.exports = uppercaseName;
