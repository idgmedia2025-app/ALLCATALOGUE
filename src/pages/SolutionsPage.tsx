import { ArrowRight, CheckCircle } from 'lucide-react'

const solutions = [
  {
    emoji: '🏭',
    title: 'Industrial Manufacturing',
    tagline: 'From factory floor to global buyer',
    color: '#e8f4fd',
    borderColor: '#bfdffc',
    description: 'Publish technical datasheets, CAD files, tolerance specs, and compliance certificates. Buyers get instant access to the exact documentation needed for procurement decisions.',
    benefits: ['3D model & CAD file hosting', 'Compliance document management', 'RFQ integration with ERP systems', 'Multi-tier distributor access control'],
    companies: ['Automation OEMs', 'Machinery builders', 'Precision component makers'],
  },
  {
    emoji: '🚚',
    title: 'Trading & Distribution',
    tagline: 'Multi-supplier, one catalogue',
    color: '#fef3e8',
    borderColor: '#fdd5a8',
    description: 'Aggregate products from hundreds of manufacturers into a unified, searchable catalogue. Real-time stock levels, tiered pricing, and lead-time visibility for buyers worldwide.',
    benefits: ['Multi-manufacturer aggregation', 'Live inventory sync via API', 'Tiered pricing by buyer segment', 'Bulk RFQ management tools'],
    companies: ['MRO distributors', 'Industrial traders', 'Export–import firms'],
  },
  {
    emoji: '🛒',
    title: 'Wholesale & Retail',
    tagline: 'B2B buying at scale',
    color: '#f0fdf4',
    borderColor: '#bbf7d0',
    description: 'Enable wholesale buyers to browse your full product range, submit bulk orders, and track shipment status — all within a branded catalogue portal.',
    benefits: ['Branded buyer portal', 'MOQ & volume pricing rules', 'Shipment tracking integration', 'Net-30/60 payment terms display'],
    companies: ['Wholesale chains', 'Hypermarket buyers', 'HORECA suppliers'],
  },
  {
    emoji: '💻',
    title: 'Electronics & Tech',
    tagline: 'Specs that engineers trust',
    color: '#fdf4ff',
    borderColor: '#e9d5ff',
    description: 'Component-level technical specifications, lifecycle status, REACH/RoHS compliance, and cross-reference tables — structured for engineers and procurement teams.',
    benefits: ['Component lifecycle tracking', 'REACH/RoHS compliance flags', 'Cross-reference & alternative parts', 'BOM (Bill of Materials) integration'],
    companies: ['Component distributors', 'Contract manufacturers', 'OEM procurement teams'],
  },
  {
    emoji: '🧪',
    title: 'Chemicals & Pharma',
    tagline: 'Regulated industries, simplified',
    color: '#fff7ed',
    borderColor: '#fed7aa',
    description: 'Handle SDS sheets, CoA documents, regulatory compliance records, and GHS labels. Full audit trail for every document accessed by buyers.',
    benefits: ['SDS & CoA document management', 'GHS label generation', 'Regulatory compliance tracking', 'Full buyer access audit log'],
    companies: ['Specialty chemical makers', 'API producers', 'Ingredient suppliers'],
  },
  {
    emoji: '🌿',
    title: 'Food & Agriculture',
    tagline: 'Traceability from farm to buyer',
    color: '#f0fdf4',
    borderColor: '#86efac',
    description: 'Product origin, certifications (Organic, Halal, Kosher), nutrition data, and shelf life information — all linked to batch-level traceability.',
    benefits: ['Batch & lot traceability', 'Organic/Halal/Kosher certification', 'Nutritional data structured fields', 'Export documentation support'],
    companies: ['Commodity exporters', 'Agri-processors', 'Food ingredient traders'],
  },
]

export default function SolutionsPage() {
  return (
    <div style={{ background: 'var(--bg)' }}>
      {/* Hero */}
      <section className="relative py-20 overflow-hidden" style={{ background: 'var(--navy)' }}>
        <div className="dot-bg absolute inset-0 opacity-20" />
        <div className="absolute -top-20 right-10 w-96 h-96 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #FF6A00, transparent 70%)' }} />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <span className="section-label">Solutions</span>
          <h1 className="font-display text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight">
            Every industry.<br />
            <span style={{ color: 'var(--orange)' }}>One platform.</span>
          </h1>
          <p className="font-body text-lg max-w-xl leading-relaxed" style={{ color: '#94a3b8' }}>
            Whether you manufacture, distribute, or trade — Allcatalogue adapts to the data standards and workflows of your sector.
          </p>
        </div>
      </section>

      {/* Solutions grid */}
      <section className="py-16 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 gap-6">
          {solutions.map((sol) => (
            <div key={sol.title} className="card p-7 group">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{ background: sol.color, border: `1px solid ${sol.borderColor}` }}>
                  {sol.emoji}
                </div>
                <div className="flex-1">
                  <p className="text-xs font-display font-bold uppercase tracking-widest mb-1" style={{ color: 'var(--orange)' }}>
                    {sol.tagline}
                  </p>
                  <h3 className="font-display text-xl font-bold mb-3" style={{ color: 'var(--navy)' }}>{sol.title}</h3>
                  <p className="font-body text-sm leading-relaxed mb-5" style={{ color: 'var(--muted)' }}>{sol.description}</p>
                  <ul className="grid grid-cols-2 gap-2 mb-5">
                    {sol.benefits.map(b => (
                      <li key={b} className="flex items-start gap-2 text-xs font-body" style={{ color: 'var(--navy-mid)' }}>
                        <CheckCircle size={13} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--orange)' }} />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t" style={{ borderColor: 'var(--border)' }}>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-body" style={{ color: 'var(--muted)' }}>Built for:</span>
                      {sol.companies.map(c => (
                        <span key={c} className="text-xs font-display font-semibold px-2 py-0.5 rounded"
                          style={{ background: 'var(--bg)', color: 'var(--navy-mid)', border: '1px solid var(--border)' }}>{c}</span>
                      ))}
                    </div>
                    <button className="flex items-center gap-1 text-xs font-display font-bold group-hover:gap-2 transition-all" style={{ color: 'var(--orange)' }}>
                      Learn more <ArrowRight size={12} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto rounded-2xl p-12 text-center relative overflow-hidden" style={{ background: 'var(--navy)' }}>
          <div className="dot-bg absolute inset-0 opacity-20" />
          <div className="relative">
            <span className="section-label">Custom Solutions</span>
            <h2 className="font-display text-3xl font-extrabold text-white mb-3">Don't see your industry?</h2>
            <p className="font-body text-base mb-8" style={{ color: '#94a3b8' }}>
              Our engineering team builds custom integrations for your sector.
            </p>
            <button className="btn-primary px-8 py-4">Talk to an Expert <ArrowRight size={15} /></button>
          </div>
        </div>
      </section>
    </div>
  )
}
