'use client';

const products = [
   {
    name: 'Product Access by Sales Team',
    desc: 'Restrict product visibility and sale order access by Sales Team — each team sees only their assigned product categories and their own team\'s orders.',
    link: '',
    demo_link: 'https://youtu.be/o6ilJYhgEHc?si=R6oagH5a_u4kDNlH',
  },
  {
    name: 'Sale Multi-UOM Pricelist',
    desc: 'Sell the same product by Unit, Pack, or Box — each with its own price, automatically applied in sales orders and your eCommerce store.',
    link: '',
    demo_link: 'https://youtu.be/cp6kzMbKjZI?si=nXu-AFH1xSmjuDBg',
  },
  {
    name: 'Purchase Multi-Warehouse Distribution',
    desc: 'Split a single purchase order receipt across multiple warehouses and arrival dates automatically.',
    link: '',
    demo_link: 'https://youtu.be/oF0QMPGj5NE?si=Cg0IMIVcRRBzyZqS',
  },
  {
    name: 'Stock Visibility for Sales & Point of Sale',
    desc: 'Built for businesses running multiple warehouses or shop locations who need real-time stock visibility without leaving the order screen.',
    link: '',
    demo_link: 'https://youtu.be/WyIpwIvrx-4?si=YUPBAreq9uD4YSAm',
  },
  {
    name: 'Customer Access by Sales Team',
    desc: 'Restrict salespersons to customers assigned to their Sales Team, and allow access only to Sale Orders, CRM Leads, and Opportunities created by their own team.',
    link: 'https://apps.odoo.com/apps/modules/18.0/customer_access_by_sales_team',
    demo_link: '',
  },
  {
    name: 'Department Purchase Budget Control',
    desc: 'Department-based Purchase Budget Control with Automatic Approval Workflow.',
    link: 'https://apps.odoo.com/apps/modules/18.0/purchase_order_budget_control',
    demo_link: '',
  },
  {
    name: 'POS Action Access',
    desc: 'Restrict POS actions using employee-level permissions.',
    link: 'https://apps.odoo.com/apps/modules/18.0/pos_control_buttons_access',
    demo_link: '',
  },
  {
    name: 'Sale Quotation Discount Approval',
    desc: 'Approval workflow for Sales quotation discounts with email notifications.',
    link: 'https://apps.odoo.com/apps/modules/16.0/sale_quotation_discount_approval',
    demo_link: '',
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
        alignItems: 'stretch',
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
              display: 'flex',
              flexDirection: 'column',
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
            {/* Tag */}
            <span style={{
              display: 'inline-block', fontSize: '10px',
              letterSpacing: '2px', textTransform: 'uppercase',
              color: 'var(--cyan)', background: 'rgba(0,200,255,0.1)',
              border: '1px solid rgba(0,200,255,0.2)',
              borderRadius: '20px', padding: '3px 10px', marginBottom: '14px',
              alignSelf: 'flex-start',
            }}>
              Odoo Module
            </span>

            {/* Title */}
            <h3 style={{
              fontFamily: 'var(--font-orbitron), monospace',
              fontSize: '15px', fontWeight: 700,
              marginBottom: '10px', color: 'var(--white)',
            }}>
              {product.name}
            </h3>

            {/* Description — flex:1 pushes links to bottom */}
            <p style={{
              fontSize: '13px', color: 'var(--muted)',
              lineHeight: 1.7, flex: 1,
            }}>
              {product.desc}
            </p>

            {/* Links — always at bottom */}
            <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'row', gap: '10px' }}>
              {product.link && (
              <a
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  fontSize: '12px', color: 'var(--cyan)',
                  textDecoration: 'none', letterSpacing: '1px',
                  transition: 'gap 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.gap = '10px'}
                onMouseLeave={e => e.currentTarget.style.gap = '6px'}
              >
                View on App Store
              </a>
              )}

              {/* Only show demo link if it exists */}
              {product.demo_link && (
                <a
                  href={product.demo_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '6px',
                    fontSize: '12px', color: 'var(--cyan)',
                    textDecoration: 'none', letterSpacing: '1px',
                    transition: 'gap 0.2s',
                    flex: 'end',
                  }}
                  onMouseEnter={e => e.currentTarget.style.gap = '10px'}
                  onMouseLeave={e => e.currentTarget.style.gap = '6px'}
                >
                  ▶ View Demo
                </a>
              )}
            </div>
          </div>
        ))}

        {/* Coming soon card */}
        <div style={{
          background: 'var(--card)',
          border: '1px dashed var(--border)',
          borderRadius: 'var(--radius)',
          padding: '28px', opacity: 0.5,
          display: 'flex', flexDirection: 'column',
        }}>
          <span style={{
            display: 'inline-block', fontSize: '10px',
            letterSpacing: '2px', textTransform: 'uppercase',
            color: 'var(--cyan)', background: 'rgba(0,200,255,0.1)',
            border: '1px solid rgba(0,200,255,0.2)',
            borderRadius: '20px', padding: '3px 10px', marginBottom: '14px',
            alignSelf: 'flex-start',
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
          <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.7, flex: 1 }}>
            New modules in development. Follow our blog for updates on upcoming releases and early access.
          </p>
        </div>
      </div>
    </section>
  );
}