import { Link } from 'react-router-dom'

const footerLinks = {
  Product: [
    { label: 'Solutions', path: '/solutions' },
    { label: 'Features', path: '/features' },
    { label: 'Pricing', path: '/pricing' },
  ],
  Company: [
    { label: 'About', path: '#' },
    { label: 'Blog', path: '#' },
    { label: 'Careers', path: '#' },
  ],
  Support: [
    { label: 'Documentation', path: '#' },
    { label: 'Help Center', path: '#' },
    { label: 'Contact', path: '#' },
  ],
  Legal: [
    { label: 'Privacy Policy', path: '#' },
    { label: 'Terms of Service', path: '#' },
    { label: 'Security', path: '#' },
  ],
}

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/5 bg-dark-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="block mb-4">
              <span className="text-xl font-bold font-display text-white">
                All<span className="text-cyan-400">catalogue</span>
              </span>
            </Link>
            <p className="text-sm text-slate-500 font-body leading-relaxed mb-6">
              The B2B digital catalogue platform for enterprises that scale globally.
            </p>
            <div className="flex gap-3">
              {['linkedin', 'twitter', 'youtube'].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:border-cyan-400/40 hover:bg-cyan-400/10 transition-all"
                >
                  <span className="material-symbols-outlined text-slate-400 text-sm">{s === 'twitter' ? 'close' : s === 'linkedin' ? 'work' : 'play_circle'}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-display text-xs font-semibold text-white uppercase tracking-widest mb-4">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-sm text-slate-500 hover:text-cyan-400 transition-colors font-body"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-600 font-body">
            © 2026 Allcatalogue. All rights reserved.
          </p>
          <p className="text-xs text-slate-600 font-body">
            Built with precision for global B2B.
          </p>
        </div>
      </div>
    </footer>
  )
}
