import { Link } from 'react-router-dom'
import { ProductCard } from '../components/Cards.jsx'
import products from '../data/products.js'

export default function Products() {
  return (
    <>
      <section className="page-banner">
        <div className="wrap page-banner__inner">
          <div>
            <span className="eyebrow">Products</span>
            <h2>Software we build once, you use every day.</h2>
            <p>Alongside custom engineering, Nexora maintains a small suite of products built from patterns we kept rebuilding for clients — now packaged so you don't have to.</p>
          </div>
          <img
            className="page-banner__img"
            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1000&q=80&auto=format&fit=crop"
            alt="Dashboard and analytics on screens in a modern office"
          />
        </div>
      </section>

      <section className="section section--last">
        <div className="wrap">
          <div className="grid grid--products">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="cta-panel">
            <img
              className="cta-panel__img"
              src="https://images.unsplash.com/photo-1758873268705-bb756c95f26a?w=900&q=80&auto=format&fit=crop"
              alt="Nexora team discussing a product roadmap"
            />
            <div className="cta-panel__body">
              <h3>Want a walkthrough?</h3>
              <p>We'll show you which product fits your stack, with no sales script.</p>
              <Link to="/contact" className="btn btn--primary">Book a demo</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
