export function ServiceCard({ service, index }) {
  return (
    <div className="service-card">
      <span className="service-card__index">{String(index + 1).padStart(2, '0')}</span>
      <h3>{service.title}</h3>
      <p>{service.summary}</p>
      <ul className="service-card__points">
        {service.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </div>
  )
}

export function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-card__head">
        <h3>{product.name}</h3>
        <span className="eyebrow">{product.tagline}</span>
      </div>
      <p>{product.description}</p>
      <ul className="service-card__points">
        {product.features.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>
    </div>
  )
}

export function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <span className="eyebrow">{project.tag}</span>
      <h3>{project.name}</h3>
      <p>{project.blurb}</p>
    </div>
  )
}
