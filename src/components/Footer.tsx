import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'

const cols = {
  Buy: ['All Categories', 'Request for Quotation', 'Top Selling', 'New Arrivals', 'Trade Shows'],
  Sell: ['Become a Supplier', 'Supplier Membership', 'Seller Resources', 'Trade Assurance', 'Advertise'],
  Support: ['Help Center', 'Contact Us', 'Shipping Info', 'FAQs', 'Live Chat'],
  Legal: ['Privacy Policy', 'Terms of Use', 'Cookie Policy', 'Security', 'GDPR'],
}

export default function Footer() {
  return (
    <footer style={{ background: 'var(--navy)' }}>
      {/* Newsletter strip */}
      <div className="border-b" style={{ borderColor: 'rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-display font-bold text-white text-lg mb-1">Subscribe to our newsletter</h4>
            <p className="text-sm font-body" style={{ color: '#94a3b8' }}>Get the latest updates, supplier listings, and trade offers.</p>
          </div>
          <div className="flex gap-3 w-full md:w-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="input-field md:w-64"
              style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)', color: 'white' }}
            />
            <button className="btn-primary whitespace-nowrap">Subscribe</button>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-14 grid grid-cols-2 md:grid-cols-5 gap-10">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <Link to="/" className="inline-block mb-4">
            <span className="font-display text-2xl font-bold text-white">All</span>
            <span className="font-display text-2xl font-bold" style={{ color: 'var(--orange)' }}>catalogue</span>
          </Link>
          <p className="text-sm font-body mb-6 leading-relaxed" style={{ color: '#94a3b8' }}>
            Connecting global buyers with verified suppliers. Your trusted partner for successful business.
          </p>
          <div className="space-y-2">
            {[
              { icon: <Mail size={14} />, text: 'contact@allcatalogue.io' },
              { icon: <Phone size={14} />, text: 'Contact form available' },
              { icon: <MapPin size={14} />, text: 'East Africa — serving globally' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <span style={{ color: 'var(--orange)' }}>{item.icon}</span>
                <span className="text-xs font-body" style={{ color: '#94a3b8' }}>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {Object.entries(cols).map(([title, links]) => (
          <div key={title}>
            <h5 className="font-display font-bold text-white text-sm mb-4 uppercase tracking-wider">{title}</h5>
            <ul className="space-y-2.5">
              {links.map(l => (
                <li key={l}>
                  <a href="#" className="text-sm font-body transition-colors hover:text-white" style={{ color: '#94a3b8' }}>{l}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom */}
      <div className="border-t" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs font-body" style={{ color: '#64748b' }}>
            © 2026 Allcatalogue. All rights reserved.
          </p>
          <div className="flex gap-4">
            {['Privacy Policy', 'Terms of Use', 'Cookie Policy'].map(l => (
              <a key={l} href="#" className="text-xs font-body hover:text-white transition-colors" style={{ color: '#64748b' }}>{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
