export default function Stats({ items }) {
  return (
    <div className="stats">
      {items.map((item) => (
        <div key={item.id} className="stats__item">
          <span className="stats__value">{item.value}</span>
          <span className="stats__label">{item.label}</span>
        </div>
      ))}
    </div>
  )
}
