const uppercaseName = require('./uppercaseName');

test('Uppercase name correctly', () => {
  expect(uppercaseName(['pawEl FoIT', 'mariuSZ PuDzIanowSKI']))
    .toEqual(['Pawel Foit', 'Mariusz Pudzianowski']);
});

test('Uppercase name correctly', () => {
  expect(uppercaseName(['JoHNy bRaVo', 'AnTHOny HopKinS']))
    .toEqual(['Johny Bravo', 'Anthony Hopkins']);
});

test('Uppercase name correctly', () => {
  expect(uppercaseName(['JoseMaria EscRIva dE BALAGUER', 'KaZimIeRz WiElkI']))
    .toEqual(['Josemaria Escriva De Balaguer', 'Kazimierz Wielki']);
});
