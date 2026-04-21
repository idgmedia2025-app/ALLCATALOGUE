import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, ChevronRight, Star, Package, Send } from 'lucide-react'

const categories = [
  { icon: '⚡', label: 'Electronics' },
  { icon: '🏭', label: 'Industrial Equipment' },
  { icon: '👗', label: 'Apparel & Fashion' },
  { icon: '🧪', label: 'Chemicals & Pharma' },
  { icon: '🌿', label: 'Food & Beverages' },
  { icon: '📦', label: 'Packaging & Printing' },
  { icon: '🏋️', label: 'Sports & Entertainment' },
  { icon: '🏡', label: 'Home & Garden' },
  { icon: '💄', label: 'Beauty & Personal Care' },
  { icon: '🔩', label: 'Hardware & Tools' },
]

// Sample/demo supplier profiles — shown to illustrate how supplier listings appear on the platform.
// Replace with real verified suppliers once onboarded.
const sampleCompanies = [
  {
    name: 'Sample Supplier A',
    country: '🇩🇪 Germany',
    industry: 'Industrial Equipment',
    desc: 'Example profile: precision CNC components and industrial automation systems.',
  },
  {
    name: 'Sample Supplier B',
    country: '🇯🇵 Japan',
    industry: 'Electronics & Components',
    desc: 'Example profile: semiconductor components and consumer electronics distribution.',
  },
  {
    name: 'Sample Supplier C',
    country: '🇰🇷 South Korea',
    industry: 'Raw Materials',
    desc: 'Example profile: premium steel alloys and composite materials.',
  },
  {
    name: 'Sample Supplier D',
    country: '🇨🇳 China',
    industry: 'Packaging & Printing',
    desc: 'Example profile: customized packaging solutions with MOQ flexibility.',
  },
  {
    name: 'Sample Supplier E',
    country: '🇮🇳 India',
    industry: 'Chemicals & Pharma',
    desc: 'Example profile: ISO-certified chemical compounds and pharmaceutical ingredients.',
  },
  {
    name: 'Sample Supplier F',
    country: '🇹🇷 Turkey',
    industry: 'Textiles & Apparel',
    desc: 'Example profile: sustainable fabric solutions with full compliance documentation.',
  },
]

const valueProps = [
  { icon: '✅', value: 'Verified', label: 'Supplier vetting' },
  { icon: '📦', value: 'Rich', label: 'Product catalogues' },
  { icon: '🌍', value: 'Global', label: 'Buyer reach' },
  { icon: '🔒', value: 'Secure', label: 'Trading environment' },
]

