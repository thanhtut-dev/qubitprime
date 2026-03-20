'use client';

export default function Hero() {
  return (
    <section style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      textAlign: 'center', padding: '100px 5% 60px',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Background effects */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        <div style={{
          position: 'absolute', width: '500px', height: '500px',
          background: 'var(--cyan)', borderRadius: '50%',
          filter: 'blur(80px)', opacity: 0.1,
          top: '-100px', left: '-100px',
        }} />
        <div style={{
          position: 'absolute', width: '400px', height: '400px',
          background: 'var(--violet)', borderRadius: '50%',
          filter: 'blur(80px)', opacity: 0.1,
          bottom: '-50px', right: '-50px',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(rgba(0,200,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,200,255,0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />
      </div>

      {/* Logo mark */}
      <div className="fade-up" style={{ width: '120px', height: '120px', margin: '0 auto 32px', position: 'relative' }}>
        <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" width="120" height="120">
          <circle cx="60" cy="60" r="18" fill="none" stroke="#00C8FF" strokeWidth="2" opacity="0.9"/>
          <circle cx="60" cy="60" r="7" fill="#00C8FF"/>
          <circle cx="60" cy="60" r="3" fill="#ffffff"/>
          <g className="ring1" style={{ transformOrigin: '60px 60px' }}>
            <ellipse cx="60" cy="60" rx="50" ry="19" fill="none" stroke="#00C8FF" strokeWidth="1.2" opacity="0.6" transform="rotate(-25 60 60)"/>
            <circle cx="106" cy="60" r="4" fill="#00C8FF" transform="rotate(-25 60 60)"/>
          </g>
          <g className="ring2" style={{ transformOrigin: '60px 60px' }}>
            <ellipse cx="60" cy="60" rx="38" ry="14" fill="none" stroke="#7B2FFF" strokeWidth="1.2" opacity="0.7" transform="rotate(55 60 60)"/>
            <circle cx="98" cy="60" r="3" fill="#7B2FFF" transform="rotate(55 60 60)"/>
          </g>
          <g className="ring3" style={{ transformOrigin: '60px 60px' }}>
            <ellipse cx="60" cy="60" rx="26" ry="10" fill="none" stroke="#00C8FF" strokeWidth="1" opacity="0.5" transform="rotate(-70 60 60)"/>
            <circle cx="86" cy="60" r="2" fill="#00C8FF" transform="rotate(-70 60 60)"/>
          </g>
        </svg>
      </div>

      {/* Heading */}
      <h1 className="fade-up-1" style={{
        fontFamily: 'var(--font-orbitron), monospace',
        fontWeight: 900,
        fontSize: 'clamp(36px, 6vw, 72px)',
        letterSpacing: '3px', lineHeight: 1.1,
        color: 'var(--white)',
      }}>
        QUBIT<span style={{ color: 'var(--cyan)' }}> PRIME</span>
      </h1>

      <p className="fade-up-2" style={{
        fontSize: 'clamp(13px, 1.5vw, 16px)',
        letterSpacing: '6px', textTransform: 'uppercase',
        color: 'var(--muted)', margin: '16px 0 32px',
      }}>
        Beyond Binary
      </p>

      <p className="fade-up-3" style={{
        maxWidth: '560px', fontSize: '16px',
        lineHeight: 1.8, color: 'var(--muted)', marginBottom: '48px',
      }}>
        Empowering small businesses with world-class Odoo custom modules
        and cutting-edge digital solutions. Built for today. Designed for tomorrow.
      </p>

      <div className="fade-up-4" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <a href="#products" style={{
          padding: '14px 32px', background: 'var(--cyan)',
          color: '#07091a', fontWeight: 600, fontSize: '14px',
          border: 'none', borderRadius: '30px', cursor: 'pointer',
          textDecoration: 'none', letterSpacing: '1px', transition: 'all 0.2s',
          fontFamily: 'var(--font-sora), sans-serif',
        }}
          onMouseEnter={e => { e.target.style.transform = 'translateY(-2px)'; e.target.style.boxShadow = '0 8px 24px rgba(0,200,255,0.3)'; }}
          onMouseLeave={e => { e.target.style.transform = 'none'; e.target.style.boxShadow = 'none'; }}
        >
          Explore Products
        </a>
        <a href="#about" style={{
          padding: '14px 32px', background: 'transparent',
          color: 'var(--cyan)', fontWeight: 400, fontSize: '14px',
          border: '1px solid var(--cyan)', borderRadius: '30px',
          cursor: 'pointer', textDecoration: 'none',
          letterSpacing: '1px', transition: 'all 0.2s',
          fontFamily: 'var(--font-sora), sans-serif',
        }}
          onMouseEnter={e => { e.target.style.background = 'rgba(0,200,255,0.08)'; e.target.style.transform = 'translateY(-2px)'; }}
          onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.transform = 'none'; }}
        >
          Our Mission
        </a>
      </div>

      <p style={{
        marginTop: '64px', fontSize: '12px',
        letterSpacing: '3px', color: 'var(--muted)', opacity: 0.5,
      }}>
        ↓ &nbsp; scroll to explore
      </p>
    </section>
  );
}