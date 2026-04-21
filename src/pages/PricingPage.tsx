import { useState } from 'react'
import { Check, X, ArrowRight } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    tagline: 'For small suppliers',
    monthly: 0, yearly: 0,
    priceNote: 'Free forever',
    cta: 'Get Started Free',
    highlight: false,
    features: {
      'Catalogue': [
        { t: 'Up to 500 SKUs', ok: true },
        { t: '5 GB file storage', ok: true },
        { t: 'PDF & image uploads', ok: true },
        { t: 'CAD & 3D files', ok: false },
        { t: 'Real-time API sync', ok: false },
      ],
      'Portal': [
        { t: 'Allcatalogue subdomain', ok: true },
        { t: 'Custom domain', ok: false },
        { t: 'White-label branding', ok: false },
        { t: 'Multi-language', ok: false },
      ],
      'Support': [
        { t: 'Enterprise-grade security', ok: true },
        { t: 'Automatic malware scanning', ok: true },
        { t: 'Email support', ok: true },
        { t: 'Dedicated manager', ok: false },
      ],
    },
  },
  {
    name: 'Business',
    tagline: 'For growing B2B suppliers',
    monthly: 149, yearly: 119,
    priceNote: 'per month',
    cta: 'Start 14-Day Trial',
    highlight: true,
    badge: 'Most Popular',
    features: {
      'Catalogue': [
        { t: 'Up to 25,000 SKUs', ok: true },
        { t: '100 GB file storage', ok: true },
        { t: 'PDF & image uploads', ok: true },
        { t: 'CAD & 3D files', ok: true },
        { t: 'Real-time API sync', ok: true },
      ],
      'Portal': [
        { t: 'Custom domain', ok: true },
        { t: 'White-label branding', ok: true },
        { t: 'Built-in B2B chat', ok: true },
        { t: 'Multi-language', ok: true },
      ],
      'Support': [
        { t: 'Advanced bot protection', ok: true },
        { t: 'Automatic malware scanning', ok: true },
        { t: 'Priority email + chat', ok: true },
        { t: 'Dedicated manager', ok: false },
      ],
    },
  },
  {
    name: 'Enterprise',
    tagline: 'For large global operations',
    monthly: null, yearly: null,
    priceNote: 'Custom pricing',
    cta: 'Contact Sales',
    highlight: false,
    features: {
      'Catalogue': [
        { t: 'Unlimited SKUs', ok: true },
        { t: 'Unlimited storage', ok: true },
        { t: 'PDF & image uploads', ok: true },
        { t: 'CAD & 3D files', ok: true },
        { t: 'Real-time API sync', ok: true },
      ],
      'Portal': [
        { t: 'Custom domain', ok: true },
        { t: 'White-label branding', ok: true },
        { t: 'Enterprise SSO', ok: true },
        { t: 'Multi-language', ok: true },
      ],
      'Support': [
        { t: 'Deep-scan file inspection', ok: true },
        { t: '24/7 error monitoring', ok: true },
        { t: '24/7 phone + Slack', ok: true },
        { t: 'Dedicated manager', ok: true },
      ],
    },
  },
]

const faqs = [
  { q: 'Can I switch plans at any time?', a: 'Yes, upgrade or downgrade instantly. Changes take effect immediately and billing is prorated.' },
  { q: 'What payment methods do you accept?', a: 'All major credit cards (Visa, Mastercard, Amex) and wire transfers for Enterprise annual plans.' },
  { q: 'Is there a setup fee for Enterprise?', a: 'No setup fees. Enterprise pricing covers everything including onboarding, migration, and custom work.' },
  { q: 'What happens if I exceed my SKU limit?', a: 'We notify you at 90%. Your existing catalogue stays fully accessible — we never block access. Upgrade any time.' },
  { q: 'Do you offer annual billing discounts?', a: 'Yes. Annual billing saves approximately 20% compared to monthly pricing on all paid plans.' },
  { q: 'Is my data secure and GDPR compliant?', a: 'Yes — SOC 2 Type II certified and fully GDPR compliant. EU data-residency region available with encrypted storage at rest and in transit.' },
]

