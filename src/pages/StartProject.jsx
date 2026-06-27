import ContactForm from '../components/ContactForm.jsx'

const PROJECT_STEPS = [
  { id: 1, title: 'Share Your Vision', description: 'Tell us about your idea, goals, and timeline.' },
  { id: 2, title: 'Strategic Planning', description: 'We analyze requirements and propose a tailored approach.' },
  { id: 3, title: 'Kick Off & Execute', description: 'Your dedicated team starts building with regular updates.' },
  { id: 4, title: 'Launch & Support', description: 'We deploy your project and provide ongoing support.' },
]

export default function StartProject() {
  return (
    <>
      <section className="page-banner">
        <div className="wrap page-banner__inner">
          <div>
            <span className="eyebrow">Start Your Project</span>
            <h2>Let's turn your ideas into reality.</h2>
            <p>We're ready to help you build something extraordinary. Share your vision and let's create together.</p>
          </div>
          <img
            className="page-banner__img"
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1000&q=80&auto=format&fit=crop"
            alt="Team collaborating on a new project"
          />
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h3 style={{ marginBottom: '3rem', textAlign: 'center' }}>How We Work</h3>
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
            {PROJECT_STEPS.map((step) => (
              <div key={step.id} style={{ padding: '2rem', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', borderRadius: '0.5rem', border: '1px solid #764ba2', boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)' }}>
                <div style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem', color: '#e0e7ff' }}>
                  {step.id}
                </div>
                <h4 style={{ marginBottom: '0.5rem', color: '#fff' }}>{step.title}</h4>
                <p style={{ color: '#e0e7ff' }}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--last">
        <div className="wrap contact-layout">
          <div className="contact-intro">
            <h3>Ready to begin?</h3>
            <p>Fill out the form and we'll be in touch within one business day to discuss your project in detail.</p>
          </div>
          <ContactForm
            apiPath="/api/start-project"
            fields={[
              { name: 'name', label: 'Name', type: 'text', placeholder: 'Jordan Lee', required: true },
              { name: 'email', label: 'Email', type: 'email', placeholder: 'jordan@company.com', required: true },
              { name: 'mobile', label: 'Mobile number', type: 'tel', placeholder: '+1 (415) 555-0148', required: true },
              { name: 'company', label: 'Company', type: 'text', placeholder: 'Acme Inc.', required: false },
              { name: 'projectType', label: 'Project type', type: 'text', placeholder: 'Web app, SaaS, mobile product', required: true },
              { name: 'timeline', label: 'Timeline', type: 'text', placeholder: '3-6 months, Q4 launch, ASAP', required: false },
              { name: 'budget', label: 'Budget range', type: 'text', placeholder: '$50k - $100k', required: false },
              { name: 'message', label: 'Project details', type: 'textarea', rows: 5, placeholder: 'Describe the idea, target users, and success metrics.', required: true },
            ]}
            submitLabel="Start project"
          />
        </div>
      </section>
    </>
  )
}
