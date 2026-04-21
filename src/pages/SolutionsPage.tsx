import { ArrowRight, Factory, Truck, ShoppingBag, Cpu, FlaskConical, Leaf } from 'lucide-react'

const solutions = [
  {
    icon: <Factory size={28} />,
    title: 'Industrial Manufacturing',
    tagline: 'From factory floor to global buyer',
    description:
      'Publish technical datasheets, CAD files, tolerance specs, and compliance certifications. Buyers get instant access to the exact documentation needed for procurement decisions.',
    benefits: [
      '3D model & CAD file hosting',
      'Compliance document management',
      'RFQ integration with ERP systems',
      'Multi-tier distributor access control',
    ],
    companies: ['Siemens', 'ABB', 'Bosch'],
    color: 'from-blue-500/10 to-cyan-400/10',
  },
  {
    icon: <Truck size={28} />,
    title: 'Trading & Distribution',
    tagline: 'Multi-supplier, one catalogue',
    description:
      'Aggregate products from hundreds of manufacturers into a unified, searchable catalogue. Real-time stock levels, tiered pricing, and lead-time visibility for buyers worldwide.',
    benefits: [
      'Multi-manufacturer product aggregation',
      'Live inventory sync via API',
      'Tiered pricing by buyer segment',
      'Bulk RFQ management tools',
    ],
    companies: ['Würth', 'Grainger', 'RS Components'],
    color: 'from-purple-500/10 to-blue-500/10',
  },
  {
    icon: <ShoppingBag size={28} />,
    title: 'Wholesale & Retail',
    tagline: 'B2B buying at scale',
    description:
      'Enable wholesale buyers to browse your full product range, submit bulk orders, and track shipment status — all within a branded catalogue portal.',
    benefits: [
      'Branded buyer portal',
      'MOQ & volume pricing rules',
      'Shipment tracking integration',
      'Net-30/60 payment terms display',
    ],
    companies: ['Carrefour', 'Metro Group', 'Tesco B2B'],
    color: 'from-orange-500/10 to-red-500/10',
  },
  {
    icon: <Cpu size={28} />,
    title: 'Electronics & Tech',
    tagline: 'Specs that buyers trust',
    description:
      'Component-level technical specifications, lifecycle status, REACH/RoHS compliance, and cross-reference tables — structured for engineers and procurement teams.',
    benefits: [
      'Component lifecycle tracking',
      'REACH/RoHS compliance flags',
      'Cross-reference & alternative parts',
      'BOM (Bill of Materials) integration',
    ],
    companies: ['Arrow Electronics', 'Avnet', 'Mouser'],
    color: 'from-cyan-400/10 to-teal-500/10',
  },
  {
    icon: <FlaskConical size={28} />,
    title: 'Chemicals & Pharma',
    tagline: 'Regulated industries, simplified',
    description:
      'Handle SDS sheets, CoA documents, regulatory compliance records, and GHS labels. Full audit trail for every document accessed by buyers.',
    benefits: [
      'SDS & CoA document management',
      'GHS label generation',
      'Regulatory compliance tracking',
      'Full buyer access audit log',
    ],
    companies: ['BASF', 'Dow Chemical', 'Lonza'],
    color: 'from-green-500/10 to-emerald-400/10',
  },
  {
    icon: <Leaf size={28} />,
    title: 'Food & Agriculture',
    tagline: 'Traceability from farm to buyer',
    description:
      'Product origin, certifications (Organic, Halal, Kosher), nutrition data, and shelf life information — all linked to batch-level traceability.',
    benefits: [
      'Batch & lot traceability',
      'Organic/Halal/Kosher certification display',
      'Nutritional data structured fields',
      'Export documentation support',
    ],
    companies: ['Cargill', 'Olam International', 'LDC'],
    color: 'from-lime-500/10 to-green-500/10',
  },
]

export default function SolutionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-28 grid-bg overflow-hidden">
        <div className="absolute inset-0 bg-radial-cyan pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
          <div className="max-w-3xl">
            <span className="section-label">Solutions</span>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              Every industry.<br />
              <span className="text-gradient">One platform.</span>
            </h1>
            <p className="section-subtitle max-w-xl">
              Whether you manufacture, distribute, or trade — Allcatalogue adapts to the 
              data standards and workflows of your sector.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions grid */}
      <section className="py-20 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {solutions.map((sol) => (
            <div
              key={sol.title}
              className="glass-card rounded-2xl p-8 hover:border-cyan-400/20 transition-all duration-300 group"
            >
              {/* Top */}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${sol.color} flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform`}>
                {sol.icon}
              </div>

              <div className="mb-2">
                <span className="text-xs font-display font-semibold text-slate-500 uppercase tracking-widest">
                  {sol.tagline}
                </span>
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-4">{sol.title}</h3>
              <p className="text-slate-400 font-body text-sm leading-relaxed mb-6">
                {sol.description}
              </p>

              {/* Benefits */}
              <ul className="space-y-2 mb-6">
                {sol.benefits.map((b) => (
                  <li key={b} className="flex items-center gap-2.5 text-sm font-body text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>

              {/* Used by */}
              <div className="pt-5 border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-600 font-body">Used by:</span>
                  <div className="flex gap-2">
                    {sol.companies.map((c) => (
                      <span key={c} className="text-xs font-display font-semibold text-slate-400 bg-white/5 px-2 py-0.5 rounded">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
                <button className="flex items-center gap-1 text-xs font-display font-semibold text-cyan-400 hover:gap-2 transition-all">
                  Learn more <ArrowRight size={12} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto glass-card rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
          <span className="section-label">Custom Solutions</span>
          <h2 className="section-title mb-4">Don't see your industry?</h2>
          <p className="section-subtitle max-w-xl mx-auto mb-8">
            Our engineering team can build custom integrations and workflows for your specific sector needs.
          </p>
          <button className="btn-primary flex items-center gap-2 mx-auto">
            Talk to an Expert <ArrowRight size={16} />
          </button>
        </div>
      </section>
    </>
  )
}
