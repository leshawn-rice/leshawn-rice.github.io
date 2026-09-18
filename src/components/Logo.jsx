// The mark is inline SVG rather than an image file so it inherits colour from
// whatever surface it sits on. The tile, glyph and cursor read from CSS custom
// properties, which the nav flips when it goes from the dark hero to white.
export default function Logo() {
  return (
    <span className="logo">
      <svg className="logo__mark" viewBox="0 0 42 42" aria-hidden="true" focusable="false">
        <rect className="logo__tile" width="42" height="42" rx="12" />
        <path className="logo__chevron" d="M12 14.5 19 21l-7 6.5" />
        <rect className="logo__cursor" x="22" y="25.2" width="9" height="2.6" rx="1.3" />
      </svg>
      <span className="logo__word">
        <span className="logo__thin">leshawn</span>
        <span className="logo__bold">rice</span>
        <span className="logo__dot">.</span>
      </span>
    </span>
  );
}
