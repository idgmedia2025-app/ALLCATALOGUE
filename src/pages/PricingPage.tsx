import { useState } from 'react'
import { Check, ArrowRight, X } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    tagline: 'For small suppliers getting started',
    monthlyPrice: 0,
    yearlyPrice: 0,
    priceNote: 'Free forever',
    cta: 'Get Started Free',
    ctaVariant: 'ghost' as const,
    highlight: false,
    features: {
      'Catalogue': [
        { text: 'Up to 500 SKUs', included: true },
        { text: '5 GB file storage', included: true },
        { text: 'PDF & image uploads', included: true },
        { text: 'CAD & 3D files', included: false },
        { text: 'Real-time API sync', included: false },
      ],
      'Buyer Portal': [
        { text: 'Allcatalogue subdomain', included: true },
        { text: 'Custom domain', included: false },
        { text: 'White-label branding', included: false },
        { text: 'Multi-language support', included: false },
      ],
      'Security & Support': [
        { text: 'Cloudflare Turnstile', included: true },
        { text: 'Malware scanning', included: true },
        { text: 'Email support', included: true },
        { text: 'Dedicated account manager', included: false },
      ],
    },
  },
  {
    name: 'Business',
    tagline: 'For growing B2B suppliers',
    monthlyPrice: 149,
    yearlyPrice: 119,
    priceNote: 'per month',
    cta: 'Start 14-Day Trial',
    ctaVariant: 'primary' as const,
    highlight: true,
    badge: 'Most Popular',
    features: {
      'Catalogue': [
        { text: 'Up to 25,000 SKUs', included: true },
        { text: '100 GB file storage', included: true },
        { text: 'PDF & image uploads', included: true },
        { text: 'CAD & 3D files', included: true },
        { text: 'Real-time API sync', included: true },
      ],
      'Buyer Portal': [
        { text: 'Custom domain', included: true },
        { text: 'White-label branding', included: true },
        { text: 'Built-in B2B chat', included: true },
        { text: 'Multi-language support', included: true },
      ],
      'Security & Support': [
        { text: 'Cloudflare Turnstile', included: true },
        { text: 'Malware scanning', included: true },
        { text: 'Priority email + chat support', included: true },
        { text: 'Dedicated account manager', included: false },
      ],
    },
  },
  {
    name: 'Enterprise',
    tagline: 'For large-scale global operations',
    monthlyPrice: null,
    yearlyPrice: null,
    priceNote: 'Custom pricing',
    cta: 'Contact Sales',
    ctaVariant: 'ghost' as const,
    highlight: false,
    features: {
      'Catalogue': [
        { text: 'Unlimited SKUs', included: true },
        { text: 'Unlimited storage (R2)', included: true },
        { text: 'PDF & image uploads', included: true },
        { text: 'CAD & 3D files', included: true },
        { text: 'Real-time API sync', included: true },
      ],
      'Buyer Portal': [
        { text: 'Custom domain', included: true },
        { text: 'White-label branding', included: true },
        { text: 'Built-in B2B chat', included: true },
        { text: 'Enterprise SSO (Auth0/BoxyHQ)', included: true },
      ],
      'Security & Support': [
        { text: 'Cloudflare Turnstile', included: true },
        { text: 'ClamAV advanced scanning', included: true },
        { text: 'Sentry monitoring', included: true },
        { text: 'Dedicated account manager', included: true },
      ],
    },
  },
]

const faqs = [
  {
    q: 'Can I switch plans at any time?',
    a: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately and billing is prorated.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept all major credit cards (Visa, Mastercard, Amex) and can arrange wire transfers for Enterprise annual plans.',
  },
  {
    q: 'Is there a setup fee for Enterprise?',
    a: 'No setup fees. Enterprise pricing covers everything including onboarding, migration, and custom integration work.',
  },
  {
    q: 'What happens if I exceed my SKU limit?',
    a: 'We will notify you when you approach 90% of your limit. Your existing catalogue remains fully available — we will never block access. You can upgrade at any time.',
  },
  {
    q: 'Do you offer discounts for annual billing?',
    a: 'Yes. Choosing annual billing saves you approximately 20% compared to monthly pricing across all paid plans.',
  },
  {
    q: 'Is my data secure and GDPR compliant?',
    a: 'Allcatalogue is SOC 2 Type II certified and fully GDPR compliant. Data is stored on Supabase (EU region available) with Cloudflare file storage.',
  },
]