export default function HomePage() {
  return (
    <div style={{ background: 'var(--bg)' }}>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ background: 'var(--navy)' }}>
        <div className="dot-bg absolute inset-0 opacity-20" />
        {/* Orange glow */}
        <div className="absolute -top-40 right-0 w-[700px] h-[500px] rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #FF6A00 0%, transparent 70%)' }} />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-16 md:py-20 grid md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6 animate-fade-up"
              style={{ background: 'rgba(255,106,0,0.15)', border: '1px solid rgba(255,106,0,0.3)' }}>
              <span className="text-xs font-display font-bold uppercase tracking-widest" style={{ color: 'var(--orange)' }}>
                Source Smart. Trade Global.
              </span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6 animate-fade-up delay-100">
              Your Trusted B2B<br />
              <span style={{ color: 'var(--orange)' }}>Sourcing Partner</span>
            </h1>
            <p className="font-body text-lg mb-8 leading-relaxed animate-fade-up delay-200" style={{ color: '#94a3b8' }}>
              Explore quality catalogues from verified companies around the world.
              Real-time inventory, technical docs, and instant RFQ.
            </p>
            <div className="flex flex-wrap gap-4 mb-10 animate-fade-up delay-300">
              <button className="btn-primary px-7 py-3.5 flex items-center gap-2 text-base">
                <Send size={16} />
                Send Inquiry
              </button>
              <button className="btn-outline px-7 py-3.5 text-base" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.2)' }}>
                ▷ How It Works
              </button>
            </div>
            <div className="flex flex-wrap gap-6 animate-fade-up delay-400">
              {['Verified Suppliers', 'Secure Trading', 'Global Shipping'].map(t => (
                <div key={t} className="flex items-center gap-2">
                  <CheckCircle size={15} style={{ color: 'var(--orange)' }} />
                  <span className="text-sm font-body" style={{ color: '#94a3b8' }}>{t}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — decorative visual */}
          <div className="hidden md:flex items-center justify-center relative animate-fade-up delay-200">
            <div className="w-80 h-80 rounded-full opacity-20 absolute"
              style={{ background: 'radial-gradient(circle, rgba(255,106,0,0.4), transparent 70%)' }} />
            <div className="relative grid grid-cols-2 gap-4 z-10">
              {[
                { icon: '🏭', label: 'Manufacturing' },
                { icon: '⚡', label: 'Electronics' },
                { icon: '🧪', label: 'Chemicals' },
                { icon: '📦', label: 'Packaging' },
              ].map(item => (
                <div key={item.label} className="card p-5 text-center" style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)', transform: 'none' }}>
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <div className="font-display font-bold text-white text-sm">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Value props bar */}
      <div className="bg-white border-b" style={{ borderColor: 'var(--border)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x" style={{ borderColor: 'var(--border)' }}>
            {valueProps.map(s => (
              <div key={s.label} className="py-6 px-8 text-center">
                <div className="text-2xl mb-1">{s.icon}</div>
                <div className="font-display font-extrabold text-2xl" style={{ color: 'var(--navy)' }}>{s.value}</div>
                <div className="text-xs font-body mt-1" style={{ color: 'var(--muted)' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Categories + Sample Companies */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-[220px_1fr] gap-8">
          {/* Sidebar Categories */}
          <aside>
            <div className="card p-0 overflow-hidden sticky top-24">
              <div className="px-4 py-3 border-b font-display font-bold text-sm" style={{ borderColor: 'var(--border)', color: 'var(--navy)' }}>
                Categories
              </div>
              <ul>
                {categories.map((cat, i) => (
                  <li key={cat.label}>
                    <a href="#" className="flex items-center justify-between px-4 py-2.5 hover:bg-orange-50 transition-colors group"
                      style={{ borderBottom: i < categories.length - 1 ? `1px solid var(--border)` : 'none' }}>
                      <span className="flex items-center gap-2.5">
                        <span className="text-base">{cat.icon}</span>
                        <span className="text-sm font-body group-hover:text-orange-600 transition-colors" style={{ color: 'var(--navy)' }}>
                          {cat.label}
                        </span>
                      </span>
                      <ChevronRight size={13} style={{ color: 'var(--muted)' }} />
                    </a>
                  </li>
                ))}
              </ul>

              {/* Become a Supplier */}
              <div className="m-3 rounded-xl p-4 text-center" style={{ background: 'linear-gradient(135deg, var(--navy) 0%, #2d3748 100%)' }}>
                <div className="text-2xl mb-2">🌐</div>
                <div className="font-display font-bold text-white text-sm mb-1">Become a Supplier</div>
                <p className="text-xs font-body mb-3" style={{ color: '#94a3b8' }}>Grow your business globally with us.</p>
                <button className="btn-primary text-xs px-4 py-2 w-full">Join Now →</button>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <div>
                <h2 className="section-title text-2xl">How Supplier Listings Look</h2>
                <p className="text-sm font-body mt-1" style={{ color: 'var(--muted)' }}>
                  Preview of our supplier card layout — real verified suppliers coming soon.
                </p>
              </div>
              <Link to="/solutions" className="flex items-center gap-1.5 text-sm font-display font-bold hover:gap-3 transition-all" style={{ color: 'var(--orange)' }}>
                Learn More <ArrowRight size={14} />
              </Link>
            </div>

            {/* Demo disclosure banner */}
            <div className="mb-6 rounded-lg px-4 py-3 flex items-center gap-3"
              style={{ background: 'var(--orange-light)', border: '1px solid var(--orange-mid)' }}>
              <span className="text-base">ℹ️</span>
              <p className="text-xs font-body" style={{ color: 'var(--navy)' }}>
                <strong>Demo profiles.</strong> The supplier cards below are illustrative examples. Verified supplier directory launches after platform onboarding.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 xl:grid-cols-2 gap-5">
              {sampleCompanies.map(company => (
                <div key={company.name} className="card p-5 group cursor-pointer">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-lg flex items-center justify-center text-xl flex-shrink-0"
                        style={{ background: 'var(--orange-light)', border: '1px solid var(--orange-mid)' }}>
                        🏢
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-sm leading-tight" style={{ color: 'var(--navy)' }}>
                          {company.name}
                        </h3>
                        <p className="text-xs font-body mt-0.5" style={{ color: 'var(--muted)' }}>{company.country}</p>
                      </div>
                    </div>
                    <span className="tag-orange text-xs">Demo</span>
                  </div>

                  {/* Industry tag */}
                  <span className="inline-block text-xs font-body px-2.5 py-1 rounded-full mb-3"
                    style={{ background: '#f1f5f9', color: 'var(--navy-light)' }}>
                    {company.industry}
                  </span>

                  <p className="text-xs font-body leading-relaxed mb-4" style={{ color: 'var(--muted)' }}>
                    {company.desc}
                  </p>

                  {/* Meta (illustrative) */}
                  <div className="flex items-center gap-4 mb-4 text-xs font-body" style={{ color: 'var(--muted)' }}>
                    <span className="flex items-center gap-1">
                      <Package size={12} style={{ color: 'var(--orange)' }} />
                      Product catalogue
                    </span>
                    <span>📦 MOQ on request</span>
                    <span>⏱ Lead time varies</span>
                  </div>

                  {/* Rating placeholder */}
                  <div className="flex items-center gap-1.5 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} style={{ color: '#cbd5e0' }} />
                    ))}
                    <span className="text-xs font-body" style={{ color: 'var(--muted)' }}>Ratings coming soon</span>
                  </div>

                  {/* Action */}
                  <button className="btn-primary w-full text-xs py-2.5 flex items-center justify-center gap-2">
                    <Send size={13} />
                    Preview Inquiry Flow
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto rounded-2xl overflow-hidden relative" style={{ background: 'var(--navy)' }}>
          <div className="absolute inset-0 dot-bg opacity-20" />
          <div className="absolute -right-20 top-0 bottom-0 w-96 opacity-15"
            style={{ background: 'radial-gradient(circle, #FF6A00, transparent 70%)' }} />
          <div className="relative py-16 px-8 md:px-16 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <span className="section-label">Ready to Scale?</span>
              <h2 className="font-display text-3xl font-extrabold text-white mb-3">
                Launch your global catalogue today
              </h2>
              <p className="font-body text-base" style={{ color: '#94a3b8' }}>
                Join our growing network of verified B2B suppliers. No setup fees.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
              <button className="btn-primary px-8 py-4 text-base">Get Started Free</button>
              <Link to="/pricing" className="btn-outline px-8 py-4 text-base" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.2)' }}>
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
