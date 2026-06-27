import { Link } from 'react-router-dom'
import { PulseLine } from '../components/Layout.jsx'
import { ServiceCard, ProjectCard } from '../components/Cards.jsx'
import Stats from '../components/Stats.jsx'
import Testimonials from '../components/Testimonials.jsx'
import services from '../data/services.js'
import projects from '../data/projects.js'
import achievements from '../data/achievements.js'
import testimonials from '../data/testimonials.js'

export default function Home() {
  return (
    <>
      <section className="page-banner">
        <div className="wrap page-banner__inner">
          <div>
            <span className="eyebrow">Innovating Tomorrow, Today.</span>
            <h1 className="hero__headline">
              We build the systems<br />your <span className="accent-text">business runs on</span>.
            </h1>
            <p className="hero__sub">
              Nexora Technologies is a small engineering studio that designs cloud infrastructure,
              ships production software, and keeps it all secure — so your team can
              focus on the product, not the plumbing.
            </p>
            <div className="hero__actions">
              <Link to="/start-project" className="btn btn--primary">Start a project</Link>
              <Link to="/services" className="btn btn--ghost">See our services</Link>
            </div>
          </div>
          <img
            className="page-banner__img"
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1000&q=80&auto=format&fit=crop"
            alt="Team collaborating on technology"
          />
        </div>
        <PulseLine nodeCount={6} />
      </section>

      <section className="section section--stats">
        <div className="wrap">
          <Stats items={achievements} />
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">What we do</span>
            <h2>Four disciplines, one team.</h2>
            <p>Every engagement draws from the same pool of senior engineers — no handoffs between agencies, no context lost in translation.</p>
          </div>
          <div className="grid grid--services">
            {services.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Recent work</span>
            <h2>Systems we've shipped.</h2>
            <p>A few of the products and platforms currently running in production for our clients.</p>
          </div>
          <div className="grid grid--projects">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--last">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">What our clients say</span>
            <h2>Trusted by teams who ship.</h2>
            <p>We measure success by whether clients call us back for the next project.</p>
          </div>
          <Testimonials items={testimonials} />
        </div>
      </section>
    </>
  )
}