export default function PricingPage() {
  const [annual, setAnnual] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div style={{ background: 'var(--bg)' }}>
      {/* Hero */}
      <section className="relative py-20 overflow-hidden" style={{ background: 'var(--navy)' }}>
        <div className="dot-bg absolute inset-0 opacity-20" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <span className="section-label">Pricing</span>
          <h1 className="font-display text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight">
            Simple, transparent pricing<br />
            <span style={{ color: 'var(--orange)' }}>that scales with you</span>
          </h1>
          <p className="font-body text-lg max-w-xl mx-auto mb-10 leading-relaxed" style={{ color: '#94a3b8' }}>
            Start free. Scale as you grow. No hidden fees.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-5 bg-white rounded-full px-6 py-3 shadow-md">
            <button onClick={() => setAnnual(false)}
              className="font-display font-semibold text-sm transition-colors"
              style={{ color: !annual ? 'var(--orange)' : 'var(--muted)' }}>
              Monthly
            </button>
            <button onClick={() => setAnnual(!annual)}
              className="relative w-12 h-6 rounded-full transition-colors"
              style={{ background: annual ? 'var(--orange)' : '#e2e8f0' }}>
              <span className="absolute top-1 w-4 h-4 rounded-full bg-white shadow transition-all"
                style={{ left: annual ? '28px' : '4px' }} />
            </button>
            <button onClick={() => setAnnual(true)}
              className="font-display font-semibold text-sm transition-colors flex items-center gap-2"
              style={{ color: annual ? 'var(--orange)' : 'var(--muted)' }}>
              Annual
              <span className="text-xs font-bold px-2 py-0.5 rounded-full"
                style={{ background: 'var(--orange-light)', color: 'var(--orange)', border: '1px solid var(--orange-mid)' }}>
                Save 20%
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="py-14 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-3 gap-6 items-start">
          {plans.map(plan => (
            <div key={plan.name} className="relative">
              {plan.highlight && plan.badge && (
                <div className="absolute -top-4 left-0 right-0 flex justify-center z-10">
                  <span className="font-display font-bold text-xs text-white px-5 py-1.5 rounded-full shadow-lg"
                    style={{ background: 'var(--orange)' }}>
                    {plan.badge}
                  </span>
                </div>
              )}
              <div className="card p-7 rounded-2xl" style={plan.highlight ? {
                border: '2px solid var(--orange)',
                boxShadow: '0 8px 30px rgba(255,106,0,0.15)'
              } : {}}>
                <div className="mb-7">
                  <h3 className="font-display font-extrabold text-xl mb-1" style={{ color: 'var(--navy)' }}>{plan.name}</h3>
                  <p className="text-sm font-body" style={{ color: 'var(--muted)' }}>{plan.tagline}</p>
                  <div className="mt-5 flex items-end gap-1">
                    {plan.monthly !== null ? (
                      <>
                        <span className="font-display font-extrabold text-5xl" style={{ color: 'var(--navy)' }}>
                          ${annual ? plan.yearly : plan.monthly}
                        </span>
                        <span className="font-body text-sm mb-2" style={{ color: 'var(--muted)' }}>{plan.priceNote}</span>
                      </>
                    ) : (
                      <span className="font-display font-extrabold text-3xl" style={{ color: 'var(--navy)' }}>{plan.priceNote}</span>
                    )}
                  </div>
                  {annual && plan.yearly && plan.yearly > 0 && (
                    <p className="text-xs font-body mt-1" style={{ color: 'var(--orange)' }}>
                      Billed as ${(plan.yearly * 12).toLocaleString()}/year
                    </p>
                  )}
                </div>

                <button className={`w-full mb-7 flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-display font-bold text-sm transition-all active:scale-97`}
                  style={plan.highlight
                    ? { background: 'var(--orange)', color: 'white' }
                    : { background: 'var(--bg)', color: 'var(--navy)', border: '1.5px solid var(--border)' }
                  }>
                  {plan.cta} <ArrowRight size={14} />
                </button>

                {Object.entries(plan.features).map(([cat, items]) => (
                  <div key={cat} className="mb-5">
                    <p className="text-xs font-display font-bold uppercase tracking-widest mb-3" style={{ color: 'var(--muted)' }}>{cat}</p>
                    <ul className="space-y-2.5">
                      {items.map(item => (
                        <li key={item.t} className="flex items-center gap-2.5">
                          {item.ok
                            ? <Check size={14} style={{ color: 'var(--orange)', flexShrink: 0 }} />
                            : <X size={14} style={{ color: '#cbd5e0', flexShrink: 0 }} />
                          }
                          <span className="text-sm font-body" style={{ color: item.ok ? 'var(--navy)' : '#a0aec0' }}>
                            {item.t}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Enterprise banner */}
      <section className="pb-8 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="card p-6 flex flex-col md:flex-row items-center justify-between gap-5">
          <div>
            <h4 className="font-display font-bold text-lg mb-1" style={{ color: 'var(--navy)' }}>Need a custom volume deal?</h4>
            <p className="text-sm font-body" style={{ color: 'var(--muted)' }}>Large catalogues, custom SLAs, or dedicated infrastructure? Talk to our sales team.</p>
          </div>
          <button className="btn-primary whitespace-nowrap flex items-center gap-2 px-8 py-3.5">
            Contact Sales <ArrowRight size={15} />
          </button>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <span className="section-label">FAQ</span>
            <h2 className="section-title">Common questions</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="card overflow-hidden rounded-xl" style={{ transform: 'none' }}>
                <button
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-display font-semibold text-sm pr-4" style={{ color: 'var(--navy)' }}>{faq.q}</span>
                  <span className="font-bold text-xl flex-shrink-0 transition-transform"
                    style={{ color: 'var(--orange)', transform: openFaq === i ? 'rotate(45deg)' : 'none' }}>+</span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 border-t" style={{ borderColor: 'var(--border)' }}>
                    <p className="font-body text-sm leading-relaxed pt-4" style={{ color: 'var(--muted)' }}>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
