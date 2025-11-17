import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { useLang } from '../context/LanguageContext'

export default function Hero() {
  const { t } = useLang()

  return (
    <section className="relative pt-24 lg:pt-28 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/70 to-white pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center py-16 lg:py-24">
          <div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
              {t('brand')}
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }} className="mt-4 text-lg sm:text-xl text-slate-700 max-w-2xl">
              {t('slogan')}
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="mt-8 flex flex-wrap gap-3">
              <a href="#services" className="px-5 py-3 rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition shadow-lg shadow-slate-900/10">
                {t('cta_services')}
              </a>
              <a href="#academy" className="px-5 py-3 rounded-xl bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 transition">
                {t('cta_academy')}
              </a>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <Stat number="10+" labelKey="stats_years" />
              <Stat number="250+" labelKey="stats_clients" />
              <Stat number="8" labelKey="stats_certifs" />
              <Stat number="6" labelKey="stats_domains" />
            </motion.div>
          </div>
          <div className="hidden lg:block" />
        </div>
      </div>
    </section>
  )
}

function Stat({ number, labelKey }) {
  const { t } = useLang()
  return (
    <div className="p-4 rounded-xl bg-white/70 backdrop-blur border border-slate-200">
      <div className="text-2xl font-semibold text-slate-900">{number}</div>
      <div className="text-slate-600 text-sm">{t(labelKey)}</div>
    </div>
  )
}
