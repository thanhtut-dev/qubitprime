'use client';

import { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = async (e) => {
      e.preventDefault();
      setSubmitted(true);
      try {
        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        });
        if (!res.ok) throw new Error('Failed');
        setTimeout(() => {
          setSubmitted(false);
          setForm({ name: '', email: '', subject: '', message: '' });
        }, 3000);
      } catch (err) {
        console.error(err);
        setSubmitted(false);
      }
    };

  const inputStyle = {
    width: '100%',
    background: 'var(--card)',
    border: '1px solid var(--border)',
    borderRadius: '10px',
    padding: '14px 18px',
    color: 'var(--white)',
    fontFamily: 'var(--font-sora), sans-serif',
    fontSize: '14px',
    outline: 'none',
    transition: 'border-color 0.2s',
  };

  const contactItems = [
    { icon: '✉', label: 'Email', value: 'thanhtut@qubitprime.io' },
    { icon: '🌐', label: 'Website', value: 'qubitprime.io' },
    { icon: '📍', label: 'Location', value: 'Thailand 🇹🇭' },
  ];

  return (
    <section id="contact" style={{ padding: '100px 5%', background: 'var(--bg2)' }}>
      <p style={{
        fontSize: '11px', letterSpacing: '5px',
        textTransform: 'uppercase', color: 'var(--cyan)', marginBottom: '12px',
      }}>
        Get In Touch
      </p>
      <h2 style={{
        fontFamily: 'var(--font-orbitron), monospace',
        fontSize: 'clamp(22px, 3vw, 36px)',
        fontWeight: 700, marginBottom: '56px',
        color: 'var(--white)',
      }}>
        Contact Us
      </h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '80px',
        alignItems: 'start',
      }}>
        {/* Left — contact info */}
        <div>
          <p style={{
            fontSize: '14px', color: 'var(--muted)',
            lineHeight: 1.8, marginBottom: '32px',
          }}>
            Have a question about our Odoo modules or want to discuss a custom solution
            for your business? We would love to hear from you.
          </p>

          {contactItems.map((item, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center',
              gap: '14px', marginBottom: '20px',
            }}>
              <div style={{
                width: '40px', height: '40px', borderRadius: '10px',
                background: 'rgba(0,200,255,0.08)',
                border: '1px solid var(--border)',
                display: 'flex', alignItems: 'center',
                justifyContent: 'center', fontSize: '16px', flexShrink: 0,
              }}>
                {item.icon}
              </div>
              <div>
                <strong style={{
                  display: 'block', color: 'var(--white)',
                  fontSize: '14px', marginBottom: '2px',
                }}>
                  {item.label}
                </strong>
                <span style={{ fontSize: '13px', color: 'var(--muted)' }}>
                  {item.value}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Right — contact form */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <input
            type="text"
            placeholder="Your name"
            required
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
            style={inputStyle}
            onFocus={e => e.target.style.borderColor = 'var(--cyan)'}
            onBlur={e => e.target.style.borderColor = 'var(--border)'}
          />
          <input
            type="email"
            placeholder="Your email"
            required
            value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
            style={inputStyle}
            onFocus={e => e.target.style.borderColor = 'var(--cyan)'}
            onBlur={e => e.target.style.borderColor = 'var(--border)'}
          />
          <input
            type="text"
            placeholder="Subject"
            value={form.subject}
            onChange={e => setForm({ ...form, subject: e.target.value })}
            style={inputStyle}
            onFocus={e => e.target.style.borderColor = 'var(--cyan)'}
            onBlur={e => e.target.style.borderColor = 'var(--border)'}
          />
          <textarea
            placeholder="Your message..."
            value={form.message}
            onChange={e => setForm({ ...form, message: e.target.value })}
            style={{ ...inputStyle, height: '120px', resize: 'vertical' }}
            onFocus={e => e.target.style.borderColor = 'var(--cyan)'}
            onBlur={e => e.target.style.borderColor = 'var(--border)'}
          />
          <button type="submit" style={{
            width: '100%', padding: '14px 32px',
            background: submitted ? '#1D9E75' : 'var(--cyan)',
            color: '#07091a', fontWeight: 600, fontSize: '14px',
            border: 'none', borderRadius: '30px', cursor: 'pointer',
            letterSpacing: '1px', transition: 'all 0.3s',
            fontFamily: 'var(--font-sora), sans-serif',
          }}>
            {submitted ? 'Message Sent! ✓' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
}