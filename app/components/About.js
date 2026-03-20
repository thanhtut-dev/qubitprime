'use client';

export default function About() {
  return (
    <section id="about" style={{ padding: '100px 5%' }}>
      <p style={{
        fontSize: '11px', letterSpacing: '5px',
        textTransform: 'uppercase', color: 'var(--cyan)', marginBottom: '12px',
      }}>
        Who We Are
      </p>
      <h2 style={{
        fontFamily: 'var(--font-orbitron), monospace',
        fontSize: 'clamp(22px, 3vw, 36px)',
        fontWeight: 700, marginBottom: '56px',
        color: 'var(--white)',
      }}>
        About Qubit Prime
      </h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '80px',
        alignItems: 'center',
      }}>
        {/* Left — text */}
        <div>
          <p style={{
            fontSize: '15px', color: 'var(--muted)',
            lineHeight: 1.8, marginBottom: '32px',
          }}>
            We are a technology brand from Thailand on a mission to build digital products
            that empower small businesses — and ultimately, make the world a better place.
          </p>

          {/* Mission */}
          <div style={{
            background: 'var(--card)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius)',
            padding: '24px', marginBottom: '16px',
          }}>
            <h4 style={{
              fontFamily: 'var(--font-orbitron), monospace',
              fontSize: '12px', letterSpacing: '3px',
              color: 'var(--cyan)', marginBottom: '8px',
            }}>
              MISSION
            </h4>
            <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.7 }}>
              To empower businesses and individuals through innovative digital products —
              starting with world-class Odoo custom modules — while sharing knowledge
              and growing a trusted tech brand through content and community.
            </p>
          </div>

          {/* Vision */}
          <div style={{
            background: 'var(--card)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius)',
            padding: '24px',
          }}>
            <h4 style={{
              fontFamily: 'var(--font-orbitron), monospace',
              fontSize: '12px', letterSpacing: '3px',
              color: 'var(--cyan)', marginBottom: '8px',
            }}>
              VISION
            </h4>
            <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.7 }}>
              To grow from a local tech innovator to a global force — building solutions
              that solve real daily problems for people and the planet.
            </p>
          </div>
        </div>

        {/* Right — logo visual */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ position: 'relative' }}>
            <div style={{
              position: 'absolute', inset: '-40px',
              border: '1px solid rgba(0,200,255,0.08)',
              borderRadius: '50%',
            }} />
            <div style={{
              position: 'absolute', inset: '-20px',
              border: '1px solid rgba(123,47,255,0.08)',
              borderRadius: '50%',
            }} />
            <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" width="260" height="260">
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
        </div>
      </div>
    </section>
  );
}