const pokemon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);

/* Lista de pokemones cuyos nombres empiezan con la letra B */
const bListPkmn = pokemon.filter( p => p.name[0] === "B" );
console.log(bListPkmn);

/* Lista de solo identificadores */
const pkmnIds = pokemon.map( p => p.id )
console.log(pkmnIds);

/* Serie de objetos Pokémon donde la identificación es divisible por 3 */
const idDivBy3PkmnLst = pokemon.filter(p => p.id % 3 === 0);
console.log(idDivBy3PkmnLst);

/* Serie de objetos Pokémon que son del tipo 'fuego' */
const fireTypePkmnLst = pokemon.filter(p => p.types.includes("fire") === true);
console.log(fireTypePkmnLst);

/* Variedad de objetos Pokémon que tienen más de un tipo */
const severalTypesPkmnLst = pokemon.filter(p => p.types.length > 1);
console.log(severalTypesPkmnLst);

/* Matriz con solo nombres de los Pokémon */
const pkmnNames = pokemon.map( p => p.name );
console.log(pkmnNames);

/* Matriz con solo nombres de los Pokémon con Id > 99 */
const idH99PkmnNames = pokemon.filter(p => p.id > 99).map( p => p.name );
console.log(idH99PkmnNames);

/* Matriz con solo nombres de los Pokémon cuyo único tipo es 'poison' */
const typePoisonPkmnNames = pokemon.filter(p => (p.types[0] === "poison") && (p.types.length === 1)).map( p => p.name );
console.log(typePoisonPkmnNames);

/* Matriz con solo primer tipo de los Pokémon cuyo segundo tipo es 'flying' */
const firstType2ndTypeIsFlying = pokemon.filter(p => p.types[1] === "flying").map( p => p.types[0] );
console.log(firstType2ndTypeIsFlying);

/* Serie de objetos Pokémon que son del tipo 'normal' */
const normalTypePkmnLst = pokemon.filter(p => p.types.includes("normal") === true);
console.log(normalTypePkmnLst.length);