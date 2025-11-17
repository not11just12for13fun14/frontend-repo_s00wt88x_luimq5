import { createContext, useContext, useMemo, useState } from 'react'

const LanguageContext = createContext()

const messages = {
  fr: {
    brand: 'Aigle Jurassien',
    slogan: "Innovation, excellence et formation au service de votre performance.",
    cta_services: 'Voir les Services',
    cta_academy: "Découvrir l'Academy",
    nav_services: 'Services',
    nav_academy: 'Academy',
    nav_shop: 'Boutique',
    nav_audit: 'Audit',
    nav_testimonials: 'Témoignages',
    stats_years: "Années d’expérience",
    stats_clients: 'Clients accompagnés',
    stats_certifs: 'Certifications',
    stats_domains: 'Domaines d’excellence',
    domains_title: 'Domaines & Offres phares',
    testimonials_title: 'Ils nous font confiance',
    newsletter_title: 'Restez informé',
    newsletter_sub: 'Recevez nos nouveautés, formations et ressources.',
    newsletter_placeholder: 'Votre e‑mail',
    newsletter_button: 'S’abonner',
    footer_rights: 'Tous droits réservés.'
  },
  en: {
    brand: 'Aigle Jurassien',
    slogan: 'Innovation, excellence and training to power your growth.',
    cta_services: 'View Services',
    cta_academy: 'Explore Academy',
    nav_services: 'Services',
    nav_academy: 'Academy',
    nav_shop: 'Shop',
    nav_audit: 'Audit',
    nav_testimonials: 'Testimonials',
    stats_years: 'Years of experience',
    stats_clients: 'Clients served',
    stats_certifs: 'Certifications',
    stats_domains: 'Expertise domains',
    domains_title: 'Key Domains & Offers',
    testimonials_title: 'Trusted by our clients',
    newsletter_title: 'Stay in the loop',
    newsletter_sub: 'Get updates on courses, news and resources.',
    newsletter_placeholder: 'Your email',
    newsletter_button: 'Subscribe',
    footer_rights: 'All rights reserved.'
  },
  es: {
    brand: 'Aigle Jurassien',
    slogan: 'Innovación, excelencia y formación para impulsar su crecimiento.',
    cta_services: 'Ver Servicios',
    cta_academy: 'Academy',
    nav_services: 'Servicios',
    nav_academy: 'Academy',
    nav_shop: 'Tienda',
    nav_audit: 'Auditoría',
    nav_testimonials: 'Testimonios',
    stats_years: 'Años de experiencia',
    stats_clients: 'Clientes',
    stats_certifs: 'Certificaciones',
    stats_domains: 'Dominios',
    domains_title: 'Dominios y ofertas clave',
    testimonials_title: 'Nos recomiendan',
    newsletter_title: 'Mantente informado',
    newsletter_sub: 'Recibe novedades y cursos.',
    newsletter_placeholder: 'Tu email',
    newsletter_button: 'Suscribirse',
    footer_rights: 'Todos los derechos reservados.'
  },
  ar: {
    brand: 'العُقاب اليوراسي',
    slogan: 'ابتكار وتميّز وتدريب لدفع نموّك.',
    cta_services: 'الخدمات',
    cta_academy: 'الأكاديمية',
    nav_services: 'الخدمات',
    nav_academy: 'الأكاديمية',
    nav_shop: 'المتجر',
    nav_audit: 'التدقيق',
    nav_testimonials: 'آراء العملاء',
    stats_years: 'سنوات خبرة',
    stats_clients: 'عملاء',
    stats_certifs: 'اعتمادات',
    stats_domains: 'مجالات الخبرة',
    domains_title: 'المجالات والعروض الرئيسة',
    testimonials_title: 'يثق بنا عملاؤنا',
    newsletter_title: 'تابع المستجدات',
    newsletter_sub: 'تصفّح أحدث الأخبار والدورات.',
    newsletter_placeholder: 'بريدك الإلكتروني',
    newsletter_button: 'اشتراك',
    footer_rights: 'جميع الحقوق محفوظة.'
  }
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('fr')
  const t = useMemo(() => (key) => messages[lang]?.[key] ?? key, [lang])
  const dir = lang === 'ar' ? 'rtl' : 'ltr'

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, dir }}>
      <div dir={dir}>{children}</div>
    </LanguageContext.Provider>
  )
}

export function useLang() {
  return useContext(LanguageContext)
}
