import { useLang } from '../context/LanguageContext'

export default function Footer() {
  const { t } = useLang()
  return (
    <footer className="mt-20 border-t border-slate-200 bg-white/80 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <img src="/logo.svg" alt="logo" className="h-8 w-8" />
              <span className="font-semibold">{t('brand')}</span>
            </div>
            <p className="text-sm text-slate-600 max-w-xs">{t('slogan')}</p>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900 mb-3">Réseaux</h4>
            <ul className="space-y-2 text-slate-600">
              <li><a href="#" className="hover:text-slate-900">LinkedIn</a></li>
              <li><a href="#" className="hover:text-slate-900">X / Twitter</a></li>
              <li><a href="#" className="hover:text-slate-900">YouTube</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900 mb-3">Legal</h4>
            <ul className="space-y-2 text-slate-600">
              <li><a href="#" className="hover:text-slate-900">Mentions légales</a></li>
              <li><a href="#" className="hover:text-slate-900">Politique de confidentialité</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900 mb-3">{t('newsletter_title')}</h4>
            <p className="text-sm text-slate-600 mb-3">{t('newsletter_sub')}</p>
            <form className="flex items-center gap-2">
              <input placeholder={t('newsletter_placeholder')} className="px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-900 flex-1" />
              <button className="px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800 whitespace-nowrap">{t('newsletter_button')}</button>
            </form>
          </div>
        </div>
        <div className="mt-10 text-xs text-slate-500">© {new Date().getFullYear()} Aigle Jurassien. {t('footer_rights')}</div>
      </div>
    </footer>
  )
}
