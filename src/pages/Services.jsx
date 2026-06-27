import { Link } from 'react-router-dom'
import { ServiceCard } from '../components/Cards.jsx'
import services from '../data/services.js'

export default function Services() {
  return (
    <>
      <section className="page-banner">
        <div className="wrap page-banner__inner">
          <div>
            <span className="eyebrow">Services</span>
            <h2>Engineering, end to end.</h2>
            <p>From the first architecture diagram to the dashboards your team checks every morning — we cover the full stack of building and running software.</p>
          </div>
          <img
            className="page-banner__img"
            src="https://images.unsplash.com/photo-1758873269035-aae0e1fd3422?w=1000&q=80&auto=format&fit=crop"
            alt="Engineers collaborating around a whiteboard, planning system architecture"
          />
        </div>
      </section>

      <section className="section section--last">
        <div className="wrap">
          <div className="grid grid--services">
            {services.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>

          <div className="cta-panel">
            <img
              className="cta-panel__img"
              src="https://images.unsplash.com/photo-1758873268705-bb756c95f26a?w=900&q=80&auto=format&fit=crop"
              alt="Nexora team discussing a project at a desk"
            />
            <div className="cta-panel__body">
              <h3>Not sure where to start?</h3>
              <p>Tell us what you're working on and we'll recommend the right team.</p>
              <Link to="/contact" className="btn btn--primary">Talk to us</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

