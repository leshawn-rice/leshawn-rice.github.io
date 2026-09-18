export default function SectionTitle({ eyebrow, heading, align = 'center' }) {
  return (
    <div className={`sec-title sec-title--${align}`}>
      {eyebrow && <p className="sec-title__eyebrow">{eyebrow}</p>}
      <h2 className="sec-title__heading">{heading}</h2>
      <span className="sec-title__rule" />
    </div>
  );
}
