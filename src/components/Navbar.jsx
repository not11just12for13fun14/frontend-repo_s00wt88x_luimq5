import { useState } from 'react'
import { Menu, Globe, ShoppingCart, Star, ShieldCheck, GraduationCap } from 'lucide-react'
import { useLang } from '../context/LanguageContext'

export default function Navbar() {
  const { lang, setLang, t } = useLang()
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/50 bg-white/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <img src="/logo.svg" alt="Aigle Jurassien" className="h-8 w-8" />
            <span className="font-semibold text-slate-900">{t('brand')}</span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-slate-700">
            <a href="#services" className="hover:text-slate-900 transition flex items-center gap-1"><ShieldCheck className="h-4 w-4" />{t('nav_services')}</a>
            <a href="#academy" className="hover:text-slate-900 transition flex items-center gap-1"><GraduationCap className="h-4 w-4" />{t('nav_academy')}</a>
            <a href="#shop" className="hover:text-slate-900 transition flex items-center gap-1"><ShoppingCart className="h-4 w-4" />{t('nav_shop')}</a>
            <a href="#audit" className="hover:text-slate-900 transition flex items-center gap-1"><ShieldCheck className="h-4 w-4" />{t('nav_audit')}</a>
            <a href="#testimonials" className="hover:text-slate-900 transition flex items-center gap-1"><Star className="h-4 w-4" />{t('nav_testimonials')}</a>
          </nav>

          <div className="flex items-center gap-2">
            <div className="relative">
              <button className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md border border-slate-300 bg-white text-slate-700 hover:bg-slate-50" onClick={() => setOpen(!open)}>
                <Globe className="h-4 w-4" /> {lang.toUpperCase()}
              </button>
              {open && (
                <div className="absolute right-0 mt-2 w-36 bg-white rounded-md shadow border p-1">
                  {['fr','en','es','ar'].map(code => (
                    <button key={code} className="w-full text-left px-3 py-2 rounded hover:bg-slate-100" onClick={() => { setLang(code); setOpen(false) }}>
                      {code.toUpperCase()}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <button className="md:hidden inline-flex items-center justify-center p-2 rounded-md border border-slate-300"><Menu className="h-5 w-5" /></button>
          </div>
        </div>
      </div>
    </header>
  )
}
