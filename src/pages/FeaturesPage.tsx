import {
  Database, Globe, Shield, Zap, BarChart3, MessageSquare,
  Search, FileText, Lock, Cpu, RefreshCw, Bell
} from 'lucide-react'

const featureCategories = [
  {
    category: 'Catalogue Management',
    description: 'Everything you need to manage and publish your B2B product data at scale.',
    features: [
      {
        icon: <Database size={20} />,
        title: 'Unlimited SKU Storage',
        desc: 'Store millions of product entries with rich attributes — specs, media, documents, variants — all structured and searchable.',
      },
      {
        icon: <FileText size={20} />,
        title: 'Technical Document Hub',
        desc: 'Attach datasheets, SDS, CoA, CAD files, and compliance certificates directly to products. Cloudflare R2 powered.',
      },
      {
        icon: <Search size={20} />,
        title: 'AI-Powered Search',
        desc: 'Buyers find what they need with semantic search across product names, specs, descriptions, and document content.',
      },
      {
        icon: <RefreshCw size={20} />,
        title: 'Real-Time Sync API',
        desc: 'Push updates from your ERP or PIM system via REST API. Prices, stock levels, and specs update across all buyer channels instantly.',
      },
    ],
  },
  {
    category: 'Buyer Experience',
    description: 'Give your buyers a branded, fast, and intelligent buying experience.',
    features: [
      {
        icon: <Globe size={20} />,
        title: 'Branded Buyer Portal',
        desc: 'Custom domain, your logo, your colors. A fully white-labeled catalogue experience that feels like an extension of your brand.',
      },
      {
        icon: <MessageSquare size={20} />,
        title: 'Built-In B2B Chat',
        desc: 'Stream-powered real-time messaging between your team and buyers. Discuss RFQs, negotiate, and clarify specs without leaving the platform.',
      },
      {
        icon: <Bell size={20} />,
        title: 'Smart Email Notifications',
        desc: 'Resend-powered transactional emails: new inquiry alerts, quote confirmations, catalogue update announcements.',
      },
      {
        icon: <Cpu size={20} />,
        title: 'AI Catalogue Assistant',
        desc: 'Embedded AI chatbot (Gemini API) that answers buyer questions, suggests alternatives, and guides procurement decisions 24/7.',
      },
    ],
  },
  {
    category: 'Security & Compliance',
    description: 'Enterprise-grade security built into every layer of the platform.',
    features: [
      {
        icon: <Shield size={20} />,
        title: 'Cloudflare Turnstile',
        desc: 'Invisible CAPTCHA protection on all login and form endpoints. Zero friction for real users, zero tolerance for bots.',
      },
      {
        icon: <Lock size={20} />,
        title: 'Malware Scanning',
        desc: 'Every uploaded file is scanned via Cloudmersive API before storage. Files exceeding 3.5MB go through ClamAV server-side.',
      },
      {
        icon: <FileText size={20} />,
        title: 'Enterprise SSO',
        desc: 'Auth0 and BoxyHQ integration for enterprise buyers. Your clients log in with their company email — no extra credentials.',
      },
      {
        icon: <BarChart3 size={20} />,
        title: 'Sentry Monitoring',
        desc: 'Real-time error tracking and performance monitoring. Catch bugs before your buyers do.',
      },
    ],
  },
  {
    category: 'Analytics & Growth',
    description: 'Understand your buyers and grow your global reach with data.',
    features: [
      {
        icon: <BarChart3 size={20} />,
        title: 'Buyer Analytics',
        desc: 'PostHog-powered analytics: which products buyers view, where they drop off, which countries drive most RFQs.',
      },
      {
        icon: <Globe size={20} />,
        title: 'Multi-Language Support',
        desc: 'Serve buyers in English, Arabic, and Chinese. Product data and platform UI auto-localized for your target markets.',
      },
      {
        icon: <Zap size={20} />,
        title: 'SEO-Ready Catalogues',
        desc: 'Open Graph meta tags, structured data markup, and sitemap generation so your products rank on search engines.',
      },
      {
        icon: <RefreshCw size={20} />,
        title: 'Webhook & Integration Hub',
        desc: 'Connect to your CRM, ERP, or logistics system. Native Zapier integration and direct webhook support.',
      },
    ],
  },
]

