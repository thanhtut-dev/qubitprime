'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      padding: '40px 5%',
      borderTop: '1px solid var(--border)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '16px',
    }}>
      {/* Logo */}
      <div style={{
        fontFamily: 'var(--font-orbitron), monospace',
        fontWeight: 900, fontSize: '16px',
        color: 'var(--white)',
      }}>
        QUBIT<span style={{ color: 'var(--cyan)' }}>PRIME</span>
      </div>

      {/* Copyright */}
      <p style={{ fontSize: '12px', color: 'var(--muted)' }}>
        © {currentYear} Qubit Prime. Beyond Binary.
      </p>

      {/* Links */}
      <div style={{ display: 'flex', gap: '24px' }}>
        {['Products', 'Blog', 'About', 'Contact'].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} style={{
            fontSize: '12px', color: 'var(--muted)',
            textDecoration: 'none', transition: 'color 0.2s',
          }}
            onMouseEnter={e => e.target.style.color = 'var(--cyan)'}
            onMouseLeave={e => e.target.style.color = 'var(--muted)'}
          >
            {item}
          </a>
        ))}
      </div>
    </footer>
  );
}