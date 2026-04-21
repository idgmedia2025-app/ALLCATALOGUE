import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Globe, Shield, Zap, ChevronRight } from 'lucide-react'

const companies = [
  {
    name: 'TechNova Systems',
    industry: 'Industrial Equipment',
    country: 'Germany',
    flag: '🇩🇪',
    products: '2,400+ SKUs',
    badge: 'Verified',
    description: 'Leading manufacturer of precision CNC components and industrial automation systems.',
  },
  {
    name: 'PacificTrade Corp',
    industry: 'Electronics & Components',
    country: 'Japan',
    flag: '🇯🇵',
    products: '8,200+ SKUs',
    badge: 'Enterprise',
    description: 'Distributing semiconductor components and consumer electronics to 60+ countries.',
  },
  {
    name: 'AlphaSource Ltd',
    industry: 'Raw Materials',
    country: 'South Korea',
    flag: '🇰🇷',
    products: '1,100+ SKUs',
    badge: 'Verified',
    description: 'Premium steel alloys and composite materials for aerospace and automotive sectors.',
  },
  {
    name: 'Nexbridge Trading',
    industry: 'Packaging & Printing',
    country: 'China',
    flag: '🇨🇳',
    products: '5,600+ SKUs',
    badge: 'Top Supplier',
    description: 'Customized packaging solutions with MOQ flexibility for global retail chains.',
  },
  {
    name: 'Verde Chemicals',
    industry: 'Chemicals & Pharma',
    country: 'India',
    flag: '🇮🇳',
    products: '3,800+ SKUs',
    badge: 'Certified',
    description: 'ISO-certified chemical compounds and active pharmaceutical ingredients.',
  },
  {
    name: 'OmegaFlex GmbH',
    industry: 'Textiles & Apparel',
    country: 'Turkey',
    flag: '🇹🇷',
    products: '12,000+ SKUs',
    badge: 'Verified',
    description: 'Sustainable fabric solutions with digital swatches and compliance documentation.',
  },
]

const stats = [
  { value: '14,000+', label: 'Verified Suppliers' },
  { value: '180M+', label: 'Catalogue Entries' },
  { value: '140+', label: 'Countries' },
  { value: '99.97%', label: 'Platform Uptime' },
]

