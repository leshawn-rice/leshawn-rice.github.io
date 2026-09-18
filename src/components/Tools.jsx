import { useMemo, useState } from 'react';
import SectionTitle from './SectionTitle';
import { toolCategories, tools } from '../data/site';

export default function Tools() {
  const [filter, setFilter] = useState('all');

  const counts = useMemo(() => {
    const map = { all: tools.length };
    for (const cat of toolCategories) {
      if (cat.id === 'all') continue;
      map[cat.id] = tools.filter((t) => t.tags.includes(cat.id)).length;
    }
    return map;
  }, []);

  const visible = useMemo(
    () => (filter === 'all' ? tools : tools.filter((t) => t.tags.includes(filter))),
    [filter],
  );

  return (
    <section id="tools" className="section tools">
      <div className="container">
        <SectionTitle heading="Tools & Technologies" />

        <div className="tools__filters" role="group" aria-label="Filter tools by category">
          {toolCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={`tools__filter${filter === cat.id ? ' is-active' : ''}`}
              aria-pressed={filter === cat.id}
              onClick={() => setFilter(cat.id)}
            >
              {cat.label}
              <span className="tools__count">{counts[cat.id]}</span>
            </button>
          ))}
        </div>

        <ul className="tools__grid">
          {visible.map((tool) => (
            <li key={tool.name} className="tool">
              <span className="tool__plate">
                <img src={tool.logo} alt={`${tool.name} logo`} loading="lazy" decoding="async" />
              </span>
              <span className="tool__body">
                <span className="tool__name">{tool.name}</span>
                <span className="tool__note">{tool.note}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