export default function PricingPage() {
  const [annual, setAnnual] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <>
      {/* Hero */}
      <section className="relative py-28 grid-bg overflow-hidden">
        <div className="absolute inset-0 bg-radial-cyan pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative text-center">
          <span className="section-label">Pricing</span>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            Simple, transparent<br />
            <span className="text-gradient">pricing that scales</span>
          </h1>
          <p className="section-subtitle max-w-xl mx-auto mb-10">
            Start free. Scale as you grow. No hidden fees, no surprise invoices.
          </p>

          {/* Billing toggle */}
          <div className="inline-flex items-center gap-4 glass-card rounded-full px-6 py-3">
            <button
              onClick={() => setAnnual(false)}
              className={`text-sm font-display font-semibold transition-colors ${!annual ? 'text-white' : 'text-slate-500'}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(!annual)}
              className={`relative w-12 h-6 rounded-full transition-colors ${annual ? 'bg-cyan-400' : 'bg-white/10'}`}
            >
              <span
                className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all ${annual ? 'left-7' : 'left-1'}`}
              />
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`text-sm font-display font-semibold transition-colors flex items-center gap-2 ${annual ? 'text-white' : 'text-slate-500'}`}
            >
              Annual
              <span className="text-xs bg-cyan-400/20 text-cyan-400 px-2 py-0.5 rounded-full border border-cyan-400/30">
                Save 20%
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="py-16 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 relative transition-all duration-300 ${
                plan.highlight
                  ? 'bg-gradient-to-b from-cyan-400/10 to-dark-800/60 border border-cyan-400/30 cyan-glow-sm'
                  : 'glass-card hover:border-white/15'
              }`}
            >
              {plan.highlight && plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-cyan-400 text-dark-900 text-xs font-display font-bold px-4 py-1.5 rounded-full tracking-wide">
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Header */}
              <div className="mb-8">
                <h3 className="font-display text-xl font-bold text-white mb-1">{plan.name}</h3>
                <p className="text-sm text-slate-500 font-body mb-6">{plan.tagline}</p>

                <div className="flex items-end gap-2">
                  {plan.monthlyPrice !== null ? (
                    <>
                      <span className="font-display text-5xl font-bold text-white">
                        ${annual ? plan.yearlyPrice : plan.monthlyPrice}
                      </span>
                      <span className="text-slate-500 font-body text-sm pb-2">{plan.priceNote}</span>
                    </>
                  ) : (
                    <span className="font-display text-3xl font-bold text-white">{plan.priceNote}</span>
                  )}
                </div>
                {annual && plan.monthlyPrice !== null && plan.monthlyPrice > 0 && (
                  <p className="text-xs text-cyan-400 font-body mt-1">
                    Billed as ${(plan.yearlyPrice! * 12).toLocaleString()}/year
                  </p>
                )}
              </div>

              {/* CTA */}
              <button
                className={`w-full mb-8 flex items-center justify-center gap-2 ${
                  plan.ctaVariant === 'primary' ? 'btn-primary' : 'btn-ghost'
                }`}
              >
                {plan.cta}
                <ArrowRight size={14} />
              </button>

              {/* Features by category */}
              <div className="space-y-6">
                {Object.entries(plan.features).map(([category, items]) => (
                  <div key={category}>
                    <p className="text-xs font-display font-semibold text-slate-500 uppercase tracking-widest mb-3">
                      {category}
                    </p>
                    <ul className="space-y-2.5">
                      {items.map((item) => (
                        <li key={item.text} className="flex items-start gap-2.5">
                          {item.included ? (
                            <Check size={15} className="text-cyan-400 mt-0.5 flex-shrink-0" />
                          ) : (
                            <X size={15} className="text-slate-600 mt-0.5 flex-shrink-0" />
                          )}
                          <span className={`text-sm font-body ${item.included ? 'text-slate-300' : 'text-slate-600'}`}>
                            {item.text}
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

      {/* Compare note */}
      <section className="py-4 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="glass-card rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-display font-bold text-white mb-1">Need a custom volume deal?</h4>
            <p className="text-sm text-slate-400 font-body">
              Large catalogues, custom SLAs, or dedicated infrastructure — talk to our sales team.
            </p>
          </div>
          <button className="btn-primary whitespace-nowrap flex items-center gap-2">
            Contact Sales <ArrowRight size={15} />
          </button>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 max-w-4xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <span className="section-label">FAQ</span>
          <h2 className="section-title">Common questions</h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="glass-card rounded-xl overflow-hidden hover:border-white/12 transition-colors"
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <span className="font-display font-semibold text-white text-sm pr-4">{faq.q}</span>
                <span
                  className={`text-cyan-400 flex-shrink-0 transition-transform duration-200 ${openFaq === i ? 'rotate-45' : ''}`}
                >
                  <span className="material-symbols-outlined text-lg">add</span>
                </span>
              </button>
              {openFaq === i && (
                <div className="px-6 pb-5 border-t border-white/5">
                  <p className="text-sm text-slate-400 font-body leading-relaxed pt-4">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
