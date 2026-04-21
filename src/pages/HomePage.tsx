import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, ChevronRight, Star, Package, Send } from 'lucide-react'

const categories = [
  { icon: '⚡', label: 'Electronics', count: '2.4M items' },
  { icon: '🏭', label: 'Industrial Equipment', count: '890K items' },
  { icon: '👗', label: 'Apparel & Fashion', count: '5.1M items' },
  { icon: '🧪', label: 'Chemicals & Pharma', count: '320K items' },
  { icon: '🌿', label: 'Food & Beverages', count: '1.2M items' },
  { icon: '📦', label: 'Packaging & Printing', count: '760K items' },
  { icon: '🏋️', label: 'Sports & Entertainment', count: '430K items' },
  { icon: '🏡', label: 'Home & Garden', count: '2.8M items' },
  { icon: '💄', label: 'Beauty & Personal Care', count: '1.9M items' },
  { icon: '🔩', label: 'Hardware & Tools', count: '640K items' },
]

const companies = [
  {
    name: 'TechNova Systems GmbH',
    country: '🇩🇪 Germany',
    industry: 'Industrial Equipment',
    skus: '2,400 SKUs',
    badge: 'Verified Supplier',
    rating: 4.9,
    reviews: 312,
    desc: 'Precision CNC components and industrial automation systems for aerospace and automotive.',
    minOrder: '$500 MOQ',
    leadTime: '7–14 days',
  },
  {
    name: 'PacificTrade Corporation',
    country: '🇯🇵 Japan',
    industry: 'Electronics & Components',
    skus: '8,200 SKUs',
    badge: 'Enterprise',
    rating: 4.8,
    reviews: 891,
    desc: 'Semiconductor components and consumer electronics distributed to 60+ countries globally.',
    minOrder: '$200 MOQ',
    leadTime: '5–10 days',
  },
  {
    name: 'AlphaSource Materials',
    country: '🇰🇷 South Korea',
    industry: 'Raw Materials',
    skus: '1,100 SKUs',
    badge: 'Certified',
    rating: 4.7,
    reviews: 204,
    desc: 'Premium steel alloys and composite materials for aerospace, automotive, and construction.',
    minOrder: '$1,000 MOQ',
    leadTime: '10–20 days',
  },
  {
    name: 'Nexbridge Trading Co.',
    country: '🇨🇳 China',
    industry: 'Packaging & Printing',
    skus: '5,600 SKUs',
    badge: 'Top Supplier',
    rating: 4.9,
    reviews: 1240,
    desc: 'Customized packaging solutions with MOQ flexibility for global retail and e-commerce chains.',
    minOrder: '$150 MOQ',
    leadTime: '3–7 days',
  },
  {
    name: 'Verde Chemicals Ltd',
    country: '🇮🇳 India',
    industry: 'Chemicals & Pharma',
    skus: '3,800 SKUs',
    badge: 'Certified',
    rating: 4.6,
    reviews: 178,
    desc: 'ISO-certified chemical compounds and active pharmaceutical ingredients for global pharma.',
    minOrder: '$300 MOQ',
    leadTime: '14–21 days',
  },
  {
    name: 'OmegaFlex Tekstil',
    country: '🇹🇷 Turkey',
    industry: 'Textiles & Apparel',
    skus: '12,000 SKUs',
    badge: 'Verified Supplier',
    rating: 4.8,
    reviews: 567,
    desc: 'Sustainable fabric solutions with digital swatches and full compliance documentation.',
    minOrder: '$250 MOQ',
    leadTime: '7–15 days',
  },
  {
    name: 'Agrolink Exports',
    country: '🇧🇷 Brazil',
    industry: 'Food & Beverages',
    skus: '890 SKUs',
    badge: 'Organic Certified',
    rating: 4.7,
    reviews: 134,
    desc: 'Certified organic food commodities, tropical fruits, and agricultural products worldwide.',
    minOrder: '$400 MOQ',
    leadTime: '15–30 days',
  },
  {
    name: 'Luminary Tools Inc.',
    country: '🇺🇸 United States',
    industry: 'Hardware & Tools',
    skus: '4,200 SKUs',
    badge: 'Verified Supplier',
    rating: 4.9,
    reviews: 720,
    desc: 'Professional-grade power tools, hand tools, and safety equipment for industrial buyers.',
    minOrder: '$350 MOQ',
    leadTime: '4–8 days',
  },
]

