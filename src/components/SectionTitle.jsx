export default function SectionTitle({ heading, align = 'center' }) {
  return (
    <div className={`sec-title sec-title--${align}`}>
      <h2 className="sec-title__heading">{heading}</h2>
      <span className="sec-title__rule" />
    </div>
  );
}
