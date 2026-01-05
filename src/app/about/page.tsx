'use client';

import Link from 'next/link';
import { useI18n } from '@/lib/i18n';
import { Heart, Users, Award, Globe, Shield, Star, CheckCircle } from 'lucide-react';

export default function AboutPage() {
  const { t, locale } = useI18n();

  const values = [
    {
      icon: Heart,
      title: locale === 'es' ? 'Pasión por Perú' : 'Passion for Peru',
      description: locale === 'es'
        ? 'Amamos compartir las maravillas de nuestro país con familias de todo el mundo.'
        : 'We love sharing the wonders of our country with families from around the world.'
    },
    {
      icon: Shield,
      title: locale === 'es' ? 'Seguridad Primero' : 'Safety First',
      description: locale === 'es'
        ? 'La seguridad de tu familia es nuestra máxima prioridad en cada itinerario.'
        : 'Your family\'s safety is our top priority in every itinerary we create.'
    },
    {
      icon: Users,
      title: locale === 'es' ? 'Enfoque Familiar' : 'Family Focus',
      description: locale === 'es'
        ? 'Cada experiencia está diseñada pensando en todas las edades.'
        : 'Every experience is designed with all ages in mind.'
    },
    {
      icon: Globe,
      title: locale === 'es' ? 'Conocimiento Local' : 'Local Expertise',
      description: locale === 'es'
        ? 'Nuestro equipo de expertos peruanos conoce cada rincón del país.'
        : 'Our team of Peruvian experts knows every corner of the country.'
    }
  ];

  const team = [
    {
      name: 'María García',
      role: locale === 'es' ? 'Fundadora y CEO' : 'Founder & CEO',
      bio: locale === 'es'
        ? 'Madre de tres hijos y viajera apasionada, María fundó Family Travel Peru para compartir su amor por Perú con otras familias.'
        : 'Mother of three and passionate traveler, María founded Family Travel Peru to share her love for Peru with other families.'
    },
    {
      name: 'Carlos Mendoza',
      role: locale === 'es' ? 'Director de Operaciones' : 'Operations Director',
      bio: locale === 'es'
        ? 'Con 20 años en turismo, Carlos asegura que cada viaje sea perfecto de principio a fin.'
        : 'With 20 years in tourism, Carlos ensures every trip is perfect from start to finish.'
    },
    {
      name: 'Ana Luisa Torres',
      role: locale === 'es' ? 'Especialista en Experiencias' : 'Experience Specialist',
      bio: locale === 'es'
        ? 'Ana diseña itinerarios únicos que crean recuerdos familiares inolvidables.'
        : 'Ana designs unique itineraries that create unforgettable family memories.'
    }
  ];

  const stats = [
    { value: '500+', label: locale === 'es' ? 'Familias Felices' : 'Happy Families' },
    { value: '15+', label: locale === 'es' ? 'Años de Experiencia' : 'Years Experience' },
    { value: '50+', label: locale === 'es' ? 'Itinerarios Únicos' : 'Unique Itineraries' },
    { value: '4.9', label: locale === 'es' ? 'Calificación Promedio' : 'Average Rating' },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-peru-earth to-peru-terracotta py-16 lg:py-24">
        <div className="container-peru text-center text-white">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-4">
            {t('about.title')}
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 lg:py-24">
        <div className="container-peru">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-display font-bold text-peru-earth mb-6">
              {t('about.mission_title')}
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              {t('about.mission')}
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-peru-sand">
        <div className="container-peru">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-peru-gold mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 lg:py-24">
        <div className="container-peru">
          <div className="lg:flex lg:items-center lg:gap-16">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <div className="aspect-video bg-gradient-to-br from-peru-gold to-peru-terracotta rounded-2xl flex items-center justify-center">
                <Heart className="w-24 h-24 text-white/50" />
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-display font-bold text-peru-earth mb-6">
                {t('about.story_title')}
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  {locale === 'es'
                    ? 'Family Travel Peru nació de una simple idea: hacer que viajar por Perú en familia sea fácil, seguro y extraordinariamente memorable.'
                    : 'Family Travel Peru was born from a simple idea: to make traveling Peru as a family easy, safe, and extraordinarily memorable.'}
                </p>
                <p>
                  {locale === 'es'
                    ? 'Después de años de experiencia en turismo y como padres nosotros mismos, entendemos los desafíos únicos de viajar con niños. Por eso diseñamos cada itinerario pensando en las necesidades de toda la familia.'
                    : 'After years of experience in tourism and as parents ourselves, we understand the unique challenges of traveling with children. That\'s why we design every itinerary with the whole family\'s needs in mind.'}
                </p>
                <p>
                  {locale === 'es'
                    ? 'Desde la altitud de Cusco hasta la aventura del Amazonas, nos aseguramos de que cada momento esté planificado para crear recuerdos que durarán toda la vida.'
                    : 'From the altitude of Cusco to the adventure of the Amazon, we ensure every moment is planned to create memories that will last a lifetime.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24 bg-peru-sand/30">
        <div className="container-peru">
          <h2 className="text-3xl font-display font-bold text-peru-earth text-center mb-12">
            {locale === 'es' ? 'Nuestros Valores' : 'Our Values'}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <div className="w-16 h-16 bg-peru-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-peru-gold" />
                </div>
                <h3 className="text-xl font-display font-bold text-peru-earth mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 lg:py-24">
        <div className="container-peru">
          <h2 className="text-3xl font-display font-bold text-peru-earth text-center mb-12">
            {t('about.team_title')}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-peru-gold to-peru-terracotta rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-16 h-16 text-white/50" />
                </div>
                <h3 className="text-xl font-display font-bold text-peru-earth mb-1">
                  {member.name}
                </h3>
                <p className="text-peru-terracotta font-medium mb-3">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24 bg-peru-earth text-white">
        <div className="container-peru">
          <h2 className="text-3xl font-display font-bold text-center mb-12">
            {locale === 'es' ? '¿Por Qué Elegirnos?' : 'Why Choose Us?'}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              locale === 'es' ? 'Expertos locales con conocimiento profundo' : 'Local experts with deep knowledge',
              locale === 'es' ? 'Itinerarios probados por familias' : 'Family-tested itineraries',
              locale === 'es' ? 'Soporte 24/7 durante tu viaje' : '24/7 support during your trip',
              locale === 'es' ? 'Precios transparentes sin sorpresas' : 'Transparent pricing with no surprises',
              locale === 'es' ? 'Flexibilidad para personalizar' : 'Flexibility to customize',
              locale === 'es' ? 'Compromiso con turismo responsable' : 'Commitment to responsible tourism',
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-peru-gold flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/contact/" className="btn-gold">
              {t('nav.contact')}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
