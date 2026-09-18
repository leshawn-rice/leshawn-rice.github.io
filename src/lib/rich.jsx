import { Fragment } from 'react';

// The copy in src/data/site.js marks emphasis with **double asterisks** so the
// content stays readable as plain text. This turns that into <strong> nodes.
export function rich(text) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((chunk, i) => {
    if (chunk.startsWith('**') && chunk.endsWith('**')) {
      return <strong key={i}>{chunk.slice(2, -2)}</strong>;
    }
    return <Fragment key={i}>{chunk}</Fragment>;
  });
}
