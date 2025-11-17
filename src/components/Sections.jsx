import { motion } from 'framer-motion'
import { ShieldCheck, GraduationCap, ShoppingCart, BadgeCheck, Star } from 'lucide-react'
import { useLang } from '../context/LanguageContext'

export default function Sections() {
  const { t } = useLang()
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 space-y-20">
      {/* Services */}
      <div id="services" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">{t('nav_services')}</h2>
          <a href="#" className="text-slate-700 hover:text-slate-900">Voir tout</a>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: ShieldCheck, title: 'Conseil & Stratégie', desc: 'Accompagnement complet vers la performance.' },
            { icon: BadgeCheck, title: 'Qualité & ISO', desc: 'Mise en conformité et certification.' },
            { icon: Star, title: 'Excellence Opérationnelle', desc: 'Lean, Six Sigma et amélioration continue.' },
          ].map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition">
              <item.icon className="h-6 w-6 text-slate-900 mb-4" />
              <h3 className="font-semibold text-slate-900 mb-1">{item.title}</h3>
              <p className="text-slate-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Academy */}
      <div id="academy" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Aigle Academy</h2>
          <a href="#" className="text-slate-700 hover:text-slate-900">Parcourir</a>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1,2,3].map((i) => (
            <div key={i} className="group p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition">
              <GraduationCap className="h-6 w-6 text-slate-900 mb-4" />
              <h3 className="font-semibold text-slate-900 mb-1">Formation #{i}</h3>
              <p className="text-slate-600 text-sm">Sessions régulières, attestation et accompagnement.</p>
              <div className="mt-4 inline-flex items-center gap-1 text-slate-900 font-medium">S’inscrire →</div>
            </div>
          ))}
        </div>
      </div>

      {/* Shop */}
      <div id="shop" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Boutique Pro</h2>
          <a href="#" className="text-slate-700 hover:text-slate-900">Nouveautés</a>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1,2,3].map((i) => (
            <div key={i} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition">
              <ShoppingCart className="h-6 w-6 text-slate-900 mb-4" />
              <h3 className="font-semibold text-slate-900 mb-1">Outil #{i}</h3>
              <p className="text-slate-600 text-sm">Ressources et gabarits prêts à l’emploi.</p>
              <button className="mt-4 px-3 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800">Ajouter au panier</button>
            </div>
          ))}
        </div>
      </div>

      {/* Audit */}
      <div id="audit" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Audit & ISO</h2>
          <a href="#" className="text-slate-700 hover:text-slate-900">Demander un audit</a>
        </div>
        <form className="grid gap-4 sm:grid-cols-2 bg-white p-6 rounded-2xl border border-slate-200">
          <input required placeholder="Nom & Prénom" className="px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-900" />
          <input required type="email" placeholder="Email" className="px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-900" />
          <select className="px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-900">
            <option>ISO 9001</option>
            <option>ISO 14001</option>
            <option>ISO 45001</option>
            <option>ISO 27001</option>
          </select>
          <button className="px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800">Envoyer</button>
        </form>
      </div>

      {/* Testimonials */}
      <div id="testimonials" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8">{t('testimonials_title')}</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { name: 'Sarah', text: 'Une équipe remarquable et des résultats concrets.' },
            { name: 'Youssef', text: 'Des formations d’excellente qualité, très pratiques.' },
            { name: 'Emma', text: 'Accompagnement sérieux et professionnel.' },
          ].map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="p-6 rounded-2xl bg-white border border-slate-200">
              <div className="flex items-center gap-2 text-yellow-500 mb-2">{'★★★★★'}</div>
              <p className="text-slate-700">{item.text}</p>
              <div className="mt-3 text-sm text-slate-500">— {item.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
