import { useEffect, useRef, useState } from 'react';
import { slides } from '../data/site';

const INTERVAL = 5000;
// The loader sits over the page for the first moment or so. Without this the
// opening slide is only actually visible for ~3.5s of its 5s.
const LOADER_GRACE = 1500;

export default function Hero() {
  const [index, setIndex] = useState(0);
  // Auto-advance stops for good once the viewer picks a slide themselves.
  const [userPicked, setUserPicked] = useState(false);
  const firstRun = useRef(true);

  // Keyed on `index` rather than run as an interval, so every slide gets the
  // full duration - including one the viewer selects, which would otherwise
  // inherit whatever was left on a shared interval.
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced || userPicked) return undefined;
    const wait = firstRun.current ? INTERVAL + LOADER_GRACE : INTERVAL;
    firstRun.current = false;
    const id = setTimeout(() => setIndex((i) => (i + 1) % slides.length), wait);
    return () => clearTimeout(id);
  }, [index, userPicked]);

  return (
    <section id="home" className="hero">
      {slides.map((slide, i) => (
        <div
          key={slide.title}
          className={`hero__slide${i === index ? ' is-active' : ''}`}
          aria-hidden={i !== index}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="hero__scrim" />
          <div className="container hero__content">
            {/* keyed so the entrance animation replays on every slide change */}
            {slide.lead && (
              <p className="hero__lead" key={`lead-${index}`}>
                {slide.lead}
              </p>
            )}
            <h1 className="hero__title" key={`title-${index}`}>
              {slide.title}
            </h1>
            {slide.tagline && (
              <p className="hero__tagline" key={`tagline-${index}`}>
                {slide.tagline}
              </p>
            )}
            <a className="btn btn--light" href="#contact" key={`cta-${index}`}>
              {slide.cta}
            </a>
          </div>
        </div>
      ))}

      <div className="hero__dots" role="tablist" aria-label="Slides">
        {slides.map((slide, i) => (
          <button
            key={slide.title}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={`Show slide ${i + 1}: ${slide.title}`}
            className={i === index ? 'is-active' : undefined}
            onClick={() => {
              setIndex(i);
              setUserPicked(true);
            }}
          />
        ))}
      </div>
    </section>
  );
}
