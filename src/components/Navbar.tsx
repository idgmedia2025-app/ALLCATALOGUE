import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Search, ChevronDown } from 'lucide-react'

const navLinks = [
  { label: 'Solutions', path: '/solutions' },
  { label: 'Features', path: '/features' },
  { label: 'Pricing', path: '/pricing' },
]

const categories = [
  'Electronics', 'Industrial Equipment', 'Chemicals & Pharma',
  'Textiles & Apparel', 'Food & Beverages', 'Packaging & Printing',
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  return (
    <>
      {/* Top bar */}
      <div style={{ background: 'var(--navy)' }} className="hidden md:block">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-10 flex items-center justify-between">
          <p className="text-xs font-body text-slate-400">
            🌍 Worldwide B2B Catalogue Platform — 140+ Countries
          </p>
          <div className="flex items-center gap-6">
            {['Help Center', 'Supplier Directory', 'Trade Shows'].map(l => (
              <a key={l} href="#" className="text-xs text-slate-400 hover:text-white transition-colors font-body">{l}</a>
            ))}
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="sticky top-0 z-50 bg-white border-b" style={{ borderColor: 'var(--border)', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center gap-6">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-1">
            <span className="font-display text-xl font-bold" style={{ color: 'var(--navy)' }}>All</span>
            <span className="font-display text-xl font-bold" style={{ color: 'var(--orange)' }}>catalogue</span>
          </Link>

          {/* Search bar */}
          <div className="hidden md:flex flex-1 max-w-xl items-center">
            <div className="flex w-full rounded-lg overflow-hidden border-2" style={{ borderColor: 'var(--orange)' }}>
              <select className="px-3 text-sm font-body border-r outline-none" style={{ borderColor: 'var(--border)', background: '#f8f8f8', color: 'var(--navy)', minWidth: '130px' }}>
                <option>All Categories</option>
                {categories.map(c => <option key={c}>{c}</option>)}
              </select>
              <input
                type="text"
                placeholder="Search companies & catalogues..."
                className="flex-1 px-4 text-sm font-body outline-none"
                style={{ color: 'var(--navy)' }}
              />
              <button className="px-4" style={{ background: 'var(--orange)' }}>
                <Search size={16} color="white" />
              </button>
            </div>
          </div>

          {/* Right actions */}
          <div className="hidden md:flex items-center gap-5 ml-auto">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={location.pathname === link.path ? 'nav-link-active' : 'nav-link'}
              >
                {link.label}
              </Link>
            ))}
            <button className="nav-link">Sign In</button>
            <button className="btn-primary text-sm px-5 py-2.5">
              Sign Up Free
            </button>
          </div>

          {/* Mobile toggle */}
          <button className="md:hidden ml-auto" onClick={() => setMobileOpen(!mobileOpen)} style={{ color: 'var(--navy)' }}>
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Secondary nav */}
        <div className="hidden md:block border-t" style={{ borderColor: 'var(--border)', background: 'var(--bg)' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-12 h-10 flex items-center gap-8">
            <button className="flex items-center gap-1.5 text-sm font-display font-semibold" style={{ color: 'var(--orange)' }}>
              <span className="material-symbols-outlined text-base">grid_view</span>
              Categories
              <ChevronDown size={14} />
            </button>
            {['New Arrivals', 'Top Selling', 'Request for Quotation', 'Trade Shows'].map(l => (
              <a key={l} href="#" className="nav-link text-sm whitespace-nowrap">{l}</a>
            ))}
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden bg-white border-t px-6 py-5 flex flex-col gap-4" style={{ borderColor: 'var(--border)' }}>
            <input type="text" placeholder="Search..." className="input-field" />
            {navLinks.map(link => (
              <Link key={link.path} to={link.path} onClick={() => setMobileOpen(false)}
                className={location.pathname === link.path ? 'nav-link-active' : 'nav-link'}>
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t flex flex-col gap-3" style={{ borderColor: 'var(--border)' }}>
              <button className="btn-outline w-full">Sign In</button>
              <button className="btn-primary w-full">Sign Up Free</button>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}
