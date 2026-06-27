export default function Testimonials({ items }) {
  return (
    <div className="grid grid--testimonials">
      {items.map((t) => (
        <figure key={t.id} className="testimonial">
          {t.image && (
            <img
              src={t.image}
              alt={t.name}
              style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                objectFit: 'cover',
                marginBottom: '1rem',
              }}
            />
          )}
          <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
          <figcaption>
            <span className="testimonial__name">{t.name}</span>
            <span className="testimonial__role">{t.role}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  )
}
