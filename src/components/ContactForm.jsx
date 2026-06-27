import { useEffect, useMemo, useState } from 'react'

const defaultFields = [
  { name: 'name', label: 'Name', type: 'text', placeholder: 'Jordan Lee', required: true },
  { name: 'email', label: 'Email', type: 'email', placeholder: 'jordan@company.com', required: true },
  { name: 'message', label: 'What are you building?', type: 'textarea', rows: 5, placeholder: 'Tell us about the project, timeline, and budget range.', required: true },
]

function createInitialState(fields) {
  return fields.reduce((state, field) => ({ ...state, [field.name]: '' }), {})
}

export default function ContactForm({ fields = defaultFields, submitLabel = 'Send message', apiPath = '/api/contact' }) {
  const fieldList = useMemo(() => fields, [fields])
  const [form, setForm] = useState(() => createInitialState(fieldList))
  const [status, setStatus] = useState('idle') // idle | sent

  useEffect(() => {
    setForm(createInitialState(fieldList))
  }, [fieldList])

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const apiBase = import.meta.env.VITE_API_BASE_URL || ''

    try {
      const response = await fetch(`${apiBase}${apiPath}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (!response.ok) {
        throw new Error('Failed to send form')
      }

      setStatus('sent')
      setForm(createInitialState(fieldList))
    } catch (error) {
      console.error('Form submission failed:', error)
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div className="contact-form contact-form--sent">
        <h3>Message sent.</h3>
        <p>We reply to every project inquiry within one business day.</p>
        <button className="btn btn--ghost" onClick={() => setStatus('idle')}>Send another message</button>
      </div>
    )
  }

  if (status === 'error') {
    return (
      <div className="contact-form contact-form--sent">
        <h3>Submission error.</h3>
        <p>There was a problem sending your message. Please try again in a moment.</p>
        <button className="btn btn--ghost" onClick={() => setStatus('idle')}>Try again</button>
      </div>
    )
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      {fieldList.map((field) => (
        <div key={field.name} className="field">
          <label htmlFor={field.name}>{field.label}</label>
          {field.type === 'textarea' ? (
            <textarea
              id={field.name}
              name={field.name}
              rows={field.rows || 4}
              required={field.required}
              value={form[field.name]}
              onChange={handleChange}
              placeholder={field.placeholder}
            />
          ) : (
            <input
              id={field.name}
              name={field.name}
              type={field.type}
              required={field.required}
              value={form[field.name]}
              onChange={handleChange}
              placeholder={field.placeholder}
            />
          )}
        </div>
      ))}
      <button type="submit" className="btn btn--primary">{submitLabel}</button>
    </form>
  )
}
