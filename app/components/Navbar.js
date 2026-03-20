'use client';

export default function Navbar({ theme, toggleTheme }) {
  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: '0 5%', height: '70px', display: 'flex',
      alignItems: 'center', justifyContent: 'space-between',
      background: theme === 'dark' ? 'rgba(7,9,26,0.85)' : 'rgba(240,244,255,0.85)',
      backdropFilter: 'blur(16px)',
      borderBottom: '1px solid var(--border)',
      transition: 'background 0.4s',
    }}>
      <div style={{
        fontFamily: 'var(--font-orbitron), monospace',
        fontWeight: 900, fontSize: '18px', letterSpacing: '2px',
        color: 'var(--white)',
      }}>
        QUBIT<span style={{ color: 'var(--cyan)' }}>PRIME</span>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
        {['Products', 'Blog', 'About', 'Contact'].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} style={{
            fontSize: '13px', fontWeight: 400, color: 'var(--muted)',
            textDecoration: 'none', letterSpacing: '1px', transition: 'color 0.2s',
          }}
            onMouseEnter={e => e.target.style.color = 'var(--cyan)'}
            onMouseLeave={e => e.target.style.color = 'var(--muted)'}
          >
            {item}
          </a>
        ))}
        <button onClick={toggleTheme} style={{
          background: 'none',
          border: '1px solid var(--border)',
          borderRadius: '20px', padding: '6px 14px',
          color: 'var(--muted)', fontSize: '12px',
          cursor: 'pointer', transition: 'all 0.2s',
          fontFamily: 'var(--font-sora), sans-serif',
        }}
          onMouseEnter={e => { e.target.style.borderColor = 'var(--cyan)'; e.target.style.color = 'var(--cyan)'; }}
          onMouseLeave={e => { e.target.style.borderColor = 'var(--border)'; e.target.style.color = 'var(--muted)'; }}
        >
          {theme === 'dark' ? '☀ Light' : '🌙 Dark'}
        </button>
      </div>
    </nav>
  );
}