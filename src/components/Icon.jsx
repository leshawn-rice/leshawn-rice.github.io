// Thin-line icons, drawn to match the stroke weight of the icon font the
// previous build pulled in (et-line / simple-line-icons) without the webfont.
const PATHS = {
  platform: (
    <>
      <rect x="3" y="4" width="18" height="12" rx="1.5" />
      <path d="M8 20h8M12 16v4" />
      <path d="M9.5 8.5 7.5 10l2 1.5M14.5 8.5l2 1.5-2 1.5" />
    </>
  ),
  cloud: (
    <>
      <path d="M7.5 18.5A4.5 4.5 0 0 1 7 9.55a5.5 5.5 0 0 1 10.53 1.2A3.75 3.75 0 0 1 17 18.5Z" />
      <path d="M12 12v5m0-5-2 2m2-2 2 2" />
    </>
  ),
  monitor: (
    <>
      <rect x="2.5" y="5" width="19" height="12.5" rx="1.5" />
      <path d="M5.5 13l3-3.5 2.5 2.5 3-4 2 2.5 2.5-2" />
    </>
  ),
  toolbox: (
    <>
      <rect x="2.5" y="8" width="19" height="11.5" rx="1.5" />
      <path d="M8.5 8V6.2A1.7 1.7 0 0 1 10.2 4.5h3.6A1.7 1.7 0 0 1 15.5 6.2V8" />
      <path d="M2.5 13h19M10 11.5h4v3h-4z" />
    </>
  ),
  documents: (
    <>
      <path d="M7.5 3.5h7L19 8v12.5H7.5z" />
      <path d="M14.5 3.5V8H19" />
      <path d="M5 6.5v14h10" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17M12 3.5c2.2 2.4 3.3 5.3 3.3 8.5S14.2 18.1 12 20.5c-2.2-2.4-3.3-5.3-3.3-8.5S9.8 5.9 12 3.5Z" />
    </>
  ),
  check: <path d="M4.5 12.5 9.5 17.5 19.5 6.5" />,
  repo: (
    <>
      <path d="M5.5 3.5h13v17h-13a2 2 0 0 1 0-4h13" />
      <path d="M5.5 3.5a2 2 0 0 0-2 2v11" />
    </>
  ),
  external: (
    <>
      <path d="M14 4h6v6" />
      <path d="M20 4 11 13" />
      <path d="M18 14.5v4a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 4 18.5v-11A1.5 1.5 0 0 1 5.5 6h4" />
    </>
  ),
  play: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M10 8.5 16 12l-6 3.5z" />
    </>
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  arrowUp: <path d="M12 19V5m0 0-6 6m6-6 6 6" />,
  mail: (
    <>
      <rect x="2.5" y="5" width="19" height="14" rx="1.5" />
      <path d="m3 6.5 9 6.5 9-6.5" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21.5s7-6.2 7-11.2a7 7 0 1 0-14 0c0 5 7 11.2 7 11.2Z" />
      <circle cx="12" cy="10" r="2.6" />
    </>
  ),
};

// Brand marks are filled rather than stroked.
const BRANDS = {
  linkedin:
    'M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13M7.12 20.45H3.55V9h3.57zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0',
  github:
    'M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2 0-.4-.5-1.6.2-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.6.2 2.8.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1.1.9 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3',
};

export default function Icon({ name, size = 24, className, ...rest }) {
  const brand = BRANDS[name];
  if (brand) {
    return (
      <svg
        className={className}
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        focusable="false"
        {...rest}
      >
        <path d={brand} />
      </svg>
    );
  }

  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {PATHS[name]}
    </svg>
  );
}
