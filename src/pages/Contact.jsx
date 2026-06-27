import ContactForm from '../components/ContactForm.jsx'

const CONTACT_METHODS = [
  { id: 'email', label: 'Email us', value: 'hello@nexoratech.com', href: 'mailto:hello@nexoratech.com' },
  { id: 'phone', label: 'Call us', value: '+1 (415) 555-0148', href: 'tel:+14155550148' },
  { id: 'office', label: 'Office', value: 'Remote-first, global team', href: '#' },
]

export default function Contact() {
  return (
    <>
      <section className="page-banner">
        <div className="wrap page-banner__inner">
          <div>
            <span className="eyebrow">Contact</span>
            <h2>Let's build something.</h2>
            <p>Tell us about your project and we'll get back to you within one business day. For active clients, reach your account lead directly.</p>
          </div>
          <img
            className="page-banner__img"
            src="https://images.unsplash.com/photo-1758873268745-dd2cf0d677b5?w=1000&q=80&auto=format&fit=crop"
            alt="Nexora Technologies team discussing a project"
          />
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="grid grid--contact-methods">
            {CONTACT_METHODS.map((m) => (
              <a key={m.id} href={m.href} className="contact-method">
                <span className="eyebrow">{m.label}</span>
                <span className="contact-method__value">{m.value}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--last">
        <div className="wrap contact-layout">
          <div className="contact-intro">
            <h3>What happens after you send this?</h3>
            <ol className="contact-steps">
              <li>We read every message and reply within one business day.</li>
              <li>A short call to understand scope, timeline, and budget.</li>
              <li>You get a proposal — no obligation, no pressure.</li>
            </ol>
          </div>
          <ContactForm
            apiPath="/api/contact"
            fields={[
              { name: 'name', label: 'Name', type: 'text', placeholder: 'Jordan Lee', required: true },
              { name: 'email', label: 'Email', type: 'email', placeholder: 'jordan@company.com', required: true },
              { name: 'mobile', label: 'Mobile number', type: 'tel', placeholder: '+1 (415) 555-0148', required: true },
              { name: 'company', label: 'Company', type: 'text', placeholder: 'Acme Inc.', required: false },
              { name: 'message', label: 'How can we help?', type: 'textarea', rows: 5, placeholder: 'Describe your question or project request.', required: true },
            ]}
            submitLabel="Send message"
          />
        </div>
      </section>
    </>
  )
}