const highlights = [
  { metric: '<50ms', label: 'Global delivery latency' },
  { metric: '99.97%', label: 'Platform uptime SLA' },
  { metric: '3.5MB', label: 'Malware scan threshold' },
  { metric: '140+', label: 'Countries reached' },
]

export default function FeaturesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-28 grid-bg overflow-hidden">
        <div className="absolute inset-0 bg-radial-cyan pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
          <div className="max-w-3xl">
            <span className="section-label">Features</span>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              The infrastructure<br />
              <span className="text-gradient">B2B deserves</span>
            </h1>
            <p className="section-subtitle max-w-xl">
              A complete technical stack built specifically for companies that sell to other companies — 
              not a repurposed B2C storefront.
            </p>
          </div>
        </div>
      </section>

      {/* Highlight metrics */}
      <section className="border-y border-white/5 bg-dark-800/40 py-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {highlights.map((h) => (
              <div key={h.label}>
                <div className="font-display text-3xl font-bold text-gradient mb-1">{h.metric}</div>
                <div className="text-xs text-slate-500 font-body uppercase tracking-widest">{h.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature categories */}
      <section className="py-20">
        {featureCategories.map((cat, i) => (
          <div
            key={cat.category}
            className={`py-16 ${i % 2 === 1 ? 'bg-dark-800/30' : ''}`}
          >
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
              <div className="mb-12">
                <span className="section-label">{cat.category}</span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-3">
                  {cat.description.split(' ').slice(0, 5).join(' ')}
                </h2>
                <p className="section-subtitle max-w-2xl">{cat.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {cat.features.map((feature) => (
                  <div
                    key={feature.title}
                    className="glass-card rounded-2xl p-6 hover:border-cyan-400/20 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-cyan-400/10 flex items-center justify-center text-cyan-400 mb-5 group-hover:scale-110 transition-transform">
                      {feature.icon}
                    </div>
                    <h3 className="font-display text-base font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-sm text-slate-400 font-body leading-relaxed">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Tech stack table */}
      <section className="py-20 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <span className="section-label">Tech Stack</span>
          <h2 className="section-title mb-4">What powers Allcatalogue</h2>
        </div>
        <div className="glass-card rounded-2xl overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/5">
                <th className="text-left px-6 py-4 text-xs font-display font-semibold text-slate-500 uppercase tracking-widest">Component</th>
                <th className="text-left px-6 py-4 text-xs font-display font-semibold text-slate-500 uppercase tracking-widest">Technology</th>
                <th className="text-left px-6 py-4 text-xs font-display font-semibold text-slate-500 uppercase tracking-widest hidden md:table-cell">Purpose</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Framework', 'Next.js + TypeScript', 'Performance & type safety'],
                ['Database', 'Supabase (PostgreSQL)', 'Real-time data & auth'],
                ['File Storage', 'Cloudflare R2', 'Unlimited, low-latency storage'],
                ['Security', 'Cloudflare Turnstile', 'Invisible CAPTCHA protection'],
                ['Malware', 'Cloudmersive / ClamAV', 'File scanning & safety'],
                ['Email', 'Resend', 'Transactional emails'],
                ['Chat', 'Stream Chat', 'Real-time B2B messaging'],
                ['Monitoring', 'Sentry', 'Error tracking'],
                ['Analytics', 'PostHog', 'Product analytics'],
              ].map(([component, tool, purpose], i) => (
                <tr key={component} className={`border-b border-white/5 hover:bg-white/2 transition-colors ${i % 2 === 0 ? '' : 'bg-white/[0.01]'}`}>
                  <td className="px-6 py-4 text-sm font-display font-semibold text-slate-300">{component}</td>
                  <td className="px-6 py-4">
                    <span className="text-sm font-display font-bold text-cyan-400">{tool}</span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500 font-body hidden md:table-cell">{purpose}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  )
}
