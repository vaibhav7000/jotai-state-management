import { useAtom, useAtomValue } from 'jotai';
import {
  priceAtom,
  doublePriceAtom,
  themeAtom,
  animeAtom,
  progressAnimeAtom,
  textAtom,
  textAtomCapitalized,
} from './store/index.jsx';

function App() {
  const [price, setPrice] = useAtom(priceAtom);
  const doublePrice = useAtomValue(doublePriceAtom);
  const [theme, setTheme] = useAtom(themeAtom);
  const [animes, setAnimes] = useAtom(animeAtom);
  const progress = useAtomValue(progressAnimeAtom);
  const [text, setText] = useAtom(textAtom);
  const textCapital = useAtomValue(textAtomCapitalized);

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        color: theme === 'dark' ? 'white' : 'black',
        backgroundColor: theme === 'dark' ? 'black' : 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '10px',
      }}
    >
      {price}
      <button onClick={() => setPrice(price + 1)}>Increase</button>

      <button onClick={() => setPrice(price - 1)}>Decrease</button>

      {doublePrice}

      <button
        onClick={() => {
          theme === 'dark' ? setTheme('light') : setTheme('dark');
        }}
      >
        Change Theme
      </button>

      <div>
        {animes.map((anime, index) => {
          return (
            <div key={index}>
              <div>{anime.title}</div>
              <div>{anime.year}</div>
              <button
                onClick={() => {
                  anime.watched = !anime.watched;
                  animes.splice(index, 1, {
                    ...anime,
                  });

                  setAnimes([...animes]);
                }}
              >
                {anime.watched ? 'Completed' : 'UnCompleted'}
              </button>
            </div>
          );
        })}

        <div>
          <button
            onClick={() => {
              setAnimes([
                ...animes,
                {
                  title: 'First',
                  year: 2002,
                  watched: true,
                },
              ]);
            }}
          >
            Add Anime
          </button>
        </div>

        <div>{progress * 100}% animes are Completed</div>

        <div
          style={{
            marginTop: '50px',
          }}
        >
          <input
            type="text"
            value={text}
            onChange={(event) => {
              setText(event.target.value);
            }}
          />
          <div>{textCapital}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
