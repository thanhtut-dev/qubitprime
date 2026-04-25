'use client';

const stats = [
  { num: '30+', label: 'Odoo Modules' },
  { num: '4+', label: 'Years Experience' },
  { num: '100%', label: 'Open Source Friendly' },
  { num: '🇹🇭', label: 'Based in Thailand' },
];

export default function Stats() {
  return (
    <div style={{
      background: 'var(--bg2)',
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
      padding: '60px 5%',
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
        gap: '40px',
        maxWidth: '900px',
        margin: '0 auto',
        textAlign: 'center',
      }}>
        {stats.map((stat, i) => (
          <div key={i}>
            <div style={{
              fontFamily: 'var(--font-orbitron), monospace',
              fontSize: '40px',
              fontWeight: 900,
              color: 'var(--cyan)',
            }}>
              {stat.num}
            </div>
            <div style={{
              fontSize: '13px',
              color: 'var(--muted)',
              letterSpacing: '1px',
              marginTop: '4px',
            }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
