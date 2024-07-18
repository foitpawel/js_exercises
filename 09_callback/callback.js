// const fetchPokemon = (id, cb) => {
//   fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
//   .then(res => res.json())
//   .then(data => {
//     cb(data)
//   })
// };

// const displayPokemon = data => {
//   console.log(data.forms[0].name);
// }

// fetchPokemon(3, displayPokemon);
// console.log('hello');


const fetchApi = async (id) => {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = res.json();
    return data;

  }
  catch (err) {
    console.log('Error fetching data:', err);
  }
};

setTimeout(() => {
  console.log('1');
}, 1000);

setTimeout(() => {
  console.log('3');
}, 2000);

(async () => {
  const data = await fetchApi(59);
  console.log(data.forms[0].name);
})();

setTimeout(() => {
  console.log('2');
}, 1000);