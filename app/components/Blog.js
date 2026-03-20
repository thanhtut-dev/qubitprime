'use client';

const posts = [
  {
    date: 'March 2026',
    title: 'The Rise of Quantum Computing in Business Applications',
    desc: 'How quantum technology is beginning to reshape the way small businesses approach data processing and security.',
    category: 'Tech Research',
  },
  {
    date: 'March 2026',
    title: 'Why Odoo is the Best ERP for Small Businesses in 2026',
    desc: 'A deep dive into why Odoo Community Edition is the smartest choice for growing businesses with tight budgets.',
    category: 'Odoo',
  },
  {
    date: 'February 2026',
    title: 'Next.js vs Astro — Which Should You Choose in 2026?',
    desc: 'A practical comparison of the two most popular modern web frameworks for building fast, SEO-friendly websites.',
    category: 'Web Dev',
  },
];

export default function Blog() {
  return (
    <section id="blog" style={{ padding: '100px 5%', background: 'var(--bg2)' }}>
      <p style={{
        fontSize: '11px', letterSpacing: '5px',
        textTransform: 'uppercase', color: 'var(--cyan)', marginBottom: '12px',
      }}>
        Knowledge Hub
      </p>
      <h2 style={{
        fontFamily: 'var(--font-orbitron), monospace',
        fontSize: 'clamp(22px, 3vw, 36px)',
        fontWeight: 700, marginBottom: '16px',
        color: 'var(--white)',
      }}>
        Tech Blog
      </h2>
      <p style={{
        fontSize: '15px', color: 'var(--muted)',
        lineHeight: 1.7, maxWidth: '560px', marginBottom: '56px',
      }}>
        Research, news, and insights from the world of technology — curated for builders and innovators.
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '20px',
      }}>
        {posts.map((post, i) => (
          <div key={i}
            style={{
              background: 'var(--card)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius)',
              padding: '28px',
              transition: 'all 0.3s',
              cursor: 'pointer',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'rgba(123,47,255,0.4)';
              e.currentTarget.style.transform = 'translateY(-4px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'var(--border)';
              e.currentTarget.style.transform = 'none';
            }}
          >
            <p style={{
              fontSize: '11px', letterSpacing: '2px',
              color: 'var(--muted)', marginBottom: '12px',
            }}>
              {post.date}
            </p>
            <h3 style={{
              fontSize: '16px', fontWeight: 600,
              marginBottom: '10px', lineHeight: 1.5,
              color: 'var(--white)',
            }}>
              {post.title}
            </h3>
            <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.7 }}>
              {post.desc}
            </p>
            <span style={{
              display: 'inline-block', fontSize: '10px',
              letterSpacing: '2px', textTransform: 'uppercase',
              color: '#7B2FFF', background: 'rgba(123,47,255,0.1)',
              border: '1px solid rgba(123,47,255,0.2)',
              borderRadius: '20px', padding: '3px 10px', marginTop: '16px',
            }}>
              {post.category}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}