const trustedBy = ['Siemens', 'Carrefour', 'Maersk', 'Unilever', 'DHL', 'BASF']

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-center grid-bg overflow-hidden">
        {/* Radial glow */}
        <div className="absolute inset-0 bg-radial-cyan pointer-events-none" />
        <div className="absolute top-1/4 -right-40 w-[600px] h-[600px] rounded-full bg-cyan-400/5 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[300px] bg-cyan-400/3 blur-[100px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-24 w-full">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-2 mb-8 animate-fade-up">
              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-xs font-display font-semibold text-cyan-400 uppercase tracking-widest">
                Now in Public Beta
              </span>
            </div>

            <h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-8 animate-fade-up animate-delay-100">
              The Digital Catalogue<br />
              <span className="text-gradient">Platform for B2B</span>
            </h1>

            <p className="font-body text-xl text-slate-400 leading-relaxed mb-12 max-w-2xl animate-fade-up animate-delay-200">
              Connect your company's technical catalogue to buyers in 140+ countries. 
              Real-time inventory, CAD files, compliance docs — all in one secure platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-up animate-delay-300">
              <button className="btn-primary flex items-center justify-center gap-2">
                Start for Free
                <ArrowRight size={16} />
              </button>
              <Link to="/solutions" className="btn-ghost flex items-center justify-center gap-2">
                View Solutions
                <ChevronRight size={16} />
              </Link>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap items-center gap-6 animate-fade-up animate-delay-400">
              {[
                'No credit card required',
                'SOC 2 Type II certified',
                '14-day free trial',
              ].map((t) => (
                <div key={t} className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-cyan-400" />
                  <span className="text-sm text-slate-400 font-body">{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by */}
      <section className="border-y border-white/5 py-10 bg-dark-800/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="text-center text-xs font-display font-semibold text-slate-600 uppercase tracking-widest mb-8">
            Trusted by global enterprises
          </p>
          <div className="flex flex-wrap justify-center items-center gap-10 opacity-40">
            {trustedBy.map((company) => (
              <span key={company} className="text-lg font-display font-bold text-slate-300 tracking-tight">
                {company}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center group">
              <div className="font-display text-4xl md:text-5xl font-bold text-gradient mb-2 group-hover:scale-105 transition-transform">
                {stat.value}
              </div>
              <div className="text-sm text-slate-500 font-body uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Companies */}
      <section className="py-20 bg-dark-800/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <span className="section-label">Global Network</span>
              <h2 className="section-title">Featured Suppliers</h2>
            </div>
            <a href="#" className="flex items-center gap-2 text-sm font-display font-semibold text-cyan-400 hover:gap-3 transition-all">
              View All Suppliers <ArrowRight size={15} />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {companies.map((company) => (
              <div
                key={company.name}
                className="glass-card rounded-2xl p-6 group hover:border-cyan-400/20 hover:cyan-glow-sm transition-all duration-300 cursor-pointer"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-dark-700 border border-white/10 flex items-center justify-center text-2xl">
                      {company.flag}
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-white text-base leading-tight">
                        {company.name}
                      </h3>
                      <p className="text-xs text-slate-500 font-body mt-0.5">{company.country}</p>
                    </div>
                  </div>
                  <span className="text-xs font-display font-semibold px-2.5 py-1 rounded-full bg-cyan-400/10 text-cyan-400 border border-cyan-400/20 whitespace-nowrap">
                    {company.badge}
                  </span>
                </div>

                {/* Industry tag */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/5 mb-4">
                  <span className="text-xs text-slate-400 font-body">{company.industry}</span>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-400 font-body leading-relaxed mb-5">
                  {company.description}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <span className="text-xs text-cyan-400 font-display font-semibold">
                    {company.products}
                  </span>
                  <button className="flex items-center gap-1.5 text-xs font-display font-semibold text-slate-500 hover:text-white transition-colors group-hover:text-cyan-400">
                    View Catalogue <ChevronRight size={13} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Allcatalogue */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <span className="section-label">Why Choose Us</span>
          <h2 className="section-title mb-4">Built for enterprise-scale B2B</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Not another product listing site. A complete digital infrastructure for how companies share technical data.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Globe className="text-cyan-400" size={24} />,
              title: 'Global Distribution Network',
              desc: 'Your catalogue reaches buyers in 140+ countries with edge-cached delivery under 50ms anywhere on the planet.',
            },
            {
              icon: <Shield className="text-cyan-400" size={24} />,
              title: 'Enterprise-Grade Security',
              desc: 'SOC 2 Type II, GDPR compliant. Cloudflare Turnstile, malware scanning on every uploaded file.',
            },
            {
              icon: <Zap className="text-cyan-400" size={24} />,
              title: 'Real-Time Sync',
              desc: 'Push inventory, pricing, and spec updates instantly across all buyer-facing channels via our API.',
            },
          ].map((item) => (
            <div key={item.title} className="glass-card rounded-2xl p-8 hover:border-cyan-400/20 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-cyan-400/10 flex items-center justify-center mb-6 group-hover:bg-cyan-400/15 transition-colors">
                {item.icon}
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-slate-400 font-body text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="glass-card rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
            <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-cyan-400/5 blur-[80px] pointer-events-none" />
            <div className="relative">
              <span className="section-label">Ready to Scale?</span>
              <h2 className="section-title mb-6 max-w-2xl mx-auto">
                Launch your global catalogue in minutes
              </h2>
              <p className="section-subtitle max-w-xl mx-auto mb-10">
                Join 14,000+ suppliers already using Allcatalogue to reach buyers worldwide.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="btn-primary flex items-center justify-center gap-2">
                  Start Free Trial
                  <ArrowRight size={16} />
                </button>
                <Link to="/pricing" className="btn-ghost">
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
