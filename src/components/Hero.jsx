import { hero } from '../data/site';

export default function Hero() {
  return (
    <section
      id="home"
      className="hero"
      style={{ backgroundImage: `url(${hero.image})` }}
    >
      <div className="hero__scrim" />

      <div className="container hero__content">
        <h1 className="hero__title">{hero.title}</h1>
        <p className="hero__role">{hero.role}</p>
        <p className="hero__tagline">{hero.tagline}</p>
        <a className="btn btn--light" href="#contact">
          {hero.cta}
        </a>
      </div>
    </section>
  );
}
