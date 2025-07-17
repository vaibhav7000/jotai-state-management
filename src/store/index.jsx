import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

// declaring a state-variable but globally present
const priceAtom = atom(0);

const doublePriceAtom = atom((get) => {
  const final = get(priceAtom) * 2;

  return final;
});

// this creates a global state-variable that can be accessed by any component + its value will also gets stored inside the local-storage, when ever the value changes inside the atom all components updates + local-storage updates
const themeAtom = atomWithStorage('theme', 'dark'); // the value of the atom will exist in the local-storage, if no key is found by this key than default 'dark' value will be picked

const animeAtom = atom([
  {
    title: 'Ghost in the Shell',
    year: 1998,
    watched: true,
  },
  {
    title: 'Serial Experiments Lain',
    year: 2000,
    watched: false,
  },
]);

const progressAnimeAtom = atom((get) => {
  const animes = get(animeAtom);
  return animes.filter((value) => value.watched).length / animes.length;
});

const textAtom = atom('Hello');

const textAtomCapitalized = atom((get) => {
  return get(textAtom).toUpperCase();
});

export {
  priceAtom,
  doublePriceAtom,
  themeAtom,
  animeAtom,
  progressAnimeAtom,
  textAtom,
  textAtomCapitalized,
};

// jotai -> state-management library that is used to create global state-variables and the components can directly use the globally declared state-variables and when ever the value of the global state-variables changes all the components that are mounted automatically gets updated.

// using "atoms" we declare global state-variables
