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

// this will be called after the component mounts and will be called where its value is used using useAtom and useAtomValue
textAtom.onMount = (setAtom) => {
  setAtom("HELLO WORLd !!");
  // this will be called when component will unmount and here we can update its value again
  return () => {
    console.log("hello")
  }
}

const textAtomCapitalized = atom((get) => {
  return get(textAtom).toUpperCase();
});

const firstNameAtom = atom("Vaibhav");
const lastNameAtom = atom("Chawla");

// read-write-atom (derieved-atom) -> the value is setup based on the main atom and we can change the main atom value using the write method (set) 
const fullNameAtom = atom((get) => {
  return `${get(firstNameAtom)} ${get(lastNameAtom)}`;
}, (get, set, upatedValue) => {
  const [first, last] = upatedValue.split(" ");

  set(firstNameAtom, first);
  set(lastNameAtom, last);
})


export {
  priceAtom,
  doublePriceAtom,
  themeAtom,
  animeAtom,
  progressAnimeAtom,
  textAtom,
  textAtomCapitalized,
  fullNameAtom,
  firstNameAtom, lastNameAtom,
  userIdAtom, usernameAtom
};


const userIdAtom = atom(1);

const usernameAtom = atom(async (get, {signal}) => {
  const userId = get(userIdAtom);
  console.log(signal);
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}?_delay=2000`, {
      signal
    })

    const output = await response.json();

    return output;
  } catch (error) {
    return "Internal Server error"
  }
})

// jotai -> state-management library that is used to create global state-variables and the components can directly use the globally declared state-variables and when ever the value of the global state-variables changes all the components that are mounted automatically gets updated.

// using "atoms" we declare global state-variables


// Derived atoms -> atoms whose values are setted / derived up based on the values of other atoms. The values of these atoms are dependent on other and hence once the main atoms changes, the derieved atom also gets changed. 
// There are three types of derieved-atoms :- read-only, write-only and read-write-atom

// we have 