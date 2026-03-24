'use client';

const products = [
  {
    name: 'Customer Access by Sales Team',
    desc: 'Restrict salespersons to customers assigned to their Sales Team, and allow access only to Sale Orders, CRM Leads, and Opportunities created by their own team.',
    link: 'https://apps.odoo.com/apps/modules/18.0/customer_access_by_sales_team',
  },
  {
    name: 'Product Access by Sales Team',
    desc: 'Restrict product visibility by Sales Team. Allows each team to access and sell only products from assigned categories, including filtered quotation templates and product variants.',
    link: 'https://apps.odoo.com/apps/modules/18.0/product_access_by_sales_team',
  },
  {
    name: 'Department Purchase Budget Control',
    desc: 'Department-based Purchase Budget Control with Automatic Approval Workflow.',
    link: 'https://apps.odoo.com/apps/modules/18.0/purchase_order_budget_control',
  },
  {
    name: 'POS Action Access',
    desc: 'Restrict POS actions using employee-level permissions.',
    link: 'https://apps.odoo.com/apps/modules/18.0/pos_control_buttons_access',
  },
  {
    name: 'Sale Quotation Discount Approval',
    desc: 'Approval workflow for Sales quotation discounts with email notifications.',
    link: 'https://apps.odoo.com/apps/modules/16.0/sale_quotation_discount_approval',
  },
];

export default function Products() {
  return (
    <section id="products" style={{ padding: '100px 5%' }}>
      <p style={{
        fontSize: '11px', letterSpacing: '5px',
        textTransform: 'uppercase', color: 'var(--cyan)', marginBottom: '12px',
      }}>
        Our Products
      </p>
      <h2 style={{
        fontFamily: 'var(--font-orbitron), monospace',
        fontSize: 'clamp(22px, 3vw, 36px)',
        fontWeight: 700, marginBottom: '16px',
        color: 'var(--white)',
      }}>
        Odoo Custom Modules
      </h2>
      <p style={{
        fontSize: '15px', color: 'var(--muted)',
        lineHeight: 1.7, maxWidth: '560px', marginBottom: '56px',
      }}>
        Production-ready modules built for small businesses. Available on the official Odoo App Store.
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '20px',
      }}>
        {products.map((product, i) => (
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
              e.currentTarget.style.borderColor = 'var(--cyan)';
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.background = 'rgba(0,200,255,0.05)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'var(--border)';
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.background = 'var(--card)';
            }}
          >
            <span style={{
              display: 'inline-block', fontSize: '10px',
              letterSpacing: '2px', textTransform: 'uppercase',
              color: 'var(--cyan)', background: 'rgba(0,200,255,0.1)',
              border: '1px solid rgba(0,200,255,0.2)',
              borderRadius: '20px', padding: '3px 10px', marginBottom: '14px',
            }}>
              Odoo Module
            </span>
            <h3 style={{
              fontFamily: 'var(--font-orbitron), monospace',
              fontSize: '15px', fontWeight: 700,
              marginBottom: '10px', color: 'var(--white)',
            }}>
              {product.name}
            </h3>
            <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.7 }}>
              {product.desc}
            </p>
            <a href={product.link} style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              fontSize: '12px', color: 'var(--cyan)',
              marginTop: '16px', textDecoration: 'none', letterSpacing: '1px',
              transition: 'gap 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.gap = '10px'}
              onMouseLeave={e => e.currentTarget.style.gap = '6px'}
            >
              View on App Store →
            </a>
          </div>
        ))}

        {/* Coming soon card */}
        <div style={{
          background: 'var(--card)',
          border: '1px dashed var(--border)',
          borderRadius: 'var(--radius)',
          padding: '28px', opacity: 0.5,
        }}>
          <span style={{
            display: 'inline-block', fontSize: '10px',
            letterSpacing: '2px', textTransform: 'uppercase',
            color: 'var(--cyan)', background: 'rgba(0,200,255,0.1)',
            border: '1px solid rgba(0,200,255,0.2)',
            borderRadius: '20px', padding: '3px 10px', marginBottom: '14px',
          }}>
            Coming Soon
          </span>
          <h3 style={{
            fontFamily: 'var(--font-orbitron), monospace',
            fontSize: '15px', fontWeight: 700,
            marginBottom: '10px', color: 'var(--white)',
          }}>
            More Modules
          </h3>
          <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.7 }}>
            New modules in development. Follow our blog for updates on upcoming releases and early access.
          </p>
        </div>
      </div>
    </section>
  );
}