const stats = [
  { icon: '👥', value: '200,000+', label: 'Verified Suppliers' },
  { icon: '📦', value: '10M+', label: 'Products Available' },
  { icon: '🌍', value: '220+', label: 'Countries & Regions' },
  { icon: '🔒', value: '100%', label: 'Secure Transactions' },
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
              Explore thousands of quality catalogues from verified companies around the world.
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
                { icon: '🏭', label: 'Manufacturing', num: '14K+' },
                { icon: '⚡', label: 'Electronics', num: '8.2K+' },
                { icon: '🧪', label: 'Chemicals', num: '3.8K+' },
                { icon: '📦', label: 'Packaging', num: '5.6K+' },
              ].map(item => (
                <div key={item.label} className="card p-5 text-center" style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)', transform: 'none' }}>
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <div className="font-display font-bold text-white text-sm">{item.num}</div>
                  <div className="font-body text-xs mt-1" style={{ color: '#94a3b8' }}>{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <div className="bg-white border-b" style={{ borderColor: 'var(--border)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x" style={{ borderColor: 'var(--border)' }}>
            {stats.map(s => (
              <div key={s.label} className="py-6 px-8 text-center">
                <div className="text-2xl mb-1">{s.icon}</div>
                <div className="font-display font-extrabold text-2xl" style={{ color: 'var(--navy)' }}>{s.value}</div>
                <div className="text-xs font-body mt-1" style={{ color: 'var(--muted)' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Categories + Featured Companies */}
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
                        <span className="text-sm font-body group-hover:text-orange-600 transition-colors" style={{ color: i === 0 ? 'var(--orange)' : 'var(--navy)' }}>
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
            <div className="flex items-center justify-between mb-6">
              <h2 className="section-title text-2xl">Featured Companies</h2>
              <a href="#" className="flex items-center gap-1.5 text-sm font-display font-bold hover:gap-3 transition-all" style={{ color: 'var(--orange)' }}>
                View All <ArrowRight size={14} />
              </a>
            </div>

            <div className="grid sm:grid-cols-2 xl:grid-cols-2 gap-5">
              {companies.map(company => (
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
                    <span className="tag-orange text-xs">{company.badge}</span>
                  </div>

                  {/* Industry tag */}
                  <span className="inline-block text-xs font-body px-2.5 py-1 rounded-full mb-3"
                    style={{ background: '#f1f5f9', color: 'var(--navy-light)' }}>
                    {company.industry}
                  </span>

                  <p className="text-xs font-body leading-relaxed mb-4" style={{ color: 'var(--muted)' }}>
                    {company.desc}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center gap-4 mb-4 text-xs font-body" style={{ color: 'var(--muted)' }}>
                    <span className="flex items-center gap-1">
                      <Package size={12} style={{ color: 'var(--orange)' }} />
                      {company.skus}
                    </span>
                    <span>📦 {company.minOrder}</span>
                    <span>⏱ {company.leadTime}</span>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1.5 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} fill={i < Math.floor(company.rating) ? 'var(--orange)' : 'none'}
                        style={{ color: 'var(--orange)' }} />
                    ))}
                    <span className="text-xs font-display font-bold" style={{ color: 'var(--navy)' }}>{company.rating}</span>
                    <span className="text-xs font-body" style={{ color: 'var(--muted)' }}>({company.reviews} reviews)</span>
                  </div>

                  {/* Action */}
                  <button className="btn-primary w-full text-xs py-2.5 flex items-center justify-center gap-2">
                    <Send size={13} />
                    Inquiry Now
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
                Join 200,000+ verified suppliers. No setup fees.
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
