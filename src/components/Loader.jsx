import { useEffect, useRef, useState } from 'react';
import { loaderPhrases } from '../data/site';

export default function Loader() {
  const [hidden, setHidden] = useState(false);
  const [gone, setGone] = useState(false);
  const phrase = useRef(
    loaderPhrases[Math.floor(Math.random() * loaderPhrases.length)],
  ).current;

  useEffect(() => {
    const fade = setTimeout(() => setHidden(true), 900);
    const drop = setTimeout(() => setGone(true), 1500);
    return () => {
      clearTimeout(fade);
      clearTimeout(drop);
    };
  }, []);

  if (gone) return null;

  return (
    <div className={`loader${hidden ? ' is-hidden' : ''}`} aria-hidden={hidden}>
      <div className="loader__cubes">
        <span />
        <span />
        <span />
        <span />
      </div>
      <p className="loader__text">{phrase}</p>
    </div>
  );
}
