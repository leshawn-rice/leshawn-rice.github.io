import { useEffect, useState } from 'react';
import { slides } from '../data/site';

const INTERVAL = 9000;

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced || paused) return undefined;
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), INTERVAL);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <section
      id="home"
      className="hero"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
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
            <p className="hero__lead" key={`lead-${index}`}>
              {slide.lead}
            </p>
            <h1 className="hero__title" key={`title-${index}`}>
              {slide.title}
            </h1>
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
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </section>
  );
}
