const features = [
  {
    category: 'Catalogue Management',
    items: [
      { emoji: '🗄️', title: 'Unlimited SKU Storage', desc: 'Store millions of product entries with rich attributes — specs, media, documents, variants — all structured and instantly searchable.' },
      { emoji: '📄', title: 'Technical Document Hub', desc: 'Attach datasheets, SDS, CoA, CAD files, and compliance certs directly to companies. Cloudflare R2 powered, unlimited capacity.' },
      { emoji: '🔍', title: 'AI-Powered Search', desc: 'Buyers find what they need with semantic search across product names, specs, descriptions, and document content.' },
      { emoji: '🔄', title: 'Real-Time Sync API', desc: 'Push updates from your ERP or PIM system via REST API. Prices, stock levels, and specs update across all buyer channels instantly.' },
    ]
  },
  {
    category: 'Buyer Experience',
    items: [
      { emoji: '🌐', title: 'Branded Buyer Portal', desc: 'Custom domain, your logo, your colors. A fully white-labeled catalogue experience that feels like an extension of your brand.' },
      { emoji: '💬', title: 'Built-In B2B Chat', desc: 'Stream-powered real-time messaging between your team and buyers. Discuss RFQs, negotiate, and clarify specs without leaving the platform.' },
      { emoji: '📧', title: 'Smart Email Notifications', desc: 'Resend-powered transactional emails: new inquiry alerts, quote confirmations, catalogue update announcements.' },
      { emoji: '🤖', title: 'AI Catalogue Assistant', desc: 'Embedded AI chatbot that answers buyer questions, suggests alternatives, and guides procurement decisions 24/7.' },
    ]
  },
  {
    category: 'Security & Compliance',
    items: [
      { emoji: '🛡️', title: 'Cloudflare Turnstile', desc: 'Invisible CAPTCHA protection on all login and form endpoints. Zero friction for real users, zero tolerance for bots.' },
      { emoji: '🔬', title: 'Malware Scanning', desc: 'Every uploaded file scanned via Cloudmersive API. Files exceeding 3.5MB go through ClamAV server-side deep scanning.' },
      { emoji: '🔑', title: 'Enterprise SSO', desc: 'Auth0 and BoxyHQ integration for enterprise buyers. Log in with company email — no extra credentials.' },
      { emoji: '📊', title: 'Sentry Monitoring', desc: 'Real-time error tracking and performance monitoring. Catch bugs before your buyers ever notice them.' },
    ]
  },
  {
    category: 'Analytics & Growth',
    items: [
      { emoji: '📈', title: 'Buyer Analytics', desc: 'PostHog-powered analytics: which companies buyers view, where they drop off, which countries drive most RFQs.' },
      { emoji: '🌍', title: 'Multi-Language Support', desc: 'Serve buyers in English, Arabic, and Chinese. Platform UI auto-localized for your target markets.' },
      { emoji: '🔎', title: 'SEO-Ready Catalogues', desc: 'Open Graph meta tags, structured data markup, and sitemap generation so your companies rank on search engines.' },
      { emoji: '🔗', title: 'Webhook & Integrations', desc: 'Connect to your CRM, ERP, or logistics system. Native Zapier integration and direct webhook support.' },
    ]
  },
]

const stack = [
  ['Framework', 'Next.js + TypeScript', 'Performance & type safety'],
  ['Database', 'Supabase (PostgreSQL)', 'Real-time data & auth'],
  ['File Storage', 'Cloudflare R2', 'Unlimited, low-latency storage'],
  ['Security', 'Cloudflare Turnstile', 'Invisible CAPTCHA protection'],
  ['Malware', 'Cloudmersive / ClamAV', 'File scanning & safety'],
  ['Email', 'Resend', 'Transactional emails'],
  ['Chat', 'Stream Chat', 'Real-time B2B messaging'],
  ['Monitoring', 'Sentry', 'Error tracking & alerts'],
  ['Analytics', 'PostHog', 'Product & buyer analytics'],
]

const highlights = [
  { v: '<50ms', l: 'Global delivery latency' },
  { v: '99.97%', l: 'Platform uptime SLA' },
  { v: '3.5MB', l: 'Malware scan threshold' },
  { v: '140+', l: 'Countries reached' },
]

export default function FeaturesPage() {
  return (
    <div style={{ background: 'var(--bg)' }}>
      {/* Hero */}
      <section className="relative py-20 overflow-hidden" style={{ background: 'var(--navy)' }}>
        <div className="dot-bg absolute inset-0 opacity-20" />
        <div className="absolute -bottom-10 left-1/3 w-80 h-80 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #FF6A00, transparent 70%)' }} />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <span className="section-label">Features</span>
          <h1 className="font-display text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight">
            The infrastructure<br />
            <span style={{ color: 'var(--orange)' }}>B2B deserves</span>
          </h1>
          <p className="font-body text-lg max-w-xl leading-relaxed" style={{ color: '#94a3b8' }}>
            A complete technical stack built specifically for companies that sell to other companies — not a repurposed B2C storefront.
          </p>
        </div>
      </section>

      {/* Metrics */}
      <div className="bg-white border-b" style={{ borderColor: 'var(--border)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x" style={{ borderColor: 'var(--border)' }}>
            {highlights.map(h => (
              <div key={h.l} className="py-6 px-8 text-center">
                <div className="font-display font-extrabold text-2xl mb-1" style={{ color: 'var(--orange)' }}>{h.v}</div>
                <div className="text-xs font-body uppercase tracking-widest" style={{ color: 'var(--muted)' }}>{h.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Feature categories */}
      <section className="py-16">
        {features.map((cat, ci) => (
          <div key={cat.category} className={`py-12 ${ci % 2 === 1 ? 'bg-white' : ''}`}>
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
              <div className="mb-10">
                <span className="section-label">{cat.category}</span>
                <h2 className="section-title">{cat.category}</h2>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {cat.items.map(f => (
                  <div key={f.title} className="card p-6 group hover:border-orange-200">
                    <div className="text-3xl mb-4 group-hover:scale-110 transition-transform inline-block">{f.emoji}</div>
                    <h3 className="font-display font-bold text-base mb-2" style={{ color: 'var(--navy)' }}>{f.title}</h3>
                    <p className="text-sm font-body leading-relaxed" style={{ color: 'var(--muted)' }}>{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Tech stack table */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-10">
            <span className="section-label">Tech Stack</span>
            <h2 className="section-title">What powers Allcatalogue</h2>
          </div>
          <div className="card overflow-hidden rounded-2xl">
            <table className="w-full">
              <thead>
                <tr style={{ background: 'var(--navy)', borderBottom: '2px solid var(--orange)' }}>
                  {['Component', 'Technology', 'Purpose'].map(h => (
                    <th key={h} className="text-left px-6 py-4 text-xs font-display font-bold text-white uppercase tracking-widest">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {stack.map(([comp, tool, purpose], i) => (
                  <tr key={comp} className="hover:bg-orange-50 transition-colors" style={{ borderBottom: i < stack.length - 1 ? '1px solid var(--border)' : 'none' }}>
                    <td className="px-6 py-4 text-sm font-display font-semibold" style={{ color: 'var(--navy)' }}>{comp}</td>
                    <td className="px-6 py-4">
                      <span className="font-display font-bold text-sm" style={{ color: 'var(--orange)' }}>{tool}</span>
                    </td>
                    <td className="px-6 py-4 text-sm font-body hidden md:table-cell" style={{ color: 'var(--muted)' }}>{purpose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  )
